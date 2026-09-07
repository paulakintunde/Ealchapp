// TEF Canada blanc-04 — Compréhension orale, blocks E, F and G.
//
//   E  6 · interviews        · 4 options · 2 plays  ← the only 2-play block
//   F  1 · reportage         · 4 options · 1 play
//   G 17 · documents divers  · 4 options · 1 play   ← G-elastic fill rule
//
// Block G runs the blueprint's mix — 4 échanges, 3 répondeurs, 3 informations,
// 4 micros-trottoirs, 3 consignes — in the approved plan's order, so no two
// consecutive documents share a sub-type.
import type { ExamPart, ExamTask, QcmItem } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, FORMAT_VERSION, VARIANT, NOTES_CLOSED, taskId, ITEMS, uniq } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  taskType: 'co_mcq' as const,
  skill: 'CO' as const,
  formatVersion: FORMAT_VERSION,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ Block E — Interview ═════════════════════════════════════════════════ */
//
// THE ONLY TWO-PLAY BLOCK. Six questions from one meeting means holding a
// structure: the chair corrects two speakers, and two of the six turn on those
// corrections.
//
// SELF-VERIFY (E1–E6): every key is stated by a participant, never in the
// question, and no two keys come from the same turn.

export const CO_E: ExamTask = {
  ...base,
  id: taskId('co_mcq', '005'),
  level: 'b2',
  label: 'Section E',
  prompt: 'Vous allez entendre une réunion, deux fois. Choisissez la bonne réponse pour chaque question.',
  timingS: 430,
  targetItemIds: uniq(ITEMS.voisinage, ITEMS.maison),
  parts: [
    {
      label: 'Assemblée de copropriété · le vote sur l’isolation',
      playCount: 2,
      readWindowS: 20,
      durationS: 178,
      text:
        'LA PRÉSIDENTE : Point quatre : l’isolation des façades. Le devis est à deux cent quarante mille ' +
        'euros, soit environ quatre mille par lot. Nous devons voter.\n' +
        'PREMIER COPROPRIÉTAIRE : Quatre mille euros, moi je ne les ai pas. Et je vais être direct : ' +
        'je ne suis pas contre les travaux, je suis contre le calendrier. On nous demande de décider en ' +
        'quinze jours pour une somme pareille.\n' +
        'LA PRÉSIDENTE : Le calendrier n’est pas de nous. L’aide publique tombe fin mars, et sans elle ' +
        'le reste à charge passe de quatre mille à six mille cinq cents.\n' +
        'DEUXIÈME COPROPRIÉTAIRE : Justement, j’ai regardé. L’aide est bien confirmée jusqu’en mars, ' +
        'mais il y a un point que personne n’a vu : elle exige deux devis, pas un. Nous n’en avons qu’un.\n' +
        'LA PRÉSIDENTE : Ah. Alors ça change tout : si nous votons ce soir avec un seul devis, nous ' +
        'perdons l’aide que nous nous dépêchons d’aller chercher.\n' +
        'TROISIÈME COPROPRIÉTAIRE : Euh, moi je voudrais revenir sur le montant. On dit quatre mille par ' +
        'lot, mais c’est une moyenne. Les lots ne sont pas égaux : au dernier étage, c’est six mille. ' +
        'Je préfère qu’on le dise avant le vote plutôt qu’après.\n' +
        'LA PRÉSIDENTE : C’est juste, et c’est important. Bon. Je propose de reporter le vote de trois ' +
        'semaines, le temps d’obtenir un second devis et de communiquer le montant lot par lot. Nous ' +
        'resterons dans les délais de l’aide, de justesse.\n' +
        'PREMIER COPROPRIÉTAIRE : Là, je vote pour le report.',
      items: [
        {
          q: 'À quoi le premier copropriétaire s’oppose-t-il ?',
          opts: [
            'Au calendrier imposé, pas aux travaux eux-mêmes',
            'Au principe même de l’isolation des façades',
            'Au choix de l’entreprise retenue pour le devis',
            'À la répartition des charges entre les lots',
          ],
          correct: 0,
          why: '« Je ne suis pas contre les travaux, je suis contre le calendrier. »',
          band: 'b2',
        },
        {
          q: 'Pourquoi le calendrier est-il si serré ?',
          opts: [
            'L’aide publique disparaît à la fin du mois de mars',
            'L’entreprise ne peut intervenir qu’au printemps',
            'Le devis n’est valable que quinze jours',
            'La copropriété doit impérativement clôturer ses comptes avant mars',
          ],
          correct: 0,
          why: '« L’aide publique tombe fin mars, et sans elle le reste à charge passe de quatre mille à six mille cinq cents. »',
          band: 'b2',
        },
        {
          q: 'Qu’a découvert le deuxième copropriétaire ?',
          opts: [
            'L’aide exige deux devis et la copropriété n’en a qu’un',
            'L’aide a déjà été supprimée par les pouvoirs publics',
            'Le devis obtenu dépasse le plafond de l’aide',
            'L’aide ne concerne pas les immeubles anciens',
          ],
          correct: 0,
          why: '« Elle exige deux devis, pas un. Nous n’en avons qu’un. »',
          band: 'b2',
        },
        {
          q: 'Quelle conséquence la présidente en tire-t-elle ?',
          opts: [
            'Voter ce soir ferait perdre l’aide que la hâte visait',
            'Le vote peut avoir lieu comme prévu ce soir',
            'Le montant par lot doit être renégocié avec l’entreprise',
            'La copropriété doit renoncer définitivement aux travaux',
          ],
          correct: 0,
          why: '« Si nous votons ce soir avec un seul devis, nous perdons l’aide que nous nous dépêchons d’aller chercher. »',
          band: 'b2',
        },
        {
          q: 'Que corrige le troisième copropriétaire ?',
          opts: [
            'Les quatre mille euros sont une moyenne, non un montant égal',
            'Le devis total a été mal additionné par le syndic',
            'Le nombre de lots concernés a été sous-estimé',
            'Les travaux ne concernent pas le dernier étage',
          ],
          correct: 0,
          why: '« On dit quatre mille par lot, mais c’est une moyenne. Les lots ne sont pas égaux : au dernier étage, c’est six mille. »',
          band: 'b2',
        },
        {
          q: 'Que décide finalement l’assemblée ?',
          opts: [
            'De reporter le vote de trois semaines',
            'De voter les travaux le soir même',
            'De renoncer à demander l’aide publique',
            'De confier un nouveau devis au premier copropriétaire',
          ],
          correct: 0,
          why: '« Je propose de reporter le vote de trois semaines », et le premier copropriétaire vote pour le report.',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ Block F — Reportage ═════════════════════════════════════════════════ */
//
// One question on the longest continuous speech in the paper. The key is the
// report's movement, stated in no single sentence; each distractor IS stated
// somewhere, which is the point.
//
// LENGTH: STANDARD-tef §2 puts this document at 120-180s. The first draft ran
// 193 words and rendered at 76s. Extended to length with the same movement and
// the same key. The Institut Bérard figure is invented and attributed to an
// invented source, per the sourcing firewall.

export const CO_F: ExamTask = {
  ...base,
  id: taskId('co_mcq', '006'),
  level: 'b2',
  label: 'Section F',
  prompt: 'Vous allez entendre un reportage. Choisissez la bonne réponse.',
  timingS: 190,
  targetItemIds: uniq(ITEMS.journalisme),
  parts: [
    {
      label: 'Reportage · la fermeture des rédactions locales',
      playCount: 1,
      readWindowS: 15,
      durationS: 150,
      text:
        'LE REPORTER : En quinze ans, le département a perdu quatre rédactions locales sur six. Celle de ' +
        'La Chapelle-aux-Bois a fermé en janvier. On explique généralement ces fermetures par la chute ' +
        'des ventes papier, et ce n’est pas faux.\n' +
        'LE REPORTER : Le titre existait depuis 1946. Il employait sept personnes et couvrait onze ' +
        'communes. Le dernier numéro a été tiré à deux mille exemplaires, ce qui était encore, en 2019, ' +
        'un chiffre confortable.\n' +
        'L’ANCIENNE RÉDACTRICE : Les ventes ont baissé, oui. Mais nous étions rentables jusqu’en 2019. ' +
        'Ce qui nous a tués, c’est autre chose : les annonces légales. Les avis de marchés publics, les ' +
        'ventes judiciaires. Ça représentait quarante pour cent de nos recettes, et c’est parti sur une ' +
        'plateforme nationale en dix-huit mois.\n' +
        'L’ANCIENNE RÉDACTRICE : Personne ne nous a rien pris, notez bien. La loi a simplement autorisé ' +
        'la publication en ligne. En dix-huit mois nous sommes passés de quatre-vingts avis par mois à ' +
        'six. On a licencié en octobre.\n' +
        'LE REPORTER : Sans rédaction, qui couvre les conseils municipaux ? Une chercheuse a comparé ' +
        'trente communes avant et après la fermeture de leur titre local.\n' +
        'LA CHERCHEUSE : Le nombre de candidats aux municipales baisse de vingt-deux pour cent. Et les ' +
        'dépenses par habitant augmentent, sans que la qualité des services suive. Ce n’est pas une ' +
        'question de moralité, c’est qu’il n’y a plus personne dans la salle pour poser la question.\n' +
        'LA CHERCHEUSE : L’Institut Bérard a mesuré autre chose, de plus discret : la durée des conseils ' +
        'municipaux. Elle tombe de quarante pour cent. Les délibérations passent, sans débat, parce que ' +
        'le débat n’avait de sens que s’il était rapporté.\n' +
        'LE REPORTER : À La Chapelle-aux-Bois, trois anciens journalistes ont lancé une lettre ' +
        'hebdomadaire par abonnement. Six cents abonnés en un an, deux salaires à temps partiel. ' +
        'Le modèle tient, pour l’instant, et ne couvre qu’une commune sur les onze que le titre suivait.\n' +
        'L’ANCIENNE RÉDACTRICE : On nous demande souvent si la lettre remplace le journal. Non. Nous ' +
        'faisons une commune sur onze, et nous la faisons bien. Les dix autres, elles, ne sont plus ' +
        'couvertes du tout, et ça, personne ne le voit, justement parce que plus personne n’y va. ' +
        'On me dit parfois : vous avez sauvé quelque chose. Nous avons sauvé un onzième de quelque ' +
        'chose, et nous le savons tous les lundis matin, quand nous choisissons ce que nous n’irons ' +
        'pas couvrir.',
      items: [
        {
          q: 'Quelle est l’idée principale du reportage ?',
          opts: [
            'La perte des annonces légales pèse plus que la baisse des ventes, et le vide a des effets mesurables',
            'La chute des ventes papier explique à elle seule la disparition de tous les titres locaux du département',
            'Les lettres par abonnement remplacent avantageusement les rédactions fermées',
            'Les conseils municipaux dépensent davantage depuis qu’ils sont mieux couverts',
          ],
          correct: 0,
          why: 'La rédactrice écarte les ventes comme cause principale et nomme les annonces légales (40 % des recettes, quatre-vingts avis par mois tombés à six) ; la chercheuse chiffre les effets ; la lettre ne couvre qu’une commune sur onze et la rédactrice le dit elle-même.',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ Block G — Documents divers ══════════════════════════════════════════ */
//
// Seventeen short documents through a helper: seventeen hand-written part
// literals is seventeen chances to drop a playCount, and the helper cannot
// forget one.
//
// SELF-VERIFY (G1–G17): every key is stated in its own document and no other.

const doc = (
  label: string,
  durationS: number,
  text: string,
  q: string,
  opts: string[],
  why: string,
  band: QcmItem['band']
): ExamPart => ({
  label,
  playCount: 1,
  readWindowS: 10,
  durationS,
  text,
  items: [{ q, opts, correct: 0, why, band }],
});

export const CO_G: ExamTask = {
  ...base,
  id: taskId('co_mcq', '007'),
  level: 'b1',
  label: 'Section G',
  prompt: 'Vous allez entendre dix-sept documents courts. Pour chaque document, choisissez la bonne réponse.',
  timingS: 790,
  targetItemIds: uniq(
    ITEMS.rechercheEmploi, ITEMS.technologieQuotidienne, ITEMS.laVille, ITEMS.musees,
    ITEMS.courses, ITEMS.deplacements, ITEMS.cinema, ITEMS.maison, ITEMS.questionsSociales,
    ITEMS.examensEtDiplomes, ITEMS.argentQuotidien, ITEMS.auRestaurant,
    ITEMS.transportsQuotidiens, ITEMS.cuisine, ITEMS.ecologie, ITEMS.sportsEtLoisirs
  ),
  parts: [
    doc(
      'Document 1 · échange · la convocation',
      32,
      'LE CANDIDAT : J’ai reçu la convocation, mais je ne suis pas sûr des documents à apporter.\n' +
      'LA RECRUTEUSE : Une pièce d’identité, et vos diplômes en original. Le CV, non, nous l’avons.\n' +
      'LE CANDIDAT : Les originaux ? Je n’ai que des copies, les originaux sont chez mes parents.\n' +
      'LA RECRUTEUSE : Alors venez avec les copies, et vous nous enverrez les originaux après. Ce n’est ' +
      'pas bloquant.',
      'Que doit apporter le candidat le jour de l’entretien ?',
      [
        'Une pièce d’identité et ses copies de diplômes',
        'Une pièce d’identité et les diplômes originaux',
        'Un curriculum vitae et une pièce d’identité',
        'Rien, tout a déjà été transmis',
      ],
      'La recruteuse demande les originaux, puis accepte les copies : « venez avec les copies… ce n’est pas bloquant ». Le CV est explicitement écarté.',
      'b1'
    ),
    doc(
      'Document 2 · répondeur · la panne de réseau',
      29,
      'LA VOIX : Bonjour, vous êtes en relation avec l’assistance technique. Une panne affecte ' +
      'actuellement le secteur de Bellevance. Nos équipes sont intervenues et le rétablissement est ' +
      'prévu avant vingt heures. Il est inutile de redémarrer votre boîtier : la coupure ne vient pas ' +
      'de votre installation. Aucun geste n’est attendu de votre part.',
      'Que demande-t-on aux clients ?',
      [
        'De ne rien faire, la panne ne venant pas de chez eux',
        'De redémarrer leur boîtier avant vingt heures',
        'De rappeler l’assistance en fin de journée',
        'De signaler la panne sur le site de l’opérateur avant la fin de la journée',
      ],
      '« Il est inutile de redémarrer votre boîtier… Aucun geste n’est attendu de votre part. »',
      'a2'
    ),
    doc(
      'Document 3 · information · les travaux du trottoir',
      28,
      'L’AGENT : Avis aux riverains. Le trottoir de la rue Basse sera refait du 3 au 21 juin. Pendant ' +
      'les travaux, la circulation piétonne est déviée sur le trottoir d’en face, et le stationnement ' +
      'est interdit du côté des travaux. Les accès aux immeubles restent assurés à toute heure : ' +
      'une passerelle est posée devant chaque entrée.',
      'Qu’est-ce qui est maintenu pendant les travaux ?',
      [
        'L’accès aux immeubles, par une passerelle',
        'Le stationnement du côté des travaux',
        'La circulation piétonne sur le trottoir refait',
        'La collecte des déchets rue Basse',
      ],
      '« Les accès aux immeubles restent assurés à toute heure : une passerelle est posée devant chaque entrée. »',
      'a2'
    ),
    doc(
      'Document 4 · micro-trottoir · la culture gratuite',
      33,
      'LA PASSANTE : Gratuit, ça ne veut rien dire, quelqu’un paie. La vraie question, c’est qui. Moi je ' +
      'préfère payer cinq euros et savoir que le musée peut ouvrir le dimanche, plutôt que zéro euro et ' +
      'des salles fermées faute de personnel. On confond gratuité et accessibilité, et ce n’est pas la ' +
      'même chose du tout.',
      'Quelle distinction la passante établit-elle ?',
      [
        'Entre la gratuité et l’accessibilité réelle du lieu',
        'Entre les musées publics et les musées privés',
        'Entre les visiteurs locaux et les touristes',
        'Entre le prix d’entrée et le prix des expositions',
      ],
      '« On confond gratuité et accessibilité, et ce n’est pas la même chose du tout », illustré par l’ouverture du dimanche.',
      'b2'
    ),
    doc(
      'Document 5 · consignes · le retour d’un article',
      31,
      'LA VOIX : Pour retourner un article, trois étapes. Vous déclarez le retour dans votre espace ' +
      'client : c’est là que l’étiquette est générée. Vous imprimez l’étiquette et vous la collez sur ' +
      'le colis d’origine, en recouvrant l’ancienne. Puis vous déposez le colis en point relais sous ' +
      'quatorze jours. Sans déclaration préalable, le colis nous revient mais il n’est pas identifié, ' +
      'et le remboursement peut prendre des mois.',
      'Que se passe-t-il si le retour n’est pas déclaré à l’avance ?',
      [
        'Le colis arrive sans être identifié et le remboursement traîne',
        'Le colis est refusé par le point relais',
        'Le colis est renvoyé au client à ses frais',
        'Le remboursement est purement et simplement annulé',
      ],
      '« Sans déclaration préalable, le colis nous revient mais il n’est pas identifié, et le remboursement peut prendre des mois. »',
      'b1'
    ),
    doc(
      'Document 6 · échange · le covoiturage annulé',
      33,
      'LE PASSAGER : Vous avez annulé hier soir pour ce matin. J’ai dû prendre un train à quarante euros.\n' +
      'LE CONDUCTEUR : Je suis désolé, ma voiture ne démarrait pas. J’ai prévenu dès que j’ai su.\n' +
      'LE PASSAGER : Je ne vous reproche pas la panne. Je demande juste le remboursement de ma place.\n' +
      'LE CONDUCTEUR : Ça, c’est automatique, la plateforme vous rembourse sous trois jours. Le train, ' +
      'par contre, je ne peux rien.',
      'Que demande le passager ?',
      [
        'Le remboursement de sa place, pas celui du train',
        'Le remboursement du billet de train à quarante euros',
        'Une nouvelle place dans un covoiturage du jour même',
        'Une indemnité pour l’annulation tardive',
      ],
      '« Je ne vous reproche pas la panne. Je demande juste le remboursement de ma place. »',
      'b1'
    ),
    doc(
      'Document 7 · répondeur · la séance déplacée',
      28,
      'LA VOIX : Bonjour, message du cinéma de Tournoy pour les détenteurs de billets de ce soir. La ' +
      'séance de vingt heures est avancée à dix-neuf heures trente, en raison d’une rencontre avec ' +
      'l’équipe du film après la projection. Vos billets restent valables sans échange. Si l’horaire ne ' +
      'vous convient pas, présentez-vous à la caisse pour un report sur une autre séance.',
      'Qu’est-ce qui change pour les spectateurs ?',
      [
        'La séance commence une demi-heure plus tôt',
        'La séance est reportée au lendemain soir',
        'Les billets doivent être échangés à la caisse',
        'La rencontre a lieu avant la projection',
      ],
      '« La séance de vingt heures est avancée à dix-neuf heures trente… Vos billets restent valables sans échange. »',
      'a2'
    ),
    doc(
      'Document 8 · information · l’ascenseur',
      27,
      'LE GARDIEN : Information aux résidents. L’ascenseur du bâtiment A est à l’arrêt jusqu’à jeudi, ' +
      'le temps de recevoir une pièce. Pour les personnes qui ne peuvent pas prendre les escaliers, ' +
      'signalez-vous à la loge : nous organisons les courses et la montée des colis. N’attendez pas ' +
      'd’être bloqués pour nous le dire.',
      'Que propose le gardien aux personnes qui ne peuvent pas monter à pied ?',
      [
        'De se signaler à la loge pour être aidées',
        'D’utiliser l’ascenseur du bâtiment voisin',
        'De faire livrer leurs courses directement à leur domicile',
        'D’attendre jeudi pour sortir de chez elles',
      ],
      '« Signalez-vous à la loge : nous organisons les courses et la montée des colis. »',
      'a2'
    ),
    doc(
      'Document 9 · micro-trottoir · le bénévolat sur un CV',
      32,
      'LE PASSANT : Ça devrait compter, oui. Mais attention à ce qu’on en fait. Si ça devient une case à ' +
      'cocher, les gens vont faire du bénévolat pour la ligne, pas pour l’association. Et une ' +
      'association qui accueille quelqu’un qui vient chercher une ligne, elle le sent tout de suite. ' +
      'Donc oui, ça compte, mais que ça reste un choix.',
      'Quelle réserve le passant formule-t-il ?',
      [
        'Le bénévolat perdrait son sens s’il devenait obligatoire',
        'Les associations manquent de bénévoles qualifiés',
        'Les recruteurs ne vérifient jamais ces expériences',
        'Le bénévolat prend trop de temps aux étudiants',
      ],
      '« Si ça devient une case à cocher, les gens vont faire du bénévolat pour la ligne, pas pour l’association… que ça reste un choix. »',
      'b2'
    ),
    doc(
      'Document 10 · consignes · le jour de l’examen',
      31,
      'LE SURVEILLANT : Pour lundi, écoutez bien. Vous vous présentez trente minutes avant : à l’heure ' +
      'pile, la porte est fermée et personne n’entre. Convocation et pièce d’identité sur la table, ' +
      'visibles. Les téléphones sont éteints et déposés à l’entrée, pas dans le sac, pas dans la poche. ' +
      'Un téléphone trouvé sur vous, même éteint, c’est une exclusion.',
      'Où les téléphones doivent-ils être placés ?',
      [
        'Déposés à l’entrée de la salle',
        'Éteints et rangés dans le sac',
        'Éteints et gardés dans la poche',
        'Posés sur la table avec la convocation',
      ],
      '« Déposés à l’entrée, pas dans le sac, pas dans la poche. » La table est pour la convocation et la pièce d’identité.',
      'a2'
    ),
    doc(
      'Document 11 · échange · le devis dépassé',
      34,
      'LA CLIENTE : Le devis était à quatre cents euros. La facture est à six cent quatre-vingts.\n' +
      'LE GARAGISTE : Nous avons trouvé une seconde pièce à changer en démontant.\n' +
      'LA CLIENTE : Je ne conteste pas la réparation. Je conteste qu’on ne m’ait pas appelée avant.\n' +
      'LE GARAGISTE : Vous avez raison. Sur le principe, un dépassement doit être accepté avant. Je ' +
      'reprends la différence à ma charge cette fois.',
      'Que reproche exactement la cliente ?',
      [
        'De ne pas avoir été prévenue avant le dépassement',
        'D’avoir été facturée pour une pièce inutile',
        'D’avoir attendu trop longtemps la réparation',
        'De ne pas avoir reçu de devis écrit',
      ],
      '« Je ne conteste pas la réparation. Je conteste qu’on ne m’ait pas appelée avant. »',
      'b1'
    ),
    doc(
      'Document 12 · répondeur · le traiteur',
      29,
      'LA VOIX : Bonjour, message du traiteur pour confirmer votre commande de samedi : vingt-cinq ' +
      'parts, dont quatre sans gluten et deux sans lactose. Livraison à onze heures à l’adresse ' +
      'indiquée. Une précision : les plats sans gluten sont dans une boîte séparée et étiquetée, ne les ' +
      'mélangez pas au moment de servir. Rappelez-nous avant jeudi si le nombre change.',
      'Que demande le traiteur à propos des plats sans gluten ?',
      [
        'De ne pas les mélanger aux autres au moment de servir',
        'De les commander séparément avant jeudi',
        'De les conserver au frais jusqu’à la livraison de onze heures',
        'De vérifier leur nombre à la livraison',
      ],
      '« Les plats sans gluten sont dans une boîte séparée et étiquetée, ne les mélangez pas au moment de servir. »',
      'b1'
    ),
    doc(
      'Document 13 · information · la nouvelle ligne',
      28,
      'LA VOIX : À partir du 2 septembre, la ligne 14 relie la gare au quartier des Peupliers, toutes ' +
      'les vingt minutes en semaine et toutes les quarante minutes le week-end. Les abonnements ' +
      'existants sont valables sans supplément. Attention : la ligne 6, qui faisait ce trajet en ' +
      'partie, est supprimée le même jour.',
      'Qu’advient-il de la ligne 6 ?',
      [
        'Elle est supprimée le jour où la ligne 14 démarre',
        'Elle continue de circuler le samedi et le dimanche uniquement',
        'Elle est prolongée jusqu’au quartier des Peupliers',
        'Elle nécessite désormais un supplément',
      ],
      '« La ligne 6, qui faisait ce trajet en partie, est supprimée le même jour. »',
      'a2'
    ),
    doc(
      'Document 14 · micro-trottoir · les plats préparés',
      32,
      'LA PASSANTE : On dit « les gens ne cuisinent plus », mais regardez qui achète des plats préparés. ' +
      'Ce sont ceux qui rentrent à vingt heures avec deux enfants. Ce n’est pas de la paresse, c’est du ' +
      'temps qu’on n’a pas. Donnez-moi une heure de plus le soir et je cuisine. C’est le temps qu’il ' +
      'faut regarder, pas les habitudes.',
      'Selon la passante, qu’est-ce qui explique l’achat de plats préparés ?',
      [
        'Le manque de temps, plutôt qu’un changement d’habitudes',
        'Le prix, plus bas que celui des produits frais',
        'La disparition des cours de cuisine à l’école',
        'La qualité, devenue comparable au fait maison',
      ],
      '« Ce n’est pas de la paresse, c’est du temps qu’on n’a pas… C’est le temps qu’il faut regarder, pas les habitudes. »',
      'b2'
    ),
    doc(
      'Document 15 · consignes · les déchets électroniques',
      31,
      'L’AGENT : Pour les appareils électriques, trois règles. Rien dans le bac ordinaire, même un petit ' +
      'appareil : il part à l’incinération et les métaux sont perdus. Vous retirez les piles et les ' +
      'batteries et vous les déposez à part, dans le bac rouge. Et si l’appareil fonctionne encore, ' +
      'ne le jetez pas : l’atelier de réemploi le reprend, à côté de la déchetterie.',
      'Que faire d’un appareil qui fonctionne encore ?',
      [
        'Le porter à l’atelier de réemploi',
        'Le déposer dans le bac ordinaire',
        'Le déposer dans le bac rouge',
        'Retirer les piles et le jeter',
      ],
      '« Si l’appareil fonctionne encore, ne le jetez pas : l’atelier de réemploi le reprend. » Le bac rouge est pour les piles.',
      'a2'
    ),
    doc(
      'Document 16 · échange · la convocation égarée',
      33,
      'L’ÉTUDIANTE : Je n’ai jamais reçu la convocation. Elle a été envoyée à mon ancienne adresse.\n' +
      'LE SECRÉTAIRE : Vous avez signalé le changement ?\n' +
      'L’ÉTUDIANTE : En octobre, oui, par le formulaire en ligne.\n' +
      'LE SECRÉTAIRE : Alors l’erreur est de notre côté. Je vous réédite la convocation tout de suite, ' +
      'et je fais corriger l’adresse dans le dossier.',
      'Pourquoi la convocation n’est-elle pas arrivée ?',
      [
        'Le changement d’adresse signalé n’avait pas été enregistré',
        'L’étudiante n’avait pas signalé son déménagement',
        'La convocation a été envoyée trop tard',
        'Le formulaire en ligne était indisponible en octobre',
      ],
      'Elle a signalé le changement en octobre ; le secrétaire conclut « l’erreur est de notre côté » et fait corriger le dossier.',
      'b1'
    ),
    doc(
      'Document 17 · micro-trottoir · les équipements sportifs',
      31,
      'LE PASSANT : Des équipements, il y en a. Le problème, c’est qu’ils sont tous réservés aux clubs ' +
      'de dix-huit heures à vingt-deux heures, c’est-à-dire aux seules heures où les gens qui ' +
      'travaillent peuvent venir. Le gymnase est vide à quatorze heures et plein à dix-neuf. ' +
      'Ce n’est pas un manque, c’est un partage.',
      'Quel est l’argument du passant ?',
      [
        'Le problème tient au partage des créneaux, non au nombre d’équipements',
        'La ville manque réellement de gymnases et de terrains de sport',
        'Les clubs devraient payer davantage pour leurs créneaux',
        'Les équipements sont trop éloignés des quartiers',
      ],
      '« Ce n’est pas un manque, c’est un partage », illustré par le gymnase vide à quatorze heures et plein à dix-neuf.',
      'b2'
    ),
  ],
};
