// DELF B2 blanc-05 — Production écrite et Production orale. 25 points each.
//
// ── The PO draw ─────────────────────────────────────────────────────────────
//
// The bank draws TWO trigger documents and the candidate chooses one; there is
// still no schema representation for that (TOPICS-delf-b2 §9.2). As on the four
// earlier papers, the drawn document is authored (DELF-114, a museum charging
// for a collection that was donated to the public) and the second (DELF-122, a
// language test required for a residence permit) is held in the ledger as spent
// by this paper and no other.
//
// ── The PE shape closes the rotation ────────────────────────────────────────
//
// debate. Across the pack: letter (blanc-01, blanc-04), debate (blanc-02,
// blanc-05), article (blanc-03) — two, two and one, which is as even as three
// shapes divide into five, with no two same-shape papers adjacent.
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
// DELF-101 · a professional forum debates banning internal email after hours.
//
// The prompt gives two forum posts rather than a summary, because a
// contribution to a debate has to enter an argument already in progress. It
// also puts the strongest objection in the mouth of someone who WANTS the ban,
// so the candidate cannot simply pick a side and restate it.

export const PE_T1: ExamTask = {
  ...base,
  id: taskId('pe_short', '001'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b2',
  label: 'Production écrite',
  prompt:
    'PRODUCTION ÉCRITE · 25 points · 60 minutes\n\n' +
    'Un forum professionnel débat de la proposition suivante : ' +
    'interdire l’envoi de courriels internes entre vingt heures et sept heures.\n\n' +
    'Deux contributions ont déjà été publiées.\n\n' +
    'ANNE-LISE, cheffe de projet : « Je reçois onze courriels après vingt-deux heures ' +
    'chaque semaine et aucun n’est urgent. Personne ne me demande d’y répondre. ' +
    'Personne n’a besoin non plus de me le demander. »\n\n' +
    'MARC, responsable d’équipe : « Je suis pour l’interdiction et je vois ' +
    'ce qu’elle coûtera. Deux personnes de mon équipe travaillent le soir ' +
    'parce qu’elles ont des enfants. Leur interdire d’envoyer, ' +
    'c’est leur interdire de travailler quand elles le peuvent. »\n\n' +
    'Vous rédigez votre contribution au débat.\n\n' +
    'Prenez position sur la proposition, répondez à l’une des deux contributions ' +
    'ci-dessus, et proposez une modalité précise. 250 mots minimum.',
  timingS: 3600,
  responseSpec: { kind: 'text', minWords: 250 },
  modelAnswer:
    'Je suis favorable à une règle et défavorable à celle qui est proposée, ' +
    'pour la raison exacte que Marc donne en la soutenant.\n\n' +
    'Commençons par ce qu’Anne-Lise décrit, parce que c’est le vrai problème ' +
    'et qu’il est mal nommé. Onze courriels sans urgence après vingt-deux heures, ' +
    'que personne ne demande de traiter : le mal n’est pas dans l’envoi, ' +
    'il est dans la réception. Une notification à vingt-trois heures ' +
    'coûte quelque chose même quand elle n’attend rien, ' +
    'et c’est ce coût-là qu’il faut supprimer.\n\n' +
    'Or la proposition supprime l’envoi. C’est une confusion, ' +
    'et Marc en montre le prix mieux que n’importe quel opposant. ' +
    'Deux personnes de son équipe travaillent le soir parce que leur journée ' +
    'est prise ailleurs. Une interdiction d’envoyer les prive du seul créneau ' +
    'où elles peuvent avancer, et elle les en prive au nom du repos ' +
    'de collègues qui, eux, ne travaillent pas à cette heure-là. ' +
    'Nous protégerions les uns en désorganisant les autres, ' +
    'et il se trouve que les autres sont ceux dont les horaires ' +
    'sont déjà les plus contraints.\n\n' +
    'Je propose donc une règle qui porte sur la livraison et non sur l’écriture. ' +
    'Un courriel interne rédigé après vingt heures part par défaut ' +
    'à sept heures le lendemain, sans que l’expéditeur ait à y penser. ' +
    'Celui qui écrit à minuit écrit à minuit ; ' +
    'celui qui dort à minuit ne le sait pas.\n\n' +
    'Une seule exception me paraît nécessaire : une case « envoi immédiat », ' +
    'visible, à cocher volontairement. Elle sera utilisée à tort quelquefois, ' +
    'et le fait qu’il faille la cocher rendra cet usage remarquable, ' +
    'ce qui est précisément ce qu’une interdiction ne permet pas.\n\n' +
    'Cette règle donne à Anne-Lise ses onze soirées et laisse à l’équipe de Marc ' +
    'les heures dont elle a besoin. Elle ne demande à personne ' +
    'de choisir entre les deux.',
  rubric: {
    criteria: [
      {
        key: 'consigne',
        label: 'Respect de la consigne',
        maxPoints: 5,
        descriptors: [
          'Une contribution à un forum : elle entre dans un débat en cours, elle ne l’ouvre pas.',
          'Les trois éléments demandés sont présents : une position, une réponse à Anne-Lise ou à Marc, une modalité précise.',
          'Une copie qui ignore les deux contributions citées n’a pas répondu au sujet, même bien argumentée.',
        ],
      },
      {
        key: 'reponse',
        label: 'Réponse à une contribution existante',
        maxPoints: 5,
        descriptors: [
          'La réponse porte sur ce que la personne a réellement écrit, pas sur une position générale qu’on lui prête.',
          'Reprendre l’objection de Marc, qui soutient pourtant la mesure, est mieux valorisé que réfuter un adversaire commode.',
        ],
      },
      {
        key: 'argumentation',
        label: 'Qualité de l’argumentation',
        maxPoints: 5,
        descriptors: [
          'La position est soutenue par des raisons, et non par l’évidence supposée du problème.',
          'Le candidat distingue ce sur quoi il est d’accord de ce qu’il refuse.',
        ],
      },
      {
        key: 'modalite',
        label: 'Précision de la modalité proposée',
        maxPoints: 4,
        descriptors: [
          'La modalité est assez précise pour être mise en place : une heure, un mécanisme, une exception.',
          '« Sensibiliser les managers » n’en est pas une ; « livraison différée à sept heures » en est une.',
        ],
      },
      {
        key: 'langue',
        label: 'Registre, correction lexicale et grammaticale',
        maxPoints: 6,
        descriptors: [
          'Le registre est celui d’un forum professionnel : direct, argumenté, sans familiarité ni solennité.',
          'Les erreurs ne portent pas sur les structures de l’hypothèse et de l’opposition.',
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
    'FAIRE PAYER UNE COLLECTION QU’ON LUI A DONNÉE\n\n' +
    'Le musée de Charmilles a ouvert en septembre une aile consacrée ' +
    'à la collection Bréheau, deux mille pièces léguées à la ville en 1988 ' +
    'par un couple de collectionneurs. L’acte de donation précise ' +
    'que la collection doit rester « accessible au public de la commune ».\n\n' +
    'L’entrée de la nouvelle aile coûte huit euros. ' +
    'Le reste du musée demeure gratuit.\n\n' +
    'Le directeur explique que l’aile a coûté quatre millions d’euros, ' +
    'que la ville en a financé la moitié et que le solde doit être remboursé ' +
    'sur douze ans. Sans billet, dit-il, l’aile n’aurait pas été construite ' +
    'et la collection serait restée en réserve, comme elle l’était depuis 1988.\n\n' +
    'La petite-fille des donateurs a écrit au maire. ' +
    'Elle rappelle que ses grands-parents ont refusé une offre privée ' +
    'la même année, précisément pour que la collection soit vue sans condition. ' +
    'Elle ne demande pas la restitution, qu’elle sait impossible. ' +
    'Elle demande que la ville cesse d’appeler cela une donation.',
  prepS: 1800,
  timingS: 420,
  responseSpec: { kind: 'audio', minDurationS: 300, maxDurationS: 420 },
  modelAnswer:
    'Le document met en tension deux façons de tenir une promesse faite en 1988, ' +
    'et il ne les oppose pas comme le bien et le mal. ' +
    'Le directeur tient la promesse en rendant la collection visible, ' +
    'ce qu’elle n’était pas pendant trente-sept ans. ' +
    'La petite-fille la tient en refusant la condition qu’il y met. ' +
    'La phrase qui organise tout est celle de l’acte : ' +
    '« accessible au public de la commune ». Chacun la lit ' +
    'et chacun a raison de la lire ainsi.\n\n' +
    'Ma position est que le billet est défendable et que le mot ne l’est plus.\n\n' +
    'Défendable, parce que le fait est du côté du directeur. ' +
    'Une collection en réserve n’est accessible à personne. ' +
    'Deux mille pièces invisibles pendant trente-sept ans, ' +
    'c’est l’échec de la donation, et il a duré une vie entière. ' +
    'Quatre millions ne se trouvent pas dans un budget communal ' +
    'sans une recette en face.\n\n' +
    'Ce qui ne va pas est l’endroit où le coût tombe. ' +
    'Huit euros ne sont pas un obstacle pour un visiteur de passage ; ' +
    'ils en sont un, chaque mois, pour l’habitant que l’acte nomme. ' +
    'La ville a donc placé le billet exactement sur les personnes ' +
    'que la donation désignait, et personne ne l’a écrit ainsi.\n\n' +
    'Je proposerais donc ce que la petite-fille ne demande pas ' +
    'et qui répond à ce qu’elle dit : la gratuité pour les résidents ' +
    'sur présentation d’un justificatif, huit euros pour les autres. ' +
    'La recette baisserait peu, puisque les habitants d’une commune ' +
    'ne sont pas la majorité des visiteurs d’un musée. ' +
    'Et le mot donation redeviendrait exact, ' +
    'ce qui est précisément la seule chose qu’on demande à la ville.',
  rubric: {
    criteria: [
      {
        key: 'probleme',
        label: 'Dégager le problème',
        maxPoints: 5,
        descriptors: [
          'Le problème est identifié comme deux lectures défendables d’une même clause, non résumé comme « faire payer, c’est mal ».',
          'Le candidat repère que la demande porte sur le mot et non sur la restitution.',
        ],
      },
      {
        key: 'position',
        label: 'Prise de position et argumentation',
        maxPoints: 6,
        descriptors: [
          'La position est explicite et tenue, y compris si elle sépare le billet du vocabulaire.',
          'Les arguments s’appuient sur les éléments du document plutôt que sur des généralités sur la culture.',
        ],
      },
      {
        key: 'exemple',
        label: 'Usage des éléments du document',
        maxPoints: 4,
        descriptors: [
          'Les trente-sept ans de réserve, les quatre millions et l’offre privée refusée servent un raisonnement.',
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
          'Le lexique du legs, de la condition et de l’accès est disponible.',
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
    'Je vous accorde immédiatement le point de fait : sans billet, ' +
    'l’aile n’existe pas et la collection reste en réserve. ' +
    'Trente-sept ans d’invisibilité sont un échec, et je ne vais pas ' +
    'défendre la gratuité en faisant comme s’il n’avait pas eu lieu.\n\n' +
    'Là où je ne vous suis pas, c’est sur qui paie. ' +
    'Vous me dites que huit euros sont modestes. Pour un visiteur de passage, oui. ' +
    'Pour l’habitant que l’acte de donation nomme, c’est huit euros ' +
    'à chaque fois, et l’acte disait « accessible au public de la commune ». ' +
    'La ville a mis le péage précisément là.\n\n' +
    'Sur le manque à gagner, vous avez raison et je retire mon chiffre. ' +
    'J’ai dit que la recette baisserait peu et je n’en sais rien : ' +
    'je n’ai pas la part des résidents dans la fréquentation, ' +
    'et personne dans ce dossier ne l’a publiée.\n\n' +
    'Ce que je maintiens est plus étroit et je crois plus solide. ' +
    'Une ville peut faire payer. Elle ne peut pas faire payer ' +
    'exactement les personnes au bénéfice de qui elle a accepté un legs, ' +
    'et continuer d’appeler cela une donation. ' +
    'Si le billet reste, qu’on écrive « acquisition financée par la ville ». ' +
    'Le mot est gratuit, lui.',
  debate: {
    question: 'Un musée peut-il faire payer l’accès à une collection qui lui a été donnée ?',
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
        'Vous défendez le billet d’entrée de cette nouvelle aile, ' +
        'ou vous estimez que la ville aurait dû la laisser gratuite ?',
      cues: [],
      covers: 'lever l’ambiguïté sur la position défendue',
    },
    sideCues: {
      // "pour" = the candidate defends charging for the wing.
      pour: [
        'je defends le billet', 'il fallait faire payer', 'le directeur a raison',
        'huit euros se justifient', 'la ville a bien fait', 'sans billet rien',
      ],
      contre: [
        'je suis contre le billet', 'il fallait rester gratuit', 'le directeur a tort',
        'huit euros sont de trop', 'la ville a mal fait', 'une donation ne se paie pas',
      ],
    },
    axes: [
      /* ── against POUR: the candidate defends the ticket ──────────────────── */
      {
        id: 'acte',
        against: 'pour',
        about: 'ce que l’acte de donation dit',
        moves: [
          M('ac1', 'counter', 1,
            'L’acte dit « accessible au public de la commune ». Vous facturez huit euros à ce public précisément. En quel sens la condition est-elle tenue ?',
            'la clause nomme les personnes désormais facturées'),
          M('ac2', 'probe', 2,
            'Vous répondez qu’accessible ne veut pas dire gratuit. Soit. Alors dites-moi ce qui, dans votre lecture, serait une violation de cette clause. Si rien ne l’est, la clause ne dit rien.',
            'une condition qui n’interdit rien n’est pas une condition'),
          M('ac3', 'concession', 3,
            'Vous venez d’admettre qu’un tarif prohibitif violerait l’acte. Nous discutons donc d’un seuil, et vous ne l’avez pas fixé. Huit euros par visite, pour un habitant, où le placez-vous ?',
            'la concession sur le seuil retournée en demande de seuil'),
          M('ac-r', 'retreat', 1,
            'Vous semblez maintenant dire l’inverse de ce que vous défendiez. Qu’est-ce qui vous a fait changer d’avis exactement ?',
            'retraite : demander la raison du changement'),
        ],
      },
      {
        id: 'suivants',
        against: 'pour',
        about: 'ce que cela dit aux donateurs à venir',
        moves: [
          M('su1', 'consequence', 1,
            'Le prochain collectionneur de la région lira cette histoire. Il verra qu’un legs devient une billetterie en trente-sept ans. Que léguera-t-il, et à qui ?',
            'l’effet sur les donations futures'),
          M('su2', 'counter-example', 2,
            'Les grands-parents avaient refusé une offre privée la même année. S’ils avaient su, auraient-ils refusé ? Vous transformez leur choix en erreur.',
            'le refus de l’offre privée devient rétrospectivement absurde'),
          M('su3', 'consequence', 3,
            'À terme, les collections iront là où la condition sera respectée, c’est-à-dire chez des institutions plus riches. Vous appauvrissez les musées comme le vôtre. C’est ce que vous vouliez ?',
            'la conséquence sur la répartition des collections'),
        ],
      },
      {
        id: 'seuil',
        against: 'pour',
        about: 'où s’arrête ce raisonnement',
        moves: [
          M('sl1', 'probe', 1,
            'Votre argument est que sans recette il n’y a pas de bâtiment. Il vaut pour tout. Faites-vous payer l’entrée du reste du musée demain, avec le même raisonnement ?',
            'l’argument du financement ne connaît pas de limite propre'),
          M('sl2', 'counter', 2,
            'La ville a financé la moitié. Elle a donc jugé la collection assez publique pour deux millions et pas assez pour quatre. Où passe la frontière ?',
            'la ville a déjà tranché à moitié, sans dire selon quel principe'),
          M('sl3', 'consequence', 3,
            'Si le remboursement dure douze ans, le billet dure douze ans. Ou bien il restera après, parce qu’une recette ne se supprime pas. Lequel des deux annoncez-vous ?',
            'la temporalité annoncée contre la temporalité probable'),
        ],
      },
      {
        id: 'mot',
        against: 'pour',
        about: 'la demande réellement formulée',
        moves: [
          M('mo1', 'steelman', 1,
            'Je vous accorde votre meilleur point : la collection est visible pour la première fois. Cela vous autorise-t-il à garder le mot donation, qui est la seule chose qu’on vous demande ?',
            'le bénéfice réel n’emporte pas le vocabulaire'),
          M('mo2', 'counter', 2,
            'Changer le mot ne coûte rien et vous refusez. Pourquoi, si votre position est aussi solide que vous le dites ?',
            'le refus d’un changement gratuit trahit la faiblesse admise'),
          M('mo3', 'consequence', 3,
            'En gardant le mot, vous demandez à la famille de cautionner ce qu’elle conteste. Vous mesurez ce que cela produira la prochaine fois qu’elle sera invitée ?',
            'la conséquence sur la relation avec les donateurs vivants'),
        ],
      },

      /* ── against CONTRE: the candidate wants it free ─────────────────────── */
      {
        id: 'reserve',
        against: 'contre',
        about: 'trente-sept ans en réserve',
        moves: [
          M('re1', 'counter', 1,
            'La collection a passé trente-sept ans invisible sous le régime que vous défendez. Accessible à qui, pendant ce temps ?',
            'la gratuité n’a pas produit l’accès pendant trente-sept ans'),
          M('re2', 'probe', 2,
            'Vous répondez que la ville aurait dû financer autrement. Avec quoi ? Quatre millions dans un budget communal, et deux déjà engagés. Nommez la ligne.',
            'l’alternative doit être budgétée'),
          M('re3', 'concession', 3,
            'Vous admettez ne pas savoir d’où viendraient les fonds. Vous demandez donc la gratuité d’une aile qui, sans billet, n’aurait pas été construite. Que préférez-vous exactement ?',
            'la concession sur le financement ramenée au choix réel'),
          M('re-r', 'retreat', 1,
            'Vous semblez maintenant dire l’inverse de ce que vous défendiez. Qu’est-ce qui vous a fait changer d’avis exactement ?',
            'retraite : demander la raison du changement'),
        ],
      },
      {
        id: 'gratuite',
        against: 'contre',
        about: 'ce que la gratuité produit',
        moves: [
          M('gr1', 'counter-example', 1,
            'Le reste du musée est gratuit et sa fréquentation est celle d’un musée de sous-préfecture. La gratuité n’a jamais fait venir personne ici. Sur quoi comptez-vous ?',
            'la gratuité existante n’a pas produit le public espéré'),
          M('gr2', 'probe', 2,
            'Vous invoquez l’obstacle financier. Huit euros une fois, contre un trajet et une demi-journée. Lequel des deux écarte réellement un visiteur ?',
            'le billet n’est pas le seul coût, ni le plus lourd'),
          M('gr3', 'consequence', 3,
            'Si la gratuité suffisait, cette collection aurait été vue depuis 1988. Elle ne l’a pas été. Votre principe a déjà été essayé.',
            'la conséquence tirée du passé du dossier lui-même'),
        ],
      },
      {
        id: 'famille',
        against: 'contre',
        about: 'ce que la famille demande',
        moves: [
          M('fa1', 'counter', 1,
            'La petite-fille ne demande ni la gratuité ni la restitution. Elle demande un mot. Vous demandez plus qu’elle au nom de sa famille. De quel droit ?',
            'la position défendue dépasse celle des ayants droit'),
          M('fa2', 'steelman', 2,
            'Votre meilleur argument est que le mot engage. Admettons qu’on renonce à « donation ». Le billet vous gênerait-il encore ?',
            'le désaccord porte-t-il sur le tarif ou sur le vocabulaire'),
          M('fa3', 'concession', 3,
            'Vous venez de dire que le mot corrigé suffirait. Alors votre position n’est pas contre le billet, et vous l’avez présentée comme telle pendant dix minutes.',
            'la concession sur le mot défait la position affichée'),
        ],
      },
      {
        id: 'residents',
        against: 'contre',
        about: 'qui doit payer quoi',
        moves: [
          M('rs1', 'probe', 1,
            'Admettons la gratuité pour tous. Un car de touristes entre sans payer une aile que les contribuables de la commune ont financée pour moitié. C’est plus juste ?',
            'la gratuité universelle fait payer les habitants deux fois'),
          M('rs2', 'counter', 2,
            'La solution évidente est la gratuité pour les résidents seuls, et vous ne la proposez pas. Pourquoi défendre une gratuité totale que l’acte n’exige pas ?',
            'l’acte ne nomme que le public de la commune'),
          M('rs3', 'consequence', 3,
            'Si tout legs devait rester gratuit pour le monde entier, aucune commune n’accepterait plus un legs coûteux à exposer. Vous protégez les collections en les rendant refusables.',
            'la conséquence sur la capacité des communes à accepter'),
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
