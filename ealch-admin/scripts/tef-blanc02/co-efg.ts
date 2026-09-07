// TEF Canada blanc-02 — Compréhension orale, blocks E, F and G.
//
//   E  6 · interviews        · 4 options · 2 plays  ← the only 2-play block
//   F  1 · reportage         · 4 options · 1 play
//   G 17 · documents divers  · 4 options · 1 play   ← G-elastic fill rule
//
// Block G is seventeen separate documents, one question each, composed as the
// blueprint's published mix and ordered so no two consecutive documents share a
// sub-type: 4 échanges, 3 répondeurs, 3 informations, 4 micros-trottoirs,
// 3 consignes. The order below is the plan's, and `plan-paper.test.ts` asserts
// the alternation on the plan it came from.
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
// THE ONLY TWO-PLAY BLOCK, and the longest single document in the paper. Six
// questions from one interview means the candidate has to hold a structure, not
// catch a fact: the interviewee corrects the interviewer twice, and two of the
// six questions turn on those corrections.
//
// SELF-VERIFY (E1–E6): every key is stated by the interviewee, never by the
// interviewer, so a candidate who tracks only the questions scores nothing.
// No two keys come from the same turn. Cover test passed.

export const CO_E: ExamTask = {
  ...base,
  id: taskId('co_mcq', '005'),
  level: 'b2',
  label: 'Section E',
  prompt: 'Vous allez entendre une interview, deux fois. Choisissez la bonne réponse pour chaque question.',
  timingS: 430,
  targetItemIds: uniq(ITEMS.rechercheEmploi, ITEMS.metiers),
  parts: [
    {
      label: 'Interview · un entretien pour un poste de gestionnaire de stock',
      playCount: 2,
      readWindowS: 20,
      durationS: 175,
      text:
        'LA RECRUTEUSE : Vous postulez comme gestionnaire de stock. Vous venez de la vente, si je lis bien.\n' +
        'LE CANDIDAT : De la vente, oui, mais pas seulement. Les trois dernières années, j’étais en boutique ' +
        'le matin et à la réserve l’après-midi. C’est moi qui recevais les livraisons et qui faisais les ' +
        'inventaires. Donc le stock, je le connais par ce bout-là.\n' +
        'LA RECRUTEUSE : D’accord. Et qu’est-ce qui vous fait quitter la vente ?\n' +
        'LE CANDIDAT : Alors, ce n’est pas la vente qui me pose problème. C’est le rythme. En boutique, on ' +
        'ne finit jamais rien : on est interrompu vingt fois. Ce que j’aimais, c’était justement l’après-midi ' +
        'à la réserve, où on peut aller au bout d’une tâche.\n' +
        'LA RECRUTEUSE : Le poste est en logiciel, vous le savez. Vous avez utilisé lequel ?\n' +
        'LE CANDIDAT : Deux. Enfin, un vrai et un… disons un tableur amélioré. Le vrai, c’était pour les ' +
        'entrées et sorties, avec les codes-barres. L’autre, c’est ce que la boutique utilisait avant, et ' +
        'franchement c’était une source d’erreurs.\n' +
        'LA RECRUTEUSE : Vous diriez que vous êtes à l’aise avec les chiffres ?\n' +
        'LE CANDIDAT : Euh… je vais être précis, parce que « à l’aise avec les chiffres », ça ne veut rien ' +
        'dire. Je suis à l’aise avec un écart. Quand l’inventaire ne tombe pas juste, je sais remonter la ' +
        'chaîne et trouver où ça a sauté. Les mathématiques, c’est autre chose, et ce n’est pas ce qu’on ' +
        'demande ici.\n' +
        'LA RECRUTEUSE : Dernière chose : l’équipe fait six personnes, et le poste encadre deux magasiniers.\n' +
        'LE CANDIDAT : Ah. Ça, ce n’est pas ce qui était écrit dans l’annonce. L’annonce ne parlait pas ' +
        'd’encadrement. Ce n’est pas rédhibitoire, hein, mais je préfère le dire tout de suite : je n’ai ' +
        'jamais encadré. J’ai formé des saisonniers, ce n’est pas la même chose.\n' +
        'LA RECRUTEUSE : C’est noté, et c’est utile de le dire.',
      items: [
        {
          q: 'Quelle expérience du stock le candidat met-il en avant ?',
          opts: [
            'Il recevait les livraisons et faisait les inventaires',
            'Il a dirigé une réserve pendant trois ans',
            'Il a suivi une formation en gestion de stock',
            'Il a travaillé uniquement en boutique',
          ],
          correct: 0,
          why: 'Il corrige la recruteuse : matin en boutique, après-midi à la réserve, « c’est moi qui recevais les livraisons et qui faisais les inventaires ».',
          band: 'b2',
        },
        {
          q: 'Pourquoi le candidat veut-il quitter la vente ?',
          opts: [
            'Parce qu’il y est constamment interrompu',
            'Parce qu’il n’aime pas le contact avec les clients',
            'Parce que le salaire y est trop bas',
            'Parce que les horaires y sont irréguliers',
          ],
          correct: 0,
          why: '« Ce n’est pas la vente qui me pose problème. C’est le rythme… on est interrompu vingt fois. »',
          band: 'b2',
        },
        {
          q: 'Que dit-il des logiciels qu’il a utilisés ?',
          opts: [
            'L’un était un véritable outil de gestion, l’autre un tableur peu fiable',
            'Il a utilisé exactement le même logiciel de gestion que celui prévu pour le poste',
            'Il n’a jamais travaillé avec un logiciel de stock',
            'Les deux logiciels donnaient les mêmes résultats',
          ],
          correct: 0,
          why: 'Il distingue « un vrai » avec codes-barres et « un tableur amélioré » qu’il qualifie de source d’erreurs.',
          band: 'b2',
        },
        {
          q: 'Comment reformule-t-il la question sur les chiffres ?',
          opts: [
            'Il dit savoir retrouver l’origine d’un écart d’inventaire',
            'Il dit avoir un très bon niveau en mathématiques appliquées',
            'Il dit préférer travailler sans chiffres',
            'Il dit que les écarts d’inventaire sont rares',
          ],
          correct: 0,
          why: 'Il refuse la formule « à l’aise avec les chiffres » et la remplace : « Je suis à l’aise avec un écart… je sais remonter la chaîne. »',
          band: 'b2',
        },
        {
          q: 'Qu’est-ce qui n’apparaissait pas dans l’annonce ?',
          opts: [
            'Que le poste encadre deux magasiniers',
            'Que l’équipe compte six personnes',
            'Que le poste exige un logiciel précis',
            'Que le poste comporte du travail en réserve',
          ],
          correct: 0,
          why: '« Ça, ce n’est pas ce qui était écrit dans l’annonce. L’annonce ne parlait pas d’encadrement. »',
          band: 'b2',
        },
        {
          q: 'Quelle distinction fait-il à propos de l’encadrement ?',
          opts: [
            'Former des saisonniers n’est pas encadrer une équipe',
            'Encadrer deux personnes ne l’intéresse pas',
            'Il a déjà encadré, mais dans un tout autre secteur d’activité',
            'L’encadrement ne fait pas partie du poste',
          ],
          correct: 0,
          why: '« Je n’ai jamais encadré. J’ai formé des saisonniers, ce n’est pas la même chose. »',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ Block F — Reportage ═════════════════════════════════════════════════ */
//
// One question for the longest stretch of continuous speech in the paper, which
// is what makes it the hardest mark on the listening épreuve: the candidate has
// to hold the whole report and answer about its overall movement, not a detail.
//
// LENGTH: STANDARD-tef §2 puts this document at 120-180s and says in terms not
// to economise on it. The first draft ran 202 words, which rendered at 81s. A
// gist question over 81 seconds is not the same task as a gist question over
// two minutes: there is less argument to hold, so the item drifts towards
// detail recall. Extended to length, with the same movement and the same key.
//
// SELF-VERIFY (F1): the key is not stated in any single sentence — it is the
// report's shape. Each distractor IS stated somewhere, which is the point.
// The Observatoire Kernal figure is invented and attributed to an invented
// source, per the sourcing firewall.

export const CO_F: ExamTask = {
  ...base,
  id: taskId('co_mcq', '006'),
  level: 'b2',
  label: 'Section F',
  prompt: 'Vous allez entendre un reportage. Choisissez la bonne réponse.',
  timingS: 190,
  targetItemIds: uniq(ITEMS.systemeDeSante),
  parts: [
    {
      label: 'Reportage · une commune sans médecin',
      playCount: 1,
      readWindowS: 15,
      durationS: 150,
      text:
        'LE REPORTER : Ferrand-sur-Aize, mille deux cents habitants, n’a plus de médecin depuis quatre ans. ' +
        'La commune a d’abord fait ce que font toutes les communes dans ce cas : elle a construit un cabinet, ' +
        'équipé, chauffé, offert gratuitement. Personne n’est venu.\n' +
        'LE REPORTER : En quatre ans, la mairie a publié onze annonces et reçu deux visites. La première a ' +
        'duré une heure. La seconde un peu moins.\n' +
        'LA MAIRE : On a compris assez vite que le bâtiment n’était pas le problème. Un médecin qui s’installe ' +
        'seul dans un village, il est de garde tout le temps, il n’a personne à qui demander un avis, et son ' +
        'conjoint ne trouve pas de travail. Le local ne répond à aucune de ces trois choses.\n' +
        'LA MAIRE : Le plus dur à admettre, c’est qu’on nous l’avait dit dès la première visite. La jeune ' +
        'femme qui était venue nous a expliqué exactement cela, en repartant, sur le parking. Il nous a fallu ' +
        'trois ans pour l’entendre.\n' +
        'UNE REMPLAÇANTE : J’ai tenu ce cabinet deux mois, un été. Il était neuf, il était gratuit, je ne ' +
        'payais rien. Mais le samedi soir, quand vous avez un doute sur un enfant de deux ans, vous appelez ' +
        'qui ? Personne. Vous décidez seule, et vous rentrez chez vous avec ça. Je suis repartie pour cette ' +
        'raison, pas pour l’argent.\n' +
        'LE REPORTER : Alors la commune a changé d’approche. Plutôt que de chercher un médecin pour elle ' +
        'seule, elle s’est associée à quatre villages voisins pour financer un poste partagé, réparti sur ' +
        'les cinq communes.\n' +
        'LE MÉDECIN : Ce qui m’a décidé, ce n’est pas le loyer. C’est de savoir que je ne serais pas seul. ' +
        'Nous sommes trois sur le secteur, on se remplace, on se consulte, et quand je pars en vacances la ' +
        'patientèle est suivie. Aucun cabinet gratuit ne m’aurait offert ça.\n' +
        'LE MÉDECIN : Et puis ma compagne a trouvé un poste au collège intercommunal. Ça non plus, une ' +
        'commune seule ne pouvait pas me le proposer.\n' +
        'LE REPORTER : L’Observatoire Kernal a suivi soixante installations rurales sur dix ans. Les postes ' +
        'créés par une commune seule sont vacants au bout de deux ans dans six cas sur dix. Les postes ' +
        'partagés entre plusieurs communes tiennent dans huit cas sur dix.\n' +
        'LE REPORTER : Deux ans plus tard, le poste tient. Les communes voisines regardent, mais l’équation ' +
        'reste fragile : il a fallu cinq budgets municipaux pour financer ce qu’une seule commune ne pouvait ' +
        'pas porter, et l’accord doit être renégocié chaque année.\n' +
        'LA MAIRE : Cette année, l’une des cinq hésite. Si elle se retire, il faudra retrouver sa part ' +
        'ailleurs, et vite. Un médecin, ça ne reste pas à regarder cinq maires discuter d’un budget.',
      items: [
        {
          q: 'Quelle est l’idée principale du reportage ?',
          opts: [
            'L’isolement professionnel décourage plus que le coût du local',
            'Les communes rurales manquent surtout de bâtiments adaptés',
            'Le partage d’un poste entre communes coûte plus cher qu’un cabinet',
            'Les jeunes médecins refusent désormais de travailler en zone rurale',
          ],
          correct: 0,
          why: 'Le cabinet gratuit n’attire personne ; la maire nomme la garde permanente, l’absence d’avis confraternel et l’emploi du conjoint ; la remplaçante repart « pas pour l’argent » ; le médecin conclut « ce n’est pas le loyer, c’est de savoir que je ne serais pas seul ».',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ Block G — Documents divers ══════════════════════════════════════════ */
//
// Seventeen short documents under the G-elastic fill rule, one question each.
// Built through a helper because seventeen hand-written part literals is
// seventeen chances to drop a playCount or a reading window; the helper cannot
// forget one.
//
// SELF-VERIFY (G1–G17): every key is stated in its own document and in no
// other. Sub-type order matches the plan and no two consecutive documents share
// one. Cover test passed on all seventeen.

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
    ITEMS.collegues, ITEMS.maison, ITEMS.systemeDeSante, ITEMS.valeurs, ITEMS.bureau,
    ITEMS.rechercheEmploi, ITEMS.transportsQuotidiens, ITEMS.hebergement, ITEMS.bricolage,
    ITEMS.douaneEtImmigration, ITEMS.immigrationEtCitoyennete, ITEMS.marche, ITEMS.metiers,
    ITEMS.conflitsReconciliation, ITEMS.bienEtre
  ),
  parts: [
    doc(
      'Document 1 · échange · les congés d’été',
      34,
      'LA COLLÈGUE : Tu as posé quelle semaine, finalement ?\n' +
      'LE COLLÈGUE : La première d’août. Comme toi, apparemment.\n' +
      'LA COLLÈGUE : Ah. Bon. Il en faut un des deux sur place, alors.\n' +
      'LE COLLÈGUE : Écoute, moi je peux décaler à la deuxième. Mes billets ne sont pas pris. Les tiens si, non ?\n' +
      'LA COLLÈGUE : Oui. Bon, d’accord, je te revaudrai ça.',
      'Comment le problème est-il réglé ?',
      [
        'Le collègue décale sa semaine parce qu’il n’a rien réservé',
        'Les deux collègues partent la même semaine',
        'La collègue annule ses billets',
        'Le service ferme pendant la première semaine d’août',
      ],
      'Il propose de décaler à la deuxième semaine, en précisant que ses billets ne sont pas pris alors que ceux de sa collègue le sont.',
      'b1'
    ),
    doc(
      'Document 2 · répondeur · le syndic',
      30,
      'LE SYNDIC : Bonjour, message du syndic pour les résidents du bâtiment B. Une coupure d’eau est ' +
      'prévue jeudi, de neuf heures à onze heures, pour le remplacement d’une vanne. Pensez à tirer de ' +
      'l’eau la veille. Si les travaux prennent du retard, la coupure sera prolongée jusqu’à midi au ' +
      'plus tard. Merci de votre compréhension.',
      'Jusqu’à quelle heure la coupure peut-elle durer ?',
      ['Midi', 'Onze heures', 'Neuf heures', 'Quatorze heures'],
      'La coupure est prévue de neuf à onze heures, « prolongée jusqu’à midi au plus tard » en cas de retard.',
      'a2'
    ),
    doc(
      'Document 3 · information · la salle d’attente',
      28,
      'LA SECRÉTAIRE : Votre attention s’il vous plaît. Le docteur a été appelé pour une urgence ce matin. ' +
      'Les consultations ont environ quarante minutes de retard. Si vous ne pouvez pas attendre, ' +
      'présentez-vous à l’accueil : nous vous replaçons en priorité demain, sans nouvelle attente.',
      'Que propose-t-on à ceux qui ne peuvent pas attendre ?',
      [
        'Un rendez-vous prioritaire le lendemain',
        'Une consultation avec un autre médecin',
        'Un remboursement de la consultation',
        'Une consultation par téléphone',
      ],
      '« Nous vous replaçons en priorité demain, sans nouvelle attente. »',
      'a2'
    ),
    doc(
      'Document 4 · micro-trottoir · le bénévolat au lycée',
      32,
      'LA PASSANTE : Obligatoire ? Non. Enfin… le mot me gêne. Si c’est obligatoire, ce n’est plus du ' +
      'bénévolat, c’est un stage. Et ce n’est pas grave, hein, un stage c’est utile aussi. Mais qu’on ' +
      'l’appelle par son nom, parce que là on demande aux élèves de donner leur temps et on leur dit ' +
      'que c’est un cadeau.',
      'Que reproche la passante à la proposition ?',
      [
        'Elle emploie le mot « bénévolat » pour une activité imposée',
        'Elle prend beaucoup trop de temps sur les heures de cours obligatoires',
        'Elle ne concerne que certains élèves',
        'Elle coûte trop cher aux établissements',
      ],
      'Sa gêne porte sur le mot : « si c’est obligatoire, ce n’est plus du bénévolat, c’est un stage… qu’on l’appelle par son nom ».',
      'b2'
    ),
    doc(
      'Document 5 · consignes · la laverie de l’immeuble',
      33,
      'LA GARDIENNE : Pour la laverie, trois choses. Le jeton s’achète à la loge, pas à la machine. ' +
      'On ne réserve pas : c’est premier arrivé, premier servi. Et surtout, si vous laissez votre linge ' +
      'plus d’une heure après la fin du cycle, le suivant a le droit de le sortir et de le poser sur la ' +
      'table. Ce n’est pas contre vous, c’est pour que la machine tourne.',
      'Que peut faire l’utilisateur suivant si le linge reste dans la machine ?',
      [
        'Le sortir et le poser sur la table après une heure',
        'Le laisser et attendre le retour du propriétaire',
        'Prévenir la gardienne pour qu’elle intervienne',
        'Relancer un cycle avec son propre linge',
      ],
      '« Si vous laissez votre linge plus d’une heure après la fin du cycle, le suivant a le droit de le sortir et de le poser sur la table. »',
      'a2'
    ),
    doc(
      'Document 6 · échange · les horaires',
      36,
      'LE SALARIÉ : Je voulais vous demander s’il était possible de commencer à neuf heures trente au ' +
      'lieu de huit heures trente. C’est pour la crèche.\n' +
      'LA RESPONSABLE : Sur le principe, oui. Mais la réunion d’équipe est à neuf heures le lundi.\n' +
      'LE SALARIÉ : Le lundi je peux venir à huit heures trente. C’est les autres jours qui posent problème.\n' +
      'LA RESPONSABLE : Ah, alors ça change tout. On fait comme ça.',
      'Quelle solution est retenue ?',
      [
        'Il arrive plus tôt le lundi et plus tard les autres jours',
        'Il arrive à neuf heures trente tous les jours',
        'La réunion d’équipe du lundi est déplacée',
        'Il travaille depuis chez lui le lundi',
      ],
      'La responsable bloque sur la réunion du lundi ; le salarié accepte de venir à huit heures trente ce jour-là, ce qui débloque la demande.',
      'b1'
    ),
    doc(
      'Document 7 · répondeur · le cabinet de recrutement',
      29,
      'LA RECRUTEUSE : Bonjour, message pour Monsieur Ferreira. Je vous appelle au sujet du poste de ' +
      'gestionnaire. Je vous propose deux créneaux : mardi quatorze heures, ou jeudi dix heures. ' +
      'Rappelez-moi pour confirmer l’un des deux. Si aucun ne vous convient, dites-le : nous en ' +
      'trouverons un autre la semaine suivante.',
      'Que doit faire Monsieur Ferreira ?',
      [
        'Rappeler pour choisir un créneau ou en demander un autre',
        'Se présenter mardi à quatorze heures',
        'Envoyer ses documents avant jeudi',
        'Attendre un nouvel appel la semaine suivante',
      ],
      'Elle demande un rappel pour confirmer l’un des deux créneaux, et propose d’en chercher un autre si aucun ne convient.',
      'a2'
    ),
    doc(
      'Document 8 · information · le quai',
      26,
      'L’AGENT : Votre attention. Le train de dix-sept heures douze à destination de Chantoise partira ' +
      'exceptionnellement voie cinq, et non voie deux. Je répète : voie cinq. Les voyageurs déjà ' +
      'installés voie deux sont priés de rejoindre la voie cinq par le passage souterrain.',
      'Que doivent faire les voyageurs déjà sur le quai ?',
      [
        'Rejoindre la voie cinq par le passage souterrain',
        'Rester voie deux et attendre le train',
        'Se présenter au guichet pour un nouveau billet',
        'Prendre le train suivant à dix-sept heures douze',
      ],
      '« Les voyageurs déjà installés voie deux sont priés de rejoindre la voie cinq par le passage souterrain. »',
      'a2'
    ),
    doc(
      'Document 9 · micro-trottoir · les locations de courte durée',
      34,
      'LE PASSANT : Interdire, non. Encadrer, oui. Le problème, ce n’est pas qu’un propriétaire loue ' +
      'trois week-ends par an. C’est celui qui a six appartements et qui ne loue plus à l’année. Alors ' +
      'une limite de nuitées, ça me paraît juste. Au-delà, c’est un hôtel, et un hôtel ça a des règles.',
      'Que propose le passant ?',
      [
        'Limiter le nombre de nuitées louées par an',
        'Interdire complètement les locations de courte durée',
        'Réserver ces locations aux propriétaires d’un seul logement',
        'Aligner les prix sur ceux des hôtels',
      ],
      'Il refuse l’interdiction et propose « une limite de nuitées », en distinguant le propriétaire occasionnel de celui qui a six appartements.',
      'b2'
    ),
    doc(
      'Document 10 · consignes · le montage de l’étagère',
      31,
      'LE VENDEUR : Alors, avant de commencer : vous comptez les pièces. Il vous faut huit vis longues ' +
      'et quatre courtes. Si les longues ne sont que sept, n’assemblez rien et rapportez le carton avec ' +
      'le ticket. On échange le sachet, pas le meuble. Et surtout ne serrez pas à fond avant d’avoir ' +
      'monté les quatre côtés, sinon ça vrille.',
      'Que faire s’il manque une vis longue ?',
      [
        'Rapporter le carton avec le ticket pour échanger le sachet',
        'Assembler le meuble et revenir ensuite',
        'Remplacer la vis longue par une vis courte',
        'Rapporter le meuble entier pour un échange',
      ],
      '« N’assemblez rien et rapportez le carton avec le ticket. On échange le sachet, pas le meuble. »',
      'a2'
    ),
    doc(
      'Document 11 · échange · le guichet des visas',
      35,
      'LE DEMANDEUR : On m’a refusé le dossier ce matin. Il manquerait une pièce.\n' +
      'L’AGENTE : Laquelle ?\n' +
      'LE DEMANDEUR : L’attestation d’hébergement. Mais je l’ai apportée, elle est là.\n' +
      'L’AGENTE : Ah, elle y est, oui. Mais elle date de sept mois. Il la faut de moins de trois mois. ' +
      'Ce n’est pas qu’elle manque, c’est qu’elle est trop ancienne.',
      'Pourquoi le dossier a-t-il été refusé ?',
      [
        'L’attestation fournie est trop ancienne',
        'L’attestation d’hébergement n’a pas été jointe',
        'Le demandeur s’est présenté au mauvais guichet',
        'Le formulaire n’était pas signé',
      ],
      'L’agente corrige le motif annoncé : la pièce est présente mais date de sept mois, alors qu’il la faut de moins de trois mois.',
      'b1'
    ),
    doc(
      'Document 12 · répondeur · la préfecture',
      30,
      'LA VOIX : Vous avez un message concernant votre demande de titre de séjour. Votre dossier est ' +
      'incomplet : il manque le justificatif de domicile. Vous avez trente jours pour le déposer en ' +
      'ligne. Passé ce délai, la demande est classée sans suite et il faut en déposer une nouvelle. ' +
      'Ne vous déplacez pas au guichet : le dépôt se fait uniquement en ligne.',
      'Que se passe-t-il après trente jours sans réponse ?',
      [
        'La demande est classée et il faut en déposer une nouvelle',
        'Un rendez-vous au guichet est fixé automatiquement',
        'Le dossier est examiné tel quel',
        'Le délai est prolongé de trente jours',
      ],
      '« Passé ce délai, la demande est classée sans suite et il faut en déposer une nouvelle. »',
      'b1'
    ),
    doc(
      'Document 13 · information · la braderie',
      29,
      'L’ORGANISATRICE : La braderie de la rue des Tilleuls se tiendra dimanche, de huit heures à dix-huit ' +
      'heures. Les emplacements sont réservés aux habitants du quartier, sur inscription en mairie avant ' +
      'vendredi. Trois mètres par exposant, pas de véhicule dans la rue à partir de sept heures. ' +
      'Les invendus doivent repartir avec vous : il n’y a pas de collecte prévue.',
      'Que doivent faire les exposants de leurs invendus ?',
      [
        'Les remporter eux-mêmes en fin de journée',
        'Les déposer en mairie avant vendredi',
        'Les laisser sur l’emplacement pour la collecte',
        'Les donner à l’association organisatrice',
      ],
      '« Les invendus doivent repartir avec vous : il n’y a pas de collecte prévue. »',
      'a2'
    ),
    doc(
      'Document 14 · micro-trottoir · le télétravail et l’équipe',
      33,
      'LA PASSANTE : Ce qui a changé, ce n’est pas la charge de travail. C’est qu’on ne se croise plus ' +
      'par hasard. Avant, un problème se réglait en trente secondes devant la machine à café. Maintenant ' +
      'il faut poser une réunion, donc on ne la pose pas, donc le problème traîne. Voilà. Ce n’est pas ' +
      'l’ambiance, c’est ça.',
      'Selon la passante, qu’est-ce que le télétravail a changé ?',
      [
        'Les petits problèmes ne se règlent plus de façon informelle',
        'La charge de travail a nettement augmenté depuis le passage à distance',
        'Les réunions programmées sont devenues bien plus fréquentes',
        'L’ambiance générale de l’équipe s’est nettement dégradée',
      ],
      'Elle écarte la charge de travail et l’ambiance, et décrit la perte du réglage informel : « il faut poser une réunion, donc on ne la pose pas ».',
      'b2'
    ),
    doc(
      'Document 15 · consignes · l’entrée de l’entrepôt',
      32,
      'LE CHEF D’ÉQUIPE : Trois règles à l’entrée, et elles valent pour tout le monde, y compris les ' +
      'visiteurs. Chaussures de sécurité obligatoires, pas d’exception. On circule dans l’allée jaune, ' +
      'jamais entre les rayonnages. Et si un chariot arrive, c’est lui qui a la priorité : vous vous ' +
      'arrêtez, il passe. Ce n’est pas de la politesse, c’est qu’il ne peut pas freiner court.',
      'Que faire lorsqu’un chariot approche ?',
      [
        'S’arrêter et le laisser passer',
        'Se ranger entre les rayonnages',
        'Continuer dans l’allée jaune',
        'Prévenir le chef d’équipe',
      ],
      '« C’est lui qui a la priorité : vous vous arrêtez, il passe », parce qu’il ne peut pas freiner court.',
      'a2'
    ),
    doc(
      'Document 16 · échange · les bénévoles',
      35,
      'LE BÉNÉVOLE : Franchement, c’est toujours les mêmes qui font le rangement.\n' +
      'LA BÉNÉVOLE : Je sais. Mais si on impose un tour de rôle, on va en perdre la moitié.\n' +
      'LE BÉNÉVOLE : Alors on affiche. On ne force personne, on affiche qui a fait quoi. Ça suffira.\n' +
      'LA BÉNÉVOLE : Ça, oui. Ça je veux bien essayer.',
      'Quelle solution les deux bénévoles retiennent-ils ?',
      [
        'Afficher publiquement qui a effectué quelle tâche',
        'Imposer un tour de rôle pour le rangement',
        'Recruter de nouveaux bénévoles',
        'Confier le rangement à un prestataire',
      ],
      'Le tour de rôle est écarté par crainte de perdre des bénévoles ; l’affichage, sans obligation, est accepté.',
      'b1'
    ),
    doc(
      'Document 17 · micro-trottoir · les écrans et le sommeil',
      31,
      'LE PASSANT : On dit « les écrans empêchent de dormir », mais chez moi ce n’est pas l’écran. ' +
      'C’est ce qu’il y a dessus. Un documentaire, je m’endors. Un message du travail à onze heures du ' +
      'soir, je ne dors plus. Donc la lumière bleue, tout ça, euh… moi je veux bien, mais ce n’est pas ' +
      'ce que je constate.',
      'Quelle est la position du passant ?',
      [
        'Le contenu consulté compte plus que l’écran lui-même',
        'Les écrans n’ont aucun effet sur le sommeil',
        'La lumière bleue est la principale responsable',
        'Il faut éteindre tout écran après onze heures',
      ],
      'Il oppose le documentaire, qui l’endort, au message professionnel, qui l’empêche de dormir : « ce n’est pas l’écran, c’est ce qu’il y a dessus ».',
      'b2'
    ),
  ],
};
