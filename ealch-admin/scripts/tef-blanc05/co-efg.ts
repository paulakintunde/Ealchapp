// TEF Canada blanc-05 — Compréhension orale, blocks E, F and G.
//
//   E  6 · interviews        · 4 options · 2 plays  ← the only 2-play block
//   F  1 · reportage         · 4 options · 1 play
//   G 17 · documents divers  · 4 options · 1 play   ← G-elastic fill rule
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
// THE ONLY TWO-PLAY BLOCK. The interviewee corrects the interviewer twice, and
// two of the six questions turn on those corrections.
//
// SELF-VERIFY (E1–E6): every key is stated by the interviewee, never by the
// interviewer, and no two keys come from the same turn.

export const CO_E: ExamTask = {
  ...base,
  id: taskId('co_mcq', '005'),
  level: 'b2',
  label: 'Section E',
  prompt: 'Vous allez entendre une interview, deux fois. Choisissez la bonne réponse pour chaque question.',
  timingS: 430,
  targetItemIds: uniq(ITEMS.hebergement, ITEMS.droit),
  parts: [
    {
      label: 'Interview · un logement étudiant refusé faute de garant',
      playCount: 2,
      readWindowS: 20,
      durationS: 176,
      text:
        'LE JOURNALISTE : Vous avez essuyé onze refus pour un studio. Le motif était toujours le même ?\n' +
        'L’ÉTUDIANTE : Onze, oui, et je précise tout de suite : ce n’est pas le loyer. J’avais de quoi ' +
        'payer, bourse plus job. Le motif, c’était le garant. Mes parents vivent à l’étranger, donc leur ' +
        'garantie ne vaut rien ici, quel que soit leur revenu.\n' +
        'LE JOURNALISTE : Vous n’avez pas de garantie publique dans ce cas ?\n' +
        'L’ÉTUDIANTE : Si, elle existe, et c’est justement le problème. Elle existe et personne ne la ' +
        'prend. Sur onze agences, deux la connaissaient. Une seule l’acceptait. Ce n’est pas un manque ' +
        'de dispositif, c’est un manque d’usage.\n' +
        'LE JOURNALISTE : Pourquoi ce refus, à votre avis ?\n' +
        'L’ÉTUDIANTE : On m’a dit « c’est plus long à monter ». C’est vrai. Quinze jours de dossier au ' +
        'lieu de trois. Quand vous avez quarante candidats pour un studio, vous prenez celui dont le ' +
        'dossier est bouclé jeudi.\n' +
        'LE JOURNALISTE : Vous avez fini par trouver ?\n' +
        'L’ÉTUDIANTE : Par une colocation, oui. Pas par une agence : par un étudiant qui partait et qui ' +
        'm’a passé la place. Autrement dit, j’ai trouvé en dehors du marché, pas dedans.\n' +
        'LE JOURNALISTE : Et vous militez maintenant sur ce sujet.\n' +
        'L’ÉTUDIANTE : Euh, « militer » est un grand mot. Je tiens une liste : les agences qui acceptent ' +
        'la garantie publique. Elle fait vingt-trois noms. C’est petit, mais c’est concret, et ça évite ' +
        'à quelqu’un onze refus.',
      items: [
        {
          q: 'Quel était le motif des refus ?',
          opts: [
            'L’absence de garant recevable en France',
            'Un revenu insuffisant pour payer le loyer',
            'Un dossier déposé trop tardivement',
            'Le statut d’étudiante étrangère',
          ],
          correct: 0,
          why: 'Elle écarte le loyer d’emblée : « ce n’est pas le loyer… Le motif, c’était le garant », ses parents vivant à l’étranger.',
          band: 'b2',
        },
        {
          q: 'Que dit-elle de la garantie publique ?',
          opts: [
            'Elle existe mais presque personne ne l’accepte',
            'Elle n’existe pas pour les parents non résidents',
            'Elle a été supprimée l’année précédente',
            'Elle coûte trop cher aux étudiants boursiers',
          ],
          correct: 0,
          why: '« Elle existe et personne ne la prend. Sur onze agences, deux la connaissaient. Une seule l’acceptait. »',
          band: 'b2',
        },
        {
          q: 'Comment reformule-t-elle le problème ?',
          opts: [
            'Ce n’est pas un manque de dispositif mais un manque d’usage',
            'Ce n’est pas un problème de logement mais de revenus',
            'Ce n’est pas un problème local mais national',
            'Ce n’est pas une question d’argent mais de temps',
          ],
          correct: 0,
          why: '« Ce n’est pas un manque de dispositif, c’est un manque d’usage. »',
          band: 'b2',
        },
        {
          q: 'Quelle explication les agences lui ont-elles donnée ?',
          opts: [
            'Le dossier prend quinze jours au lieu de trois',
            'La garantie publique n’est pas juridiquement valable',
            'Les propriétaires refusent systématiquement ce dispositif',
            'Le nombre de candidats ne permet aucune exception',
          ],
          correct: 0,
          why: '« On m’a dit “c’est plus long à monter”… Quinze jours de dossier au lieu de trois. »',
          band: 'b2',
        },
        {
          q: 'Comment a-t-elle fini par se loger ?',
          opts: [
            'Par un étudiant partant qui lui a cédé sa place',
            'Par une agence qui a accepté la garantie publique',
            'Par une résidence universitaire, après un recours',
            'En trouvant un garant résidant en France',
          ],
          correct: 0,
          why: '« Par un étudiant qui partait et qui m’a passé la place… j’ai trouvé en dehors du marché, pas dedans. »',
          band: 'b2',
        },
        {
          q: 'En quoi consiste son action aujourd’hui ?',
          opts: [
            'Elle tient une liste des agences qui acceptent la garantie',
            'Elle conseille les étudiants étrangers dans une permanence juridique hebdomadaire',
            'Elle demande une réforme du dispositif de garantie',
            'Elle organise des colocations entre étudiants étrangers',
          ],
          correct: 0,
          why: 'Elle refuse le mot « militer » et décrit une liste de vingt-trois agences : « c’est petit, mais c’est concret ».',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ Block F — Reportage ═════════════════════════════════════════════════ */
//
// LENGTH: STANDARD-tef §2 puts this document at 120-180s and says in terms not
// to economise on it. The first draft ran 181 words and rendered at 73s, the
// shortest reportage in the pack. Extended to length with the same movement and
// the same key.
//
// SELF-VERIFY (F1): the key is the report's movement and is stated in no single
// sentence. Each distractor IS stated somewhere, which is the point. The
// Observatoire Salvin figure is invented and attributed to an invented source.

export const CO_F: ExamTask = {
  ...base,
  id: taskId('co_mcq', '006'),
  level: 'b2',
  label: 'Section F',
  prompt: 'Vous allez entendre un reportage. Choisissez la bonne réponse.',
  timingS: 190,
  targetItemIds: uniq(ITEMS.affaires),
  parts: [
    {
      label: 'Reportage · une usine devenue atelier partagé',
      playCount: 1,
      readWindowS: 15,
      durationS: 150,
      text:
        'LE REPORTER : L’usine de Fontenay-le-Vieux a fermé il y a huit ans. Elle abrite aujourd’hui ' +
        'trente-deux activités : ébénisterie, sérigraphie, réparation de matériel médical, une brasserie. ' +
        'La commune, propriétaire des murs, loue au mètre carré et à prix coûtant.\n' +
        'LE REPORTER : Quatre-vingt-dix personnes y travaillent, contre deux cent quarante du temps de ' +
        'l’usine. Personne ici ne présente ce chiffre comme une victoire. On le présente comme ce qui ' +
        'existe, à la place de rien.\n' +
        'LE MAIRE : On nous a expliqué qu’il fallait attirer une grande entreprise. Nous avons attendu ' +
        'quatre ans, et personne n’est venu. Ce qui a marché, c’est l’inverse : trente-deux petites ' +
        'choses au lieu d’une grande.\n' +
        'LE MAIRE : Pendant ces quatre ans, nous avons reçu onze délégations. Chacune voulait savoir ce ' +
        'que la commune pouvait offrir. Nous offrions un bâtiment de onze mille mètres carrés et une ' +
        'sortie d’autoroute. Ce n’était jamais assez, et je comprends pourquoi : personne ne s’installe ' +
        'quelque part uniquement parce que c’est vide.\n' +
        'UNE ARTISANE : Ce qui m’a décidée, ce n’est pas le loyer, même s’il est bas. C’est la scie à ' +
        'format. Elle coûte vingt mille euros : seule, je ne l’aurais jamais achetée. Ici, elle est ' +
        'partagée entre neuf ateliers et chacun paie à l’heure.\n' +
        'UNE ARTISANE : Et puis il y a ce qu’on ne prévoit pas. Le sérigraphe est à trente mètres. Quand ' +
        'un client veut un meuble et une enseigne, on répond à deux, le même jour. Ça, aucun de nous ' +
        'n’aurait pu le vendre tout seul.\n' +
        'LE REPORTER : L’Observatoire Salvin a suivi vingt-huit friches industrielles reconverties. ' +
        'Celles qui ont attendu un occupant unique sont encore vides dans plus de la moitié des cas. ' +
        'Celles qui ont été divisées sont occupées à quatre-vingts pour cent.\n' +
        'LE REPORTER : Le modèle a pourtant une limite, et la commune la connaît : le bâtiment n’est pas ' +
        'isolé. Le chauffage représente le tiers des charges, et une rénovation coûterait plus cher que ' +
        'ce que le site rapporte en dix ans.\n' +
        'UNE ARTISANE : L’hiver dernier, j’ai travaillé en manteau pendant trois semaines. On en rit ' +
        'entre nous, mais si les charges montent encore, il y en a qui partiront. Pas moi cette année. ' +
        'Dans trois ans, je ne sais pas.\n' +
        'LE MAIRE : Nous ne prétendons pas avoir trouvé une recette. Nous avons trouvé un usage pour un ' +
        'bâtiment qui n’en avait plus, et cet usage tient tant que les charges restent tenables.',
      items: [
        {
          q: 'Quelle est l’idée principale du reportage ?',
          opts: [
            'Trente-deux petites activités ont réussi là où l’attente d’une grande a échoué, sous une contrainte de charges',
            'La reconversion d’une usine dépend avant tout du montant du loyer proposé',
            'Les communes devraient renoncer à attirer de grandes entreprises',
            'Le partage de machines coûteuses est aujourd’hui le seul modèle viable pour de petits artisans',
          ],
          correct: 0,
          why: 'Le maire oppose quatre ans d’attente et onze délégations à « trente-deux petites choses » ; l’artisane nomme la machine partagée et le voisinage, pas le loyer ; le reportage ferme deux fois sur l’isolation et les charges.',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ Block G — Documents divers ══════════════════════════════════════════ */

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
    ITEMS.objets, ITEMS.sportsEtLoisirs, ITEMS.entraide, ITEMS.internet, ITEMS.auRestaurant,
    ITEMS.communaute, ITEMS.deplacements, ITEMS.tourisme, ITEMS.appareils, ITEMS.vetements,
    ITEMS.famille, ITEMS.musees, ITEMS.jardinage, ITEMS.courses
  ),
  parts: [
    doc(
      'Document 1 · échange · la poignée cassée',
      30,
      'LA VOYAGEUSE : La poignée s’est cassée au premier voyage. La valise a trois mois.\n' +
      'LE VENDEUR : Vous avez le ticket ?\n' +
      'LA VOYAGEUSE : Oui. Mais je pars mardi, je ne peux pas attendre une réparation.\n' +
      'LE VENDEUR : Alors on l’échange. La réparation prend trois semaines, l’échange se fait tout de suite.',
      'Que propose le vendeur ?',
      [
        'Un échange immédiat plutôt qu’une réparation',
        'Une réparation en trois semaines',
        'Un remboursement sur présentation du ticket',
        'Un report du voyage prévu mardi',
      ],
      '« On l’échange. La réparation prend trois semaines, l’échange se fait tout de suite. »',
      'a2'
    ),
    doc(
      'Document 2 · répondeur · l’entraînement annulé',
      28,
      'LA VOIX : Bonjour, message du club de Sarlanges. L’entraînement de mercredi est annulé : le ' +
      'gymnase est réquisitionné pour les élections. Il n’est pas reporté, la salle n’étant pas ' +
      'disponible avant lundi. Le prochain entraînement a donc lieu comme prévu samedi matin. ' +
      'Inutile de rappeler, ce message est envoyé à tout le groupe.',
      'Quand aura lieu le prochain entraînement ?',
      ['Samedi matin, comme prévu', 'Lundi, dès que la salle se libère', 'Mercredi de la semaine prochaine', 'Il est reporté sans date'],
      '« Il n’est pas reporté… Le prochain entraînement a donc lieu comme prévu samedi matin. »',
      'a2'
    ),
    doc(
      'Document 3 · information · la chaise de bureau',
      29,
      'LE VENDEUR : Information à notre clientèle. Le modèle de chaise de bureau référence 4-1-2 n’est ' +
      'plus fabriqué. Les clients souhaitant un échange peuvent choisir le modèle équivalent, sans ' +
      'supplément, dans la limite des stocks. Un remboursement reste possible pour les achats de moins ' +
      'de trente jours. Au-delà, seul l’échange est proposé.',
      'Que peut faire un client ayant acheté la chaise il y a deux mois ?',
      [
        'L’échanger contre le modèle équivalent',
        'Se la faire rembourser intégralement',
        'Commander à nouveau la référence 4-1-2',
        'Obtenir un avoir valable un an',
      ],
      'Le remboursement est réservé aux achats de moins de trente jours ; « au-delà, seul l’échange est proposé ».',
      'b1'
    ),
    doc(
      'Document 4 · micro-trottoir · donner du temps ou de l’argent',
      31,
      'LA PASSANTE : Les deux, mais pas pour les mêmes raisons. L’argent, ça marche mieux : une ' +
      'association fait plus avec cinquante euros qu’avec deux heures de moi. Ça, c’est la vérité ' +
      'comptable. Mais le temps, ça vous change, vous. Donner de l’argent, on le fait sans jamais voir ' +
      'personne. Donner du temps, on rencontre.',
      'Quelle distinction la passante établit-elle ?',
      [
        'L’argent est plus efficace, le temps transforme le donneur',
        'Le temps est plus utile aux associations que l’argent',
        'L’argent convient aux grandes associations, le temps aux petites',
        'Les deux formes de don se valent exactement',
      ],
      '« L’argent, ça marche mieux… Mais le temps, ça vous change, vous. »',
      'b2'
    ),
    doc(
      'Document 5 · consignes · la double authentification',
      32,
      'LA VOIX : Pour activer la double authentification, procédez dans cet ordre. Vous ajoutez d’abord ' +
      'un numéro de téléphone de secours, puis seulement ensuite vous activez l’option. Si vous ' +
      'l’activez sans numéro de secours et que vous changez de téléphone, vous perdez l’accès et nous ' +
      'ne pouvons rien faire. Notez aussi les codes de récupération sur papier : ils ne sont affichés ' +
      'qu’une seule fois.',
      'Que risque-t-on en activant l’option sans numéro de secours ?',
      [
        'Perdre l’accès en cas de changement de téléphone',
        'Devoir ressaisir un code à chaque connexion',
        'Voir le compte suspendu au bout de trente jours',
        'Ne plus pouvoir consulter les codes de récupération',
      ],
      '« Si vous l’activez sans numéro de secours et que vous changez de téléphone, vous perdez l’accès et nous ne pouvons rien faire. »',
      'b1'
    ),
    doc(
      'Document 6 · échange · l’allergie signalée',
      33,
      'LE CLIENT : J’avais signalé l’allergie aux fruits à coque à la réservation, et à la commande.\n' +
      'LE SERVEUR : Le dessert en contenait, je suis vraiment désolé.\n' +
      'LE CLIENT : Il ne l’a pas mangé, heureusement. Mais deux fois signalé, deux fois ignoré.\n' +
      'LE SERVEUR : Vous avez raison, et je préfère vous le dire : la note est annulée, et je fais ' +
      'remonter, parce que ce n’est pas une question de geste commercial.',
      'Quelle est la réaction du serveur ?',
      [
        'Il annule la note et signale l’incident en interne',
        'Il propose un dessert de remplacement offert',
        'Il conteste que l’allergie ait été signalée',
        'Il renvoie le client vers le responsable de salle',
      ],
      '« La note est annulée, et je fais remonter, parce que ce n’est pas une question de geste commercial. »',
      'b2'
    ),
    doc(
      'Document 7 · répondeur · les permanences',
      28,
      'LA VOIX : Vous êtes bien à l’accueil de l’association du Poirier. Nos permanences ont lieu le ' +
      'mardi de quatorze à dix-sept heures et le jeudi de neuf à midi. Nous ne prenons pas de ' +
      'rendez-vous : les permanences se font sans inscription, dans l’ordre d’arrivée. Pour une aide ' +
      'aux démarches administratives, venez de préférence le jeudi, la juriste est présente ce jour-là.',
      'Quand faut-il venir pour une aide aux démarches ?',
      [
        'Le jeudi matin, quand la juriste est présente',
        'Le mardi après-midi, sur rendez-vous',
        'N’importe quel jour, après inscription',
        'Le mardi ou le jeudi, indifféremment, selon les disponibilités',
      ],
      '« Venez de préférence le jeudi, la juriste est présente ce jour-là », et les permanences du jeudi sont de neuf à midi.',
      'b1'
    ),
    doc(
      'Document 8 · information · le billet au mauvais nom',
      27,
      'LA VOIX : Rappel aux voyageurs. Le nom porté sur le billet doit correspondre à la pièce ' +
      'd’identité présentée. Une faute d’orthographe simple se corrige gratuitement au guichet jusqu’à ' +
      'trente minutes avant le départ. En revanche, un billet établi à un autre nom ne peut pas être ' +
      'corrigé : il doit être racheté.',
      'Que peut-on corriger gratuitement ?',
      [
        'Une simple faute d’orthographe dans le nom',
        'Un billet établi au nom d’une autre personne',
        'Une erreur de date sur le billet',
        'Toute erreur, jusqu’au départ du train',
      ],
      '« Une faute d’orthographe simple se corrige gratuitement… un billet établi à un autre nom ne peut pas être corrigé. »',
      'b1'
    ),
    doc(
      'Document 9 · micro-trottoir · le tourisme et les villes',
      32,
      'LE PASSANT : Abîmer, c’est vite dit. Ce qui abîme, ce n’est pas le visiteur, c’est le nombre au ' +
      'même endroit à la même heure. Trois rues saturées et le reste de la ville vide. Étalez les flux, ' +
      'ouvrez d’autres quartiers, et le problème se dégonfle. On accuse le tourisme quand on veut dire ' +
      'la concentration.',
      'Quel est l’argument du passant ?',
      [
        'Le problème est la concentration des visiteurs, non leur nombre total',
        'Le tourisme dégrade inévitablement les centres anciens',
        'Les visiteurs devraient payer une taxe de séjour plus élevée',
        'Les habitants quittent les quartiers les plus visités',
      ],
      '« Ce qui abîme, ce n’est pas le visiteur, c’est le nombre au même endroit à la même heure… On accuse le tourisme quand on veut dire la concentration. »',
      'b2'
    ),
    doc(
      'Document 10 · consignes · l’enceinte connectée',
      30,
      'LA VOIX : Avant d’installer l’enceinte, deux points. Elle doit être branchée sur une prise ' +
      'murale, pas sur une multiprise : l’alimentation est sensible et la garantie ne couvre pas les ' +
      'dommages liés à une surtension. Ensuite, l’application demande le réseau domestique, pas le ' +
      'réseau invité : sur le réseau invité, l’enceinte s’installe mais ne trouvera aucun autre appareil.',
      'Pourquoi faut-il éviter le réseau invité ?',
      [
        'L’enceinte ne trouvera aucun autre appareil',
        'L’installation échouera dès la première étape',
        'La garantie ne couvrira plus l’appareil',
        'Le son sera de moins bonne qualité',
      ],
      '« Sur le réseau invité, l’enceinte s’installe mais ne trouvera aucun autre appareil. » La garantie concerne la multiprise.',
      'b1'
    ),
    doc(
      'Document 11 · échange · le bagage égaré',
      33,
      'LA VOYAGEUSE : Ma valise n’est pas arrivée. On m’a dit de remplir une déclaration ici.\n' +
      'L’AGENT : Oui. Il me faut l’étiquette de bagage et votre carte d’embarquement.\n' +
      'LA VOYAGEUSE : L’étiquette, je l’ai. Et si elle n’est pas retrouvée sous vingt et un jours ?\n' +
      'L’AGENT : Au-delà, le bagage est déclaré perdu et l’indemnisation démarre. Avant, on cherche.',
      'Que se passe-t-il après vingt et un jours ?',
      [
        'Le bagage est déclaré perdu et l’indemnisation commence',
        'La déclaration doit être refaite au guichet',
        'Les recherches se poursuivent encore un mois',
        'L’étiquette de bagage cesse d’être valable',
      ],
      '« Au-delà, le bagage est déclaré perdu et l’indemnisation démarre. »',
      'b1'
    ),
    doc(
      'Document 12 · répondeur · l’office de tourisme',
      27,
      'LA VOIX : Office de tourisme de Chastel, bonjour. Du 1er juillet au 31 août, nous sommes ouverts ' +
      'tous les jours de neuf heures à dix-neuf heures, dimanche compris. Hors saison, nous fermons le ' +
      'dimanche et le lundi. Les visites guidées du vieux village partent à dix heures et à quinze ' +
      'heures ; l’inscription se fait sur place, une heure avant le départ.',
      'Quand l’office est-il fermé hors saison ?',
      ['Le dimanche et le lundi', 'Le dimanche uniquement', 'Le lundi uniquement', 'Il reste ouvert tous les jours'],
      '« Hors saison, nous fermons le dimanche et le lundi. »',
      'a2'
    ),
    doc(
      'Document 13 · information · les chaussures à ressemeler',
      26,
      'LE CORDONNIER : Message pour les clients du dépôt de lundi. Les ressemelages demandés pour lundi ' +
      'sont prêts, sauf les semelles cousues, qui demandent deux jours de plus. Vous pouvez passer aux ' +
      'heures d’ouverture, sans rendez-vous. Le paiement se fait au retrait, pas au dépôt.',
      'Quels articles ne sont pas encore prêts ?',
      [
        'Ceux dont les semelles sont cousues',
        'Ceux déposés le lundi matin',
        'Ceux dont le paiement n’a pas été fait',
        'Ceux commandés sans rendez-vous',
      ],
      '« Sauf les semelles cousues, qui demandent deux jours de plus. » Le paiement se fait au retrait.',
      'a2'
    ),
    doc(
      'Document 14 · micro-trottoir · le congé des deux parents',
      32,
      'LA PASSANTE : Plus long, oui, mais surtout obligatoire pour les deux. Sinon, on connaît la suite : ' +
      'la mère le prend, le père non, et à l’embauche on continue de se demander laquelle va s’absenter. ' +
      'Tant que ce n’est pas pris des deux côtés, allonger ne change rien à ce qui pose problème.',
      'Que demande la passante ?',
      [
        'Que le congé soit obligatoire pour les deux parents',
        'Que le congé soit simplement allongé pour tous',
        'Que le congé soit mieux indemnisé qu’aujourd’hui',
        'Que le congé soit réservé au second parent',
      ],
      '« Plus long, oui, mais surtout obligatoire pour les deux… Tant que ce n’est pas pris des deux côtés, allonger ne change rien. »',
      'b2'
    ),
    doc(
      'Document 15 · consignes · l’exposition photographique',
      29,
      'L’AGENTE : Quelques règles pour la visite. Les photographies sont fragiles : pas de flash, et ' +
      'restez derrière la ligne au sol. Les sacs de plus de trente centimètres se déposent au vestiaire, ' +
      'gratuitement. La photographie sans flash est autorisée dans les deux premières salles, mais ' +
      'interdite dans la dernière, à la demande de l’artiste.',
      'Où la photographie est-elle interdite ?',
      [
        'Dans la dernière salle, à la demande de l’artiste',
        'Dans l’ensemble de l’exposition, sans exception',
        'Dans les deux premières salles seulement',
        'Partout où la ligne au sol est marquée',
      ],
      '« La photographie sans flash est autorisée dans les deux premières salles, mais interdite dans la dernière. »',
      'b1'
    ),
    doc(
      'Document 16 · échange · la plante à arroser',
      29,
      'LA VOISINE : Je pars dix jours. Vous pourriez passer arroser ?\n' +
      'LE VOISIN : Bien sûr. Tous les jours ?\n' +
      'LA VOISINE : Non, surtout pas. Deux fois en dix jours suffit, elle craint plus l’excès que le manque.\n' +
      'LE VOISIN : D’accord, deux fois. Je note.',
      'À quelle fréquence faut-il arroser la plante ?',
      [
        'Deux fois pendant les dix jours',
        'Une fois par jour pendant dix jours',
        'Tous les deux jours',
        'Seulement au retour de la voisine',
      ],
      '« Deux fois en dix jours suffit, elle craint plus l’excès que le manque. »',
      'a2'
    ),
    doc(
      'Document 17 · micro-trottoir · les commerces le dimanche',
      31,
      'LE PASSANT : Ouvrir, fermer… on discute du mauvais bout. La vraie question c’est qui travaille et ' +
      's’il l’a choisi. Un étudiant qui veut le dimanche, très bien. Un salarié à qui on l’impose, non. ' +
      'Le même magasin ouvert peut être une bonne ou une mauvaise chose selon la réponse à ça.',
      'Quel est le point de vue du passant ?',
      [
        'Ce qui compte est le caractère volontaire du travail dominical',
        'Les commerces devraient rester fermés tous les dimanches sans exception',
        'L’ouverture dominicale profite surtout aux étudiants',
        'La question relève des seuls commerçants concernés',
      ],
      '« La vraie question c’est qui travaille et s’il l’a choisi… selon la réponse à ça. »',
      'b2'
    ),
  ],
};
