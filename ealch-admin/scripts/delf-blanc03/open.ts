// DELF B2 blanc-03 — Production écrite et Production orale. 25 points each.
//
// ── The PO draw ─────────────────────────────────────────────────────────────
//
// The bank draws TWO trigger documents and the candidate chooses one; there is
// still no schema representation for that (TOPICS-delf-b2 §9.2). As with the
// first two papers, the drawn document is authored (DELF-118, a festival funded
// by a company its performers criticise) and the second (DELF-124, a library
// that removes a book and publishes the complaints) is held in the ledger as
// spent by this paper and no other.
//
// ── The PE shape rotates a third time ───────────────────────────────────────
//
// blanc-01 wrote a letter, blanc-02 a consultation contribution, and this is an
// `article` replying to a published column. Three shapes across three papers,
// which is what TOPICS-delf-b2 asks for so no pack defaults to one form.
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
// DELF-106 · a columnist argued regional languages waste school hours; reply.
//
// The prompt quotes the column rather than summarising it, because a reply to a
// summary is a reply to the examiner. The candidate needs an actual sentence to
// disagree with.

export const PE_T1: ExamTask = {
  ...base,
  id: taskId('pe_short', '001'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b2',
  label: 'Production écrite',
  prompt:
    'PRODUCTION ÉCRITE · 25 points · 60 minutes\n\n' +
    'Vous lisez, dans un quotidien national, une chronique intitulée ' +
    '« Trois heures par semaine pour une langue que personne ne parlera ».\n\n' +
    'L’auteur y écrit : « Chaque heure consacrée à une langue régionale ' +
    'est une heure retirée aux mathématiques ou à l’anglais. ' +
    'On peut aimer un patrimoine sans lui sacrifier l’avenir des enfants ' +
    'qui n’ont pas choisi de le porter. »\n\n' +
    'Vous n’êtes pas d’accord avec cette chronique et vous écrivez ' +
    'un article de réponse, destiné au même journal.\n\n' +
    'Prenez position, appuyez-vous sur au moins un argument que vous concédez ' +
    'à l’auteur, et proposez une distinction ou une solution précise. ' +
    '250 mots minimum.',
  timingS: 3600,
  responseSpec: { kind: 'text', minWords: 250 },
  modelAnswer:
    'La chronique parue la semaine dernière repose sur une arithmétique ' +
    'que personne ne conteste et sur une conclusion qui n’en découle pas.\n\n' +
    'L’arithmétique d’abord, puisqu’il faut la reconnaître. Une heure est une heure, ' +
    'et l’emploi du temps d’un enfant de dix ans n’est pas extensible. ' +
    'Quiconque défend un enseignement doit dire ce qu’il déplace, ' +
    'et les partisans des langues régionales le font rarement. ' +
    'Sur ce point, l’auteur a raison contre une partie de mon camp.\n\n' +
    'Sa conclusion, en revanche, suppose que ces trois heures produisent ' +
    'uniquement une langue que personne ne parlera. C’est là que je ne le suis plus. ' +
    'Les enfants scolarisés dans les classes bilingues de ma région ' +
    'obtiennent en français des résultats équivalents à ceux des autres classes, ' +
    'et supérieurs en anglais. Ce résultat est connu, il est publié, ' +
    'et il rend la phrase sur l’avenir sacrifié difficile à tenir.\n\n' +
    'Je propose une distinction que la chronique n’opère pas. ' +
    'Il y a une différence entre enseigner une langue et enseigner dans cette langue. ' +
    'Le premier dispositif coûte des heures, et c’est celui que l’auteur décrit. ' +
    'Le second n’en coûte aucune : on fait la géographie en breton ' +
    'à l’heure où on la ferait en français. Les résultats que je viens de citer ' +
    'viennent du second, et l’auteur les impute au premier.\n\n' +
    'Reste sa dernière phrase, la plus forte : ces enfants n’ont pas choisi. ' +
    'C’est exact, et c’est vrai de tout ce qu’une école enseigne. ' +
    'Un enfant ne choisit pas non plus l’anglais. La question n’est donc pas ' +
    'celle du choix, mais celle de savoir ce qu’une génération transmet ' +
    'quand elle décide qu’une langue ne vaut plus les heures qu’elle coûte.',
  rubric: {
    criteria: [
      {
        key: 'consigne',
        label: 'Respect de la consigne',
        maxPoints: 5,
        descriptors: [
          'Un article de réponse destiné à un journal, pas une lettre à l’auteur ni une dissertation.',
          'Les trois éléments demandés sont présents : une position, une concession explicite, une distinction ou une solution précise.',
          'Une copie qui ne répond pas à la chronique citée, mais au sujet en général, perd ce point.',
        ],
      },
      {
        key: 'argumentation',
        label: 'Qualité de l’argumentation',
        maxPoints: 6,
        descriptors: [
          'La position est soutenue par des raisons, non par l’indignation.',
          'La concession porte sur un point qui coûte réellement quelque chose à la position défendue.',
          'Une concession annulée dans la même phrase par « mais » ne compte pas.',
        ],
      },
      {
        key: 'precision',
        label: 'Précision de la distinction proposée',
        maxPoints: 4,
        descriptors: [
          'La distinction ou la solution est assez précise pour changer quelque chose au raisonnement de l’auteur.',
          '« Il faut mieux expliquer » n’en est pas une ; « enseigner une langue plutôt qu’enseigner dans cette langue » en est une.',
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et connecteurs',
        maxPoints: 4,
        descriptors: [
          'La réponse suit l’ordre de l’argument contesté plutôt qu’un plan appris.',
          'Les connecteurs de concession et d’opposition ne sont pas confondus.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction lexicale et grammaticale',
        maxPoints: 6,
        descriptors: [
          'Le registre est celui de la presse : soutenu, sans familiarité ni emphase.',
          'Les erreurs ne portent pas sur les structures de la concession et de l’opposition.',
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
    'LE FESTIVAL, SON FINANCEUR, ET CE QUE CHANTENT SES ARTISTES\n\n' +
    'Le festival des Rives, qui réunit chaque été douze mille personnes ' +
    'dans une commune de quatre mille habitants, a signé en janvier ' +
    'un partenariat de trois ans avec une entreprise de transport routier. ' +
    'Le contrat couvre quarante pour cent du budget.\n\n' +
    'Sept des vingt-deux artistes programmés ont signé une lettre ouverte. ' +
    'Ils rappellent que l’entreprise est la première émettrice de la région ' +
    'et que plusieurs d’entre eux chantent précisément cela. ' +
    'Deux ont annoncé qu’ils se retireraient si le contrat était maintenu.\n\n' +
    'La directrice du festival répond que sans ce partenariat ' +
    'la programmation passerait de vingt-deux à treize artistes, ' +
    'et que les neuf places supprimées seraient celles des groupes ' +
    'qui ne remplissent pas encore une salle. ' +
    '« Refuser cet argent est un choix que je peux faire, dit-elle. ' +
    'Ce n’est pas moi qui en paierais le prix. »',
  prepS: 1800,
  timingS: 420,
  responseSpec: { kind: 'audio', minDurationS: 300, maxDurationS: 420 },
  modelAnswer:
    'Le document ne demande pas si l’on peut accepter de l’argent d’une entreprise polluante. ' +
    'Il met face à face deux façons de tenir une position, ' +
    'et il les fait porter par des personnes différentes : ' +
    'les artistes tiennent la leur en refusant, la directrice tient la sienne ' +
    'en acceptant, et chacune a raison depuis l’endroit où elle se trouve. ' +
    'La phrase qui organise tout le document est la dernière : ' +
    'ce n’est pas elle qui paierait le prix du refus.\n\n' +
    'Je considère que le partenariat est défendable et que la manière de le défendre ne l’est pas. ' +
    'Défendable, parce que la directrice a raison sur le fait : ' +
    'sans ces quarante pour cent, neuf groupes ne jouent pas, ' +
    'et ce sont les moins établis, c’est-à-dire ceux pour qui une date compte le plus. ' +
    'Le coût du refus est réel, il est identifiable, et il tombe sur des gens ' +
    'qui n’ont pas été consultés.\n\n' +
    'Ce qui ne va pas, c’est l’argument lui-même. « Ce n’est pas moi qui paierais » ' +
    'justifie à peu près n’importe quel financement, ' +
    'puisqu’il y a toujours quelqu’un de plus fragile au bout de la chaîne. ' +
    'Il place la directrice à l’abri de sa propre décision.\n\n' +
    'Je proposerais donc une chose simple, qui manque au document : ' +
    'que le contrat soit rendu public et discuté avec les artistes avant signature, ' +
    'et non annoncé après. Sept sur vingt-deux ont écrit ; ' +
    'aucun n’a dit avoir été prévenu. Une partie de ce conflit ' +
    'ne porte pas sur l’argent mais sur le fait de l’apprendre par la presse.',
  rubric: {
    criteria: [
      {
        key: 'probleme',
        label: 'Dégager le problème',
        maxPoints: 5,
        descriptors: [
          'Le problème est identifié comme un conflit entre deux positions défendables, non résumé comme « le sponsoring pollue ».',
          'Le candidat repère que le coût du refus tombe sur des tiers qui n’ont pas décidé.',
          'Un candidat qui reformule le document sans nommer la tension n’a pas dégagé le problème.',
        ],
      },
      {
        key: 'position',
        label: 'Prise de position et argumentation',
        maxPoints: 6,
        descriptors: [
          'La position est explicite et tenue, y compris si elle distingue le fond de la manière.',
          'Les arguments s’appuient sur les éléments du document plutôt que sur des généralités sur l’écologie.',
        ],
      },
      {
        key: 'exemple',
        label: 'Usage des éléments du document',
        maxPoints: 4,
        descriptors: [
          'Les chiffres servent un raisonnement au lieu d’être récités.',
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
          'Le lexique du financement, de la responsabilité et de la concession est disponible.',
          'Les erreurs n’obligent pas l’examinateur à reconstruire la phrase.',
        ],
      },
    ],
  },
};

/* ═══ LE DÉBAT ════════════════════════════════════════════════════════════ */

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
  modelAnswer:
    'Je vous accorde le point immédiatement : neuf groupes qui ne jouent pas, ' +
    'ce sont neuf dates réelles, et je ne vais pas défendre un refus ' +
    'en prétendant qu’il ne coûte rien à personne.\n\n' +
    'Là où je ne vous suis pas, c’est sur ce que cela autorise. ' +
    'Vous me dites que la directrice est responsable de sa programmation. ' +
    'D’accord. Elle est aussi responsable de ce qu’elle met dans la bouche ' +
    'de ses artistes, et sept d’entre eux ont écrit qu’ils chantent l’inverse ' +
    'de ce que finance la scène. Ce n’est pas une susceptibilité, ' +
    'c’est la matière de leur travail.\n\n' +
    'Sur les deux retraits annoncés, vous avez raison et je retire l’argument. ' +
    'Deux sur vingt-deux ne prouvent pas une position collective, ' +
    'et j’avais tort d’en faire un chiffre. Ce qui reste, c’est la lettre : ' +
    'sept signataires, cela se discute.\n\n' +
    'Et je maintiens l’essentiel. Vous me demandez ce que j’aurais fait à sa place. ' +
    'J’aurais signé, probablement, et j’aurais montré le contrat avant de signer. ' +
    'La différence entre nous n’est pas l’argent : c’est que sa décision ' +
    'a été apprise par ceux qu’elle engageait, et qu’une décision défendable ' +
    'annoncée de cette manière devient indéfendable pour une raison ' +
    'qui n’a rien à voir avec le transport routier.',
  debate: {
    question: 'Un festival peut-il accepter le financement d’une entreprise que ses artistes critiquent ?',
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
        'Vous défendez la signature du partenariat, ' +
        'ou vous estimez que le festival aurait dû refuser cet argent ?',
      cues: [],
      covers: 'lever l’ambiguïté sur la position défendue',
    },
    sideCues: {
      // "pour" = the candidate defends signing the partnership.
      pour: [
        'il fallait signer', 'je defends le partenariat', 'la directrice a raison',
        'accepter cet argent', 'le festival a bien fait', 'sans cet argent rien',
      ],
      contre: [
        'il fallait refuser', 'je suis contre le partenariat', 'la directrice a tort',
        'refuser cet argent', 'le festival a mal fait', 'on ne signe pas avec eux',
      ],
    },
    axes: [
      /* ── against POUR: the candidate defends signing ─────────────────────── */
      {
        id: 'coherence',
        against: 'pour',
        about: 'ce que le festival dit et ce qu’il finance',
        moves: [
          M('ch1', 'counter', 1,
            'Sept artistes sur vingt-deux disent que la scène finance exactement ce qu’ils dénoncent. Vous leur demandez de chanter contre leur propre affiche. Comment appelez-vous cela ?',
            'la contradiction est portée par ceux qui montent sur scène'),
          M('ch2', 'probe', 2,
            'Vous me dites que le public fait la différence. Sur quoi vous appuyez-vous ? Le nom du financeur est sur le billet et sur le portail d’entrée.',
            'la séparation supposée entre la scène et le financeur'),
          M('ch3', 'concession', 3,
            'Vous venez d’admettre que la contradiction est visible. Vous défendez donc un festival qui affiche une chose et en finance une autre, et vous appelez cela un compromis. Qu’est-ce qui, dans ce compromis, n’est pas simplement le fait que l’argent a gagné ?',
            'la concession sur la visibilité retournée contre le mot compromis'),
          M('ch-r', 'retreat', 1,
            'Vous semblez maintenant dire l’inverse de ce que vous défendiez. Qu’est-ce qui vous a fait changer d’avis exactement ?',
            'retraite : demander la raison du changement'),
        ],
      },
      {
        id: 'consultation',
        against: 'pour',
        about: 'une décision apprise par la presse',
        moves: [
          M('cs1', 'counter', 1,
            'Aucun des sept signataires ne dit avoir été prévenu. Le contrat couvre trois ans et quarante pour cent du budget. Est-il normal que les artistes l’apprennent après ?',
            'l’absence de consultation avant signature'),
          M('cs2', 'consequence', 2,
            'Si votre réponse est qu’une direction décide seule, alors la prochaine fois elle décidera seule aussi, et vous aurez la même lettre. Vous acceptez de revivre ce conflit chaque année ?',
            'la répétition prévisible du conflit'),
          M('cs3', 'concession', 3,
            'Vous reconnaissez qu’il aurait fallu consulter. Votre désaccord avec les artistes porte donc sur la méthode, pas sur le principe. Pourquoi défendez-vous encore la décision telle qu’elle a été prise ?',
            'la concession sur la méthode retournée sur la décision elle-même'),
        ],
      },
      {
        id: 'seuil',
        against: 'pour',
        about: 'où passe la limite',
        moves: [
          M('sl1', 'probe', 1,
            'Quarante pour cent d’une entreprise très émettrice, vous l’acceptez. À quel pourcentage refuseriez-vous, et pour quelle entreprise ?',
            'l’absence de seuil rend le principe illimité'),
          M('sl2', 'counter-example', 2,
            'Un festival voisin a refusé un partenariat d’armement pour dix pour cent de son budget. Vous diriez qu’il a eu tort ?',
            'le contre-exemple d’un refus jugé légitime'),
          M('sl3', 'consequence', 3,
            'Si le critère est le montant, alors plus un financeur est problématique, plus il lui suffit de payer cher. Vous voyez le problème ?',
            'le critère du montant s’inverse contre lui-même'),
        ],
      },
      {
        id: 'artistes',
        against: 'pour',
        about: 'ce qu’on demande aux programmés',
        moves: [
          M('ar1', 'steelman', 1,
            'Je vous accorde votre meilleur point : neuf groupes joueront qui n’auraient pas joué. Cela vaut-il qu’on demande à sept autres de se taire ?',
            'le bénéfice réel mis en balance avec ce qu’il exige'),
          M('ar2', 'counter', 2,
            'Deux artistes ont annoncé leur retrait. Si trois autres suivent, le festival perd en programmation ce qu’il a gagné en budget. Votre calcul tient-il encore ?',
            'le bénéfice net menacé par les départs'),
          M('ar3', 'consequence', 3,
            'À terme, ce festival programmera des artistes qui ne posent pas la question. C’est une sélection, et elle ne dit pas son nom. Vous l’acceptez ?',
            'la sélection silencieuse produite par le financement'),
        ],
      },

      /* ── against CONTRE: the candidate wants the money refused ───────────── */
      {
        id: 'cout',
        against: 'contre',
        about: 'qui paie le refus',
        moves: [
          M('co1', 'counter', 1,
            'Neuf groupes ne jouent pas. Ce sont ceux qui ne remplissent pas encore une salle, donc ceux pour qui une date compte le plus. Que leur dites-vous ?',
            'le coût du refus tombe sur les moins établis'),
          M('co2', 'probe', 2,
            'Vous parlez de financements publics et de billetterie. Le budget manquant est de quarante pour cent. Où le trouvez-vous, précisément, avant l’été prochain ?',
            'l’alternative doit être chiffrée et datée'),
          M('co3', 'concession', 3,
            'Vous admettez ne pas avoir de solution pour cette édition. Vous demandez donc un refus dont vous savez qu’il supprimera neuf concerts. Assumez-vous ce choix, ou attendiez-vous que quelqu’un d’autre le résolve ?',
            'la concession sur l’absence de solution ramenée à la responsabilité du refus'),
          M('co-r', 'retreat', 1,
            'Vous semblez maintenant dire l’inverse de ce que vous défendiez. Qu’est-ce qui vous a fait changer d’avis exactement ?',
            'retraite : demander la raison du changement'),
        ],
      },
      {
        id: 'purete',
        against: 'contre',
        about: 'où s’arrête le refus',
        moves: [
          M('pu1', 'counter-example', 1,
            'La commune subventionne le festival, et son budget vient d’impôts payés par cette même entreprise. Refusez-vous aussi la subvention ?',
            'l’argent problématique est déjà là par un autre chemin'),
          M('pu2', 'probe', 2,
            'Vous répondez que l’impôt est indirect. La différence est-elle morale ou seulement visible ? Si elle est visible, vous défendez une apparence.',
            'la distinction direct/indirect tient-elle autre chose que l’apparence'),
          M('pu3', 'consequence', 3,
            'À ce compte, un festival sans financement discutable est un festival sans financement. C’est une position tenable, mais dites-la : vous préférez qu’il n’existe pas.',
            'la conséquence extrême de la règle proposée'),
        ],
      },
      {
        id: 'levier',
        against: 'contre',
        about: 'ce qu’un contrat permet d’obtenir',
        moves: [
          M('le1', 'counter', 1,
            'Un financeur sous contrat est un financeur à qui l’on peut demander quelque chose. Un financeur refusé ne doit plus rien à personne. Vous préférez la seconde situation ?',
            'le contrat comme moyen de pression plutôt que caution'),
          M('le2', 'steelman', 2,
            'Votre argument le plus fort, à mon sens, est que ce contrat achète le silence des programmés. Admettons qu’il garantisse expressément leur liberté de propos : refuseriez-vous encore ?',
            'le désaccord porte-t-il sur l’argent ou sur le silence'),
          M('le3', 'concession', 3,
            'Vous venez de dire qu’une clause changerait votre jugement. Votre opposition porte donc sur les termes, pas sur l’origine de l’argent. Pourquoi demander le refus plutôt que la clause ?',
            'la concession sur la clause retournée en question sur le refus'),
        ],
      },
      {
        id: 'commune',
        against: 'contre',
        about: 'les quatre mille habitants',
        moves: [
          M('cm1', 'counter', 1,
            'Douze mille personnes dans une commune de quatre mille, c’est la principale ressource de l’été pour les commerces. Le refus les concerne aussi. Ont-ils voix au chapitre ?',
            'le refus a des effets hors du festival'),
          M('cm2', 'probe', 2,
            'Vous dites que ce n’est pas leur décision. Ce sont pourtant eux qui subiront une édition réduite. Sur quel principe les écartez-vous ?',
            'qui est légitime à décider'),
          M('cm3', 'consequence', 3,
            'Si seuls les artistes décident, alors un festival appartient à ceux qui montent sur scène et non à ceux qui le reçoivent. C’est une position ; elle a des conséquences que vous n’avez pas énoncées.',
            'la conséquence sur la propriété de l’événement'),
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
