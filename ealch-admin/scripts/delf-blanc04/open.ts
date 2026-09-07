// DELF B2 blanc-04 — Production écrite et Production orale. 25 points each.
//
// ── The PO draw ─────────────────────────────────────────────────────────────
//
// The bank draws TWO trigger documents and the candidate chooses one; there is
// still no schema representation for that (TOPICS-delf-b2 §9.2). As with the
// first three papers, the drawn document is authored (DELF-115, a newspaper that
// pays its sources and says so) and the second (DELF-117, a landlord who
// renovates until no existing tenant can stay) is held in the ledger as spent by
// this paper and no other.
//
// ── The PE shape ────────────────────────────────────────────────────────────
//
// A `letter`, which blanc-01 also used. Three shapes over five papers means one
// repeats; the situations share nothing beyond the form. blanc-01 writes as a
// residents' representative to a council about a garden; this writes on behalf
// of patients to a clinic director about a telephone line, which is a different
// register, a different addressee and a different kind of ask.
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
// DELF-105 · a clinic replaced its phone line with an app; write to the
// director on behalf of the patients' association.
//
// The prompt gives the clinic's own reason in its own words, because a letter
// that argues against a reason nobody stated is a letter to nobody.

export const PE_T1: ExamTask = {
  ...base,
  id: taskId('pe_short', '001'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b2',
  label: 'Production écrite',
  prompt:
    'PRODUCTION ÉCRITE · 25 points · 60 minutes\n\n' +
    'Le centre de santé de votre quartier a supprimé son accueil téléphonique ' +
    'le mois dernier. Les rendez-vous se prennent désormais uniquement ' +
    'par une application.\n\n' +
    'La direction a justifié la décision dans une lettre affichée à l’entrée : ' +
    '« Nos secrétaires passaient soixante pour cent de leur temps au téléphone. ' +
    'Elles le passent maintenant avec les patients qui sont devant elles. ' +
    'Le délai moyen d’obtention d’un rendez-vous est passé de neuf à quatre jours. »\n\n' +
    'Vous êtes membre de l’association des usagers du centre. ' +
    'Vous écrivez à la directrice.\n\n' +
    'Reconnaissez ce que la mesure a effectivement amélioré, ' +
    'exposez le problème qu’elle crée pour une partie des usagers, ' +
    'et demandez une modification précise plutôt que le retour à la situation ancienne. ' +
    '250 mots minimum.',
  timingS: 3600,
  responseSpec: { kind: 'text', minWords: 250 },
  modelAnswer:
    'Madame la Directrice,\n\n' +
    'Je vous écris au nom de l’association des usagers, ' +
    'après la réunion de nos adhérents du 12 de ce mois.\n\n' +
    'Je veux commencer par ce que votre lettre affichée établit, ' +
    'et que nous ne contestons pas. Neuf jours ramenés à quatre est un résultat, ' +
    'et il bénéficie à la majorité de nos adhérents. ' +
    'Plusieurs d’entre eux nous ont dit avoir obtenu un rendez-vous ' +
    'dans la semaine pour la première fois depuis des années. ' +
    'Nous ne demandons pas le retour du standard téléphonique, ' +
    'et nous ne défendrons pas une organisation dont nous savons ' +
    'ce qu’elle coûtait à vos secrétaires.\n\n' +
    'Le problème que nous constatons ne concerne pas la majorité, ' +
    'et c’est précisément pourquoi il ne remontera pas jusqu’à vous ' +
    'par les chiffres dont vous disposez. ' +
    'Sur nos quatre-vingt-douze adhérents, onze n’ont pas de téléphone ' +
    'permettant d’installer l’application. Neuf d’entre eux ont plus de soixante-quinze ans. ' +
    'Depuis un mois, sept se sont présentés au centre sans rendez-vous, ' +
    'et l’un est reparti sans avoir été reçu. ' +
    'Ces personnes ne figurent pas dans votre délai moyen, ' +
    'parce qu’elles n’ont pas pris de rendez-vous du tout.\n\n' +
    'Nous ne demandons donc pas de revenir en arrière, ' +
    'mais d’ajouter une porte. Une ligne ouverte deux heures par jour, ' +
    'entre huit et dix heures, réservée à la prise de rendez-vous ' +
    'et annoncée comme telle. Deux heures représentent moins d’un quart ' +
    'du temps que vos secrétaires ont récupéré, ' +
    'et cela suffirait aux onze personnes que je viens de décrire.\n\n' +
    'Nous sommes prêts à faire connaître ce créneau auprès de nos adhérents ' +
    'et à en assurer l’affichage. Je reste à votre disposition ' +
    'pour en discuter à la date qui vous conviendra.\n\n' +
    'Je vous prie d’agréer, Madame la Directrice, l’expression de ma considération distinguée.',
  rubric: {
    criteria: [
      {
        key: 'consigne',
        label: 'Respect de la consigne',
        maxPoints: 5,
        descriptors: [
          'Une lettre à une destinataire nommée, écrite au nom d’une association, avec les conventions d’ouverture et de clôture.',
          'Les trois éléments demandés sont présents : une reconnaissance de ce qui a fonctionné, un problème exposé, une demande précise.',
          'Une copie qui réclame le retour au téléphone n’a pas fait ce qui était demandé, même bien écrite.',
        ],
      },
      {
        key: 'concession',
        label: 'Qualité de la reconnaissance',
        maxPoints: 5,
        descriptors: [
          'Ce qui est accordé porte sur le point que la direction met en avant, pas sur une politesse générale.',
          'La reconnaissance survit au reste de la lettre : elle n’est pas annulée à la phrase suivante.',
        ],
      },
      {
        key: 'probleme',
        label: 'Exposé du problème',
        maxPoints: 5,
        descriptors: [
          'Le problème est décrit assez concrètement pour être vérifié par la destinataire.',
          'Le candidat explique pourquoi ce problème n’apparaît pas dans les chiffres cités, ce qui est le cœur du sujet.',
        ],
      },
      {
        key: 'demande',
        label: 'Précision de la demande',
        maxPoints: 4,
        descriptors: [
          'La demande est assez précise pour recevoir un oui ou un non : un créneau, une durée, un public.',
          '« Prendre en compte les personnes âgées » n’est pas une demande ; « une ligne de huit à dix heures » en est une.',
        ],
      },
      {
        key: 'langue',
        label: 'Registre, correction lexicale et grammaticale',
        maxPoints: 6,
        descriptors: [
          'Le registre est celui d’une lettre institutionnelle : ferme sans être agressif, poli sans être suppliant.',
          'Les formules d’ouverture et de clôture sont conformes et non mélangées.',
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
    'UN JOURNAL PAIE SES SOURCES, ET L’ÉCRIT SOUS CHAQUE ARTICLE\n\n' +
    'Le quotidien régional La Dépêche de Rangeac a modifié sa charte en janvier. ' +
    'Il rémunère désormais certaines sources, et publie sous chaque article concerné ' +
    'une ligne indiquant la somme versée.\n\n' +
    'La rédactrice en chef explique la décision par une enquête ' +
    'qui n’a pas pu être publiée l’an dernier. ' +
    'Deux salariées d’un entrepôt logistique avaient documenté leurs conditions de travail ' +
    'pendant sept mois. Elles ont demandé une compensation ' +
    'pour les journées de congé prises afin de rencontrer les journalistes. ' +
    'Le journal a refusé, au nom du principe. Les deux femmes ont renoncé, ' +
    'et l’enquête est restée dans un tiroir.\n\n' +
    'Le syndicat national des journalistes a désapprouvé la nouvelle charte. ' +
    'Il rappelle qu’une source payée a un intérêt à ce que son information soit publiée, ' +
    'et qu’aucune ligne sous un article ne supprime cet intérêt.\n\n' +
    '« Nous ne prétendons pas l’avoir supprimé, répond la rédactrice en chef. ' +
    'Nous prétendons l’avoir écrit. Les sources qui parlent gratuitement ' +
    'ont aussi des intérêts, et ceux-là, personne ne les imprime. »',
  prepS: 1800,
  timingS: 420,
  responseSpec: { kind: 'audio', minDurationS: 300, maxDurationS: 420 },
  modelAnswer:
    'Le document oppose deux principes qui protègent la même chose : ' +
    'la fiabilité de ce qu’un lecteur lit. Le syndicat la protège en refusant l’argent ; ' +
    'le journal la protège en publiant le montant. ' +
    'Ce qui rend le cas difficile, c’est que l’exemple qui déclenche tout ' +
    'est un exemple où le principe du syndicat a produit un silence.\n\n' +
    'Je suis favorable à cette charte, avec une réserve sur son étendue.\n\n' +
    'Favorable, d’abord, parce que l’argument du syndicat est vrai et incomplet. ' +
    'Oui, une source payée a intérêt à être publiée. ' +
    'Mais une source gratuite en a aussi : un cadre qui parle contre son concurrent, ' +
    'un élu qui parle avant une élection, un salarié qui règle un compte. ' +
    'Ces intérêts-là ne sont pas neutres et ils ne sont pas imprimés. ' +
    'La charte ne crée donc pas un intérêt, elle rend visible ' +
    'un des rares intérêts qui soit chiffrable.\n\n' +
    'Ensuite, parce que le cas des deux salariées montre le coût de la règle actuelle. ' +
    'Sept mois de documentation, des journées de congé posées, ' +
    'et un refus au nom d’un principe. Le résultat n’est pas une information plus pure : ' +
    'c’est une information absente. Une règle dont le coût tombe systématiquement ' +
    'sur les sources les moins fortunées produit un journal ' +
    'où seuls les gens qui peuvent se le permettre parlent.\n\n' +
    'Ma réserve porte sur ce que l’on paie. Rembourser des journées de congé perdues ' +
    'et acheter un témoignage ne sont pas la même opération, ' +
    'et une seule ligne sous l’article les affiche de la même façon. ' +
    'Je voudrais que la charte distingue les deux, ' +
    'parce que c’est la distinction sur laquelle le journal sera attaqué ' +
    'la première fois qu’il paiera cher.',
  rubric: {
    criteria: [
      {
        key: 'probleme',
        label: 'Dégager le problème',
        maxPoints: 5,
        descriptors: [
          'Le problème est identifié comme un conflit entre deux façons de protéger la fiabilité, non résumé comme « payer les sources, c’est mal ».',
          'Le candidat repère que le principe du syndicat a produit, dans le cas cité, une enquête non publiée.',
        ],
      },
      {
        key: 'position',
        label: 'Prise de position et argumentation',
        maxPoints: 6,
        descriptors: [
          'La position est explicite et tenue, y compris lorsqu’elle est assortie d’une réserve.',
          'Les arguments s’appuient sur les éléments du document plutôt que sur des généralités sur la presse.',
        ],
      },
      {
        key: 'exemple',
        label: 'Usage des éléments du document',
        maxPoints: 4,
        descriptors: [
          'Les sept mois, les journées de congé et la ligne publiée servent un raisonnement au lieu d’être récités.',
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
          'Le lexique de l’intérêt, de la transparence et de la contrepartie est disponible.',
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
    'Je vous accorde tout de suite le point le plus solide : ' +
    'une somme imprimée sous un article ne dit rien de ce qu’elle a acheté. ' +
    'Deux cents euros peuvent être un remboursement de congés ' +
    'ou le prix d’une phrase, et la ligne les écrit pareil.\n\n' +
    'Là où je ne vous suis pas, c’est sur la comparaison. ' +
    'Vous mesurez la charte contre un journalisme où personne n’a d’intérêt. ' +
    'Ce journalisme n’existe pas. Comparez-la à ce qu’elle remplace : ' +
    'une règle sous laquelle deux femmes ont documenté sept mois de travail ' +
    'et n’ont rien pu publier parce qu’elles ne pouvaient pas ' +
    'se payer les jours de congé.\n\n' +
    'Sur le risque d’escalade, vous avez raison et je retire ce que j’ai dit. ' +
    'J’ai prétendu que les montants resteraient faibles ; je n’en sais rien, ' +
    'et rien dans la charte ne le garantit. C’est un plafond qu’il faut, ' +
    'et il n’y en a pas.\n\n' +
    'Ce que je maintiens, c’est la direction. Une information dont le coût ' +
    'tombe toujours sur les sources les plus pauvres n’est pas une information neutre, ' +
    'c’est une information filtrée par la fortune de ceux qui parlent. ' +
    'La charte se trompe peut-être de méthode. Le silence, lui, ne se trompe pas : ' +
    'il ne dit rien du tout.',
  debate: {
    question: 'Un journal peut-il rémunérer ses sources s’il publie la somme versée ?',
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
        'Vous approuvez la charte de ce journal, ' +
        'ou vous estimez qu’il n’aurait pas dû payer ses sources ?',
      cues: [],
      covers: 'lever l’ambiguïté sur la position défendue',
    },
    sideCues: {
      // "pour" = the candidate approves the charter.
      pour: [
        'je suis pour la charte', 'il faut payer les sources', 'la redactrice a raison',
        'publier la somme suffit', 'le journal a bien fait', 'sans paiement rien ne sort',
      ],
      contre: [
        'je suis contre la charte', 'on ne paie pas une source', 'la redactrice a tort',
        'publier la somme ne suffit pas', 'le journal a mal fait', 'le syndicat a raison',
      ],
    },
    axes: [
      /* ── against POUR: the candidate approves the charter ────────────────── */
      {
        id: 'ligne',
        against: 'pour',
        about: 'ce qu’une ligne publiée dit vraiment',
        moves: [
          M('li1', 'counter', 1,
            'Une somme imprimée ne dit pas ce qu’elle a acheté. Deux cents euros peuvent rembourser des congés ou payer une phrase, et votre ligne les écrit de la même façon. Que lit le lecteur ?',
            'la transparence affiche un montant sans afficher sa nature'),
          M('li2', 'probe', 2,
            'Vous répondez qu’on pourrait préciser la nature du versement. Qui la vérifie ? Le journal se contrôle lui-même dans votre dispositif.',
            'la déclaration n’est vérifiée par personne'),
          M('li3', 'concession', 3,
            'Vous venez d’admettre que la ligne est déclarative. Vous défendez donc une transparence dont la seule garantie est la parole de celui qui paie. En quoi est-ce mieux qu’un secret assumé ?',
            'la concession sur le caractère déclaratif retournée sur la garantie'),
          M('li-r', 'retreat', 1,
            'Vous semblez maintenant dire l’inverse de ce que vous défendiez. Qu’est-ce qui vous a fait changer d’avis exactement ?',
            'retraite : demander la raison du changement'),
        ],
      },
      {
        id: 'escalade',
        against: 'pour',
        about: 'ce que le marché fait des prix',
        moves: [
          M('es1', 'consequence', 1,
            'Si une source sait qu’un journal paie, elle demandera davantage au suivant. Vous ouvrez un marché. Où s’arrête-t-il ?',
            'la rémunération crée une enchère entre rédactions'),
          M('es2', 'counter-example', 2,
            'Une chaîne étrangère a payé un témoin quarante mille euros l’an dernier et l’a publié en toutes lettres. La transparence n’a rien empêché. Vous l’approuvez aussi ?',
            'un contre-exemple où la publication n’a rien retenu'),
          M('es3', 'consequence', 3,
            'À ce compte, les journaux riches obtiendront les témoignages et les autres n’en auront pas. Vous défendez une règle qui avantage les grandes rédactions. C’est ce que vous vouliez ?',
            'la conséquence sur la concurrence entre journaux'),
        ],
      },
      {
        id: 'verite',
        against: 'pour',
        about: 'ce qu’une source payée raconte',
        moves: [
          M('ve1', 'counter', 1,
            'Le syndicat dit qu’une source payée a intérêt à ce que son information soit publiée, donc à la rendre publiable. Elle en rajoutera. Comment le journal s’en protège-t-il ?',
            'le paiement crée une incitation à embellir'),
          M('ve2', 'probe', 2,
            'Vous invoquez la vérification. Les deux salariées ont documenté sept mois, soit. Et le témoin unique, sans document, payé pour un récit invérifiable ? La charte ne l’exclut pas.',
            'la charte ne distingue pas les sources documentées des autres'),
          M('ve3', 'concession', 3,
            'Vous reconnaissez qu’il faudrait exclure ce cas. Votre approbation porte donc sur une charte qui n’est pas celle du document. Défendez-vous ce journal ou celui que vous auriez écrit ?',
            'la concession sur l’exclusion retournée sur l’objet du débat'),
        ],
      },
      {
        id: 'gratuit',
        against: 'pour',
        about: 'ceux qui parlent sans être payés',
        moves: [
          M('gr1', 'steelman', 1,
            'Je vous accorde votre meilleur argument : les sources gratuites ont aussi des intérêts et personne ne les imprime. Cela justifie-t-il d’en ajouter un, ou d’imprimer les autres ?',
            'l’argument des intérêts cachés mène-t-il au paiement'),
          M('gr2', 'counter', 2,
            'Ceux qui parlent par devoir civique liront qu’un autre a été payé pour la même chose. Vous ne craignez pas qu’ils cessent, ou qu’ils demandent leur part ?',
            'l’effet du paiement sur les sources bénévoles'),
          M('gr3', 'consequence', 3,
            'À terme, un journal ne recevra plus que des sources payantes, et il aura perdu celles qui ne demandaient rien. Vous acceptez ce troc ?',
            'la conséquence sur la composition des sources'),
        ],
      },

      /* ── against CONTRE: the candidate sides with the union ──────────────── */
      {
        id: 'silence',
        against: 'contre',
        about: 'ce que coûte le refus',
        moves: [
          M('si1', 'counter', 1,
            'Sept mois de documentation, deux salariées, une enquête dans un tiroir. Votre principe a produit ce silence. Que dites-vous à ces deux femmes ?',
            'le refus a un coût et il est identifiable'),
          M('si2', 'probe', 2,
            'Vous répondez que le journal aurait dû trouver un autre moyen. Lequel ? Elles demandaient des journées de congé, pas une prime.',
            'l’alternative doit être nommée'),
          M('si3', 'concession', 3,
            'Vous admettez qu’un remboursement de frais serait acceptable. Alors nous discutons du montant et du mot, pas du principe. Pourquoi maintenez-vous que le principe est en cause ?',
            'la concession sur les frais retournée sur le principe'),
          M('si-r', 'retreat', 1,
            'Vous semblez maintenant dire l’inverse de ce que vous défendiez. Qu’est-ce qui vous a fait changer d’avis exactement ?',
            'retraite : demander la raison du changement'),
        ],
      },
      {
        id: 'fortune',
        against: 'contre',
        about: 'qui peut se permettre de parler',
        moves: [
          M('fo1', 'counter', 1,
            'Une règle qui interdit toute compensation fait parler ceux qui peuvent perdre une journée sans compter. Cadres, retraités, indépendants. C’est le journal que vous voulez ?',
            'la gratuité filtre les sources par la fortune'),
          M('fo2', 'counter-example', 2,
            'Les tribunaux indemnisent les témoins, et personne ne dit que la justice achète des témoignages. Où est la différence ?',
            'un contre-exemple institutionnel de compensation admise'),
          M('fo3', 'consequence', 3,
            'Si votre règle tient, les conditions de travail dans les entrepôts seront racontées par des gens qui n’y travaillent pas. Vous préférez ce récit-là ?',
            'la conséquence sur qui raconte quoi'),
        ],
      },
      {
        id: 'secret',
        against: 'contre',
        about: 'ce qui se pratique déjà',
        moves: [
          M('se1', 'probe', 1,
            'Des journaux paient des frais de déplacement, des nuits d’hôtel, des avocats. Rien de cela n’est publié. Votre principe interdit-il ces pratiques, ou seulement leur nom ?',
            'la ligne du principe est déjà franchie sans être dite'),
          M('se2', 'counter', 2,
            'Alors ce que la charte change n’est pas le paiement, c’est l’aveu. Vous reprochez à ce journal d’écrire ce que les autres taisent.',
            'la charte rend visible une pratique existante'),
          M('se3', 'concession', 3,
            'Vous concédez que ces frais existent partout. Votre opposition porte donc sur le seuil, et vous ne l’avez pas fixé. Où passe-t-il ?',
            'la concession sur les pratiques existantes exige un seuil'),
        ],
      },
      {
        id: 'lecteur',
        against: 'contre',
        about: 'ce qu’on doit au lecteur',
        moves: [
          M('le1', 'steelman', 1,
            'Votre meilleur point, à mon sens, est qu’une somme publiée jette un doute sur l’article. Admettons. Le doute informé est-il pire que la confiance non informée ?',
            'la publication crée un doute, et le doute est-il un défaut'),
          M('le2', 'counter', 2,
            'Sans la ligne, le lecteur croit lire un témoignage désintéressé et se trompe. Avec elle, il sait et décide. Vous préférez qu’il se trompe ?',
            'l’information du lecteur contre son confort'),
          M('le3', 'consequence', 3,
            'Si publier une somme discrédite un article, alors publier une source anonyme le discrédite davantage, et vous devriez interdire l’anonymat. Vous allez jusque-là ?',
            'la conséquence sur l’anonymat des sources'),
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
