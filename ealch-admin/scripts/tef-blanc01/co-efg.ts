// TEF Canada blanc-01 — Compréhension orale, blocks E, F and G.
// Split from co.ts only for file size; the blocks are the same shape.
//
// KEY ORDER. Every item below is authored with the correct option written
// FIRST, so a reviewer sees the intended answer next to the `why` that
// justifies it. That is not the order a candidate meets: scatterKeys() in
// finalise.ts places the key deterministically before the paper is written,
// because the exam runner renders authored order and never shuffles.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
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
// The only block permitted TWO plays, so playCount is set explicitly rather
// than left to default.
//
// The six questions are distributed across the whole interview, not clustered
// in the first thirty seconds, and the guest's position develops: she concedes
// the cost was real, insists it was not the obstacle, then nuances her own
// refusal at the end. That last move is what makes an S6 item possible.
//
// SELF-VERIFY (E1-E6): keys unique. E1's third option names a real sub-theme
// (how the young students received her) and is false only on SCOPE — a D4 —
// and the stem asks what the interview is MAINLY about, so it holds. Cover
// test passed on all six. `franchement` is used where a speaker would reach
// for the banned `honnêtement`. Genders checked: amphi m, note f, filière f,
// restauration f, isolement m.

export const CO_E: ExamTask = {
  ...base,
  id: taskId('co_mcq', '005'),
  level: 'b2',
  label: 'Section E',
  prompt: 'Vous allez entendre une interview. Vous l’entendrez deux fois. Répondez aux six questions.',
  timingS: 430,
  targetItemIds: uniq(ITEMS.universite, ITEMS.emploi, ITEMS.collegues),
  parts: [
    {
      label: 'Interview · reprendre ses études à trente-deux ans',
      playCount: 2,
      readWindowS: 30,
      durationS: 105,
      text:
        'LA JOURNALISTE : Vous avez repris des études à trente-deux ans, après dix ans dans la restauration. Qu’est-ce qui a déclenché ça ?\n' +
        'L’INVITÉE : Alors, on imagine toujours un grand moment, une révélation… Non. C’est une conversation avec une cliente, un soir, qui m’a raconté qu’elle était retournée à l’université à quarante ans. Je suis rentrée chez moi et je n’ai pas dormi.\n' +
        'LA JOURNALISTE : Vous vous êtes inscrite tout de suite ?\n' +
        'L’INVITÉE : Ah non. Non, non. J’ai mis dix-huit mois. Il fallait de l’argent, bien sûr. Mais surtout il fallait que j’accepte l’idée d’être la plus vieille de l’amphi. Ça, ça m’a coûté plus cher que l’argent, franchement.\n' +
        'LA JOURNALISTE : Et une fois dans l’amphi ?\n' +
        'L’INVITÉE : Là, surprise. Personne ne m’a regardée. Les jeunes se fichent complètement de votre âge. C’était moi qui me regardais. Par contre, je ne vais pas mentir : les trois premiers mois, je ne savais plus prendre des notes. Plus du tout. J’écrivais tout, mot à mot.\n' +
        'LA JOURNALISTE : Vous conseilleriez à quelqu’un de faire pareil ?\n' +
        'L’INVITÉE : Je conseillerais surtout de ne pas le faire seul. Ce n’est pas le niveau qui casse les gens, c’est l’isolement. Moi j’avais un groupe de quatre, on se retrouvait le mardi. Sans eux, j’arrêtais en janvier, c’est certain.\n' +
        'LA JOURNALISTE : Et la restauration, vous la regrettez ?\n' +
        'L’INVITÉE : Les collègues, oui. Le métier, non. Enfin… le métier, il m’a appris à tenir debout quatorze heures et à ne pas paniquer quand tout tombe en même temps. Ça, ça me sert tous les jours. Mais y retourner, non.',
      items: [
        {
          q: 'De quoi parle principalement cette interview ?',
          opts: [
            'Du retour d’une femme à l’université après dix ans de travail',
            'Des difficultés du métier de la restauration',
            'De l’accueil des étudiants adultes par les universités',
            'Du financement des reprises d’études',
          ],
          correct: 0,
          why: 'Toutes les questions portent sur son parcours : le déclic, l’attente, l’arrivée, le conseil, le regret.',
          band: 'b1',
        },
        {
          q: 'Qu’est-ce qui a déclenché sa décision ?',
          opts: [
            'Une conversation avec une cliente',
            'Une révélation soudaine, un soir',
            'Le départ d’un collègue de la restauration',
            'Une nuit sans sommeil qui l’a fait changer d’avis',
          ],
          correct: 0,
          why: 'Elle écarte elle-même l’idée de révélation. La nuit sans sommeil est la conséquence de la conversation, pas la cause.',
          band: 'b1',
        },
        {
          q: 'Qu’est-ce qui l’a le plus retenue avant de s’inscrire ?',
          opts: [
            'Le regard qu’elle portait sur son propre âge',
            'Le coût des études',
            'L’attitude des étudiants plus jeunes',
            'La difficulté à prendre des notes',
          ],
          correct: 0,
          why: '« Il fallait que j’accepte l’idée d’être la plus vieille… ça m’a coûté plus cher que l’argent. » L’argent est cité, puis classé second.',
          band: 'b2',
        },
        {
          q: 'Que découvre-t-elle en arrivant à l’université ?',
          opts: [
            'Que sa gêne venait d’elle seule',
            'Que les étudiants plus jeunes l’ont mal accueillie',
            'Que le niveau était plus élevé qu’elle ne pensait',
            'Qu’elle prenait des notes mieux que les autres',
          ],
          correct: 0,
          why: '« Personne ne m’a regardée… c’était moi qui me regardais. »',
          band: 'b2',
        },
        {
          q: 'Quel conseil donne-t-elle ?',
          opts: [
            'Ne pas entreprendre une reprise d’études seul',
            'Attendre d’avoir mis assez d’argent de côté',
            'Choisir une filière proche de son ancien métier',
            'Commencer par des cours du soir',
          ],
          correct: 0,
          why: '« Ce n’est pas le niveau qui casse les gens, c’est l’isolement. »',
          band: 'b2',
        },
        {
          q: 'L’invitée dit : « Le métier, non. Enfin… le métier, il m’a appris à tenir debout quatorze heures. » Que fait-elle dans cette phrase ?',
          opts: [
            'Elle nuance un refus qu’elle vient d’exprimer',
            'Elle revient sur sa décision de quitter la restauration',
            'Elle explique pourquoi elle avait choisi ce métier',
            'Elle compare deux métiers qu’elle a exercés',
          ],
          correct: 0,
          why: 'Le « enfin… » ouvre la nuance, et elle la referme aussitôt : « Mais y retourner, non. » Le refus tient.',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ Block F — Reportage ═════════════════════════════════════════════════ */
//
// The paper's most expensive single item: three voices, the longest
// transcript, one mark. Not economised into a monologue, and the question is a
// GIST question by design — a detail question on two minutes of audio is a
// lottery.
//
// SELF-VERIFY (F1): the Institut Verlune figure is invented and attributed to
// an invented source. Option 4 is true of the OTHER communes in that figure,
// which is what makes it a D4 rather than a free elimination. Cover test
// passed. Genders: commune f, subvention f, cantine f, hiver m.

export const CO_F: ExamTask = {
  ...base,
  id: taskId('co_mcq', '006'),
  level: 'c1',
  label: 'Section F',
  prompt: 'Vous allez entendre un reportage. Répondez à la question.',
  timingS: 190,
  targetItemIds: uniq(ITEMS.immigration, ITEMS.communaute, ITEMS.maison),
  parts: [
    {
      label: 'Reportage · une commune qui retient ceux qui arrivent',
      playCount: 1,
      readWindowS: 25,
      durationS: 125,
      text:
        'LA NARRATRICE : Meillac, trois mille deux cents habitants, une école, deux commerces et, depuis dix-huit mois, quarante nouveaux habitants. La commune n’avait pas gagné un habitant depuis vingt ans.\n' +
        'UNE HABITANTE : On nous avait dit : ils viendront, ils repartiront. Bon. Il y en a qui sont repartis, c’est vrai. Mais la moitié est restée. Ça, personne ne l’avait prévu.\n' +
        'LA NARRATRICE : Ce que la commune a fait n’a rien de spectaculaire. Pas de subvention, pas de campagne. Une liste, tenue par une bénévole, de ce qui manque à quelqu’un qui arrive : un garagiste, un médecin, une place à la cantine, quelqu’un qui parle un peu anglais le premier mois.\n' +
        'LA NARRATRICE : Sur cette liste, à la ligne du mois de mars, on lit : famille de quatre, arrivée le douze, cherche un dentiste et quelqu’un pour garder les enfants le mercredi. En face, deux prénoms et un numéro de téléphone. La bénévole appelle. C’est tout ce que la méthode contient.\n' +
        'LE MAIRE : Nous, on n’a pas d’argent. On a du temps, et on se connaît. Quand une famille arrive, dans la semaine quelqu’un passe. Ce n’est pas une politique, ça. C’est juste… c’est ce qu’on ferait pour un cousin. On n’a rien inventé, vous savez. On a seulement décidé que ce serait toujours la même personne qui rappelle.\n' +
        'LA NARRATRICE : L’Institut Verlune a suivi douze communes comparables. Celles qui ont misé sur des aides financières ont vu repartir sept nouveaux arrivants sur dix en trois ans. Meillac, qui n’a rien dépensé, en garde un sur deux.\n' +
        'UNE HABITANTE : Le problème, ce n’est jamais le logement. Du logement, on en trouve. C’est le deuxième hiver. Le deuxième hiver, s’il n’y a personne à qui parler, ils s’en vont.\n' +
        'UN NOUVEL ARRIVANT : Le premier hiver, on ne connaît personne. On se dit qu’on a fait une bêtise, franchement. Moi, ce qui m’a retenu, c’est une voisine qui est passée un dimanche de novembre avec une tarte, et qui est restée deux heures. Ce n’est rien, une tarte. Mais après ça, j’avais quelqu’un à qui dire bonjour le matin.\n' +
        'LA NARRATRICE : La commune a aujourd’hui une liste d’attente pour les logements communaux. Le maire, lui, s’inquiète d’autre chose : la bénévole qui tient la liste a soixante-treize ans, et personne ne s’est proposé pour la remplacer.',
      items: [
        {
          q: 'Quelle est l’idée principale de ce reportage ?',
          opts: [
            'Ce qui retient les nouveaux arrivants tient plus au lien qu’à l’argent',
            'Les petites communes doivent verser des aides pour attirer des habitants',
            'Le manque de logements freine l’installation dans les zones rurales',
            'Les nouveaux arrivants repartent presque tous au bout de trois ans',
          ],
          correct: 0,
          why: 'Meillac ne dépense rien et garde un arrivant sur deux ; les communes qui paient en perdent sept sur dix. L’habitante ajoute que le logement n’est jamais le problème.',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ Block G — Documents divers ══════════════════════════════════════════ */
//
// 17 of the paper's 40 listening marks, under the `G-elastic` fill rule
// (BLUEPRINT §3.1). Seventeen separate short documents in five sub-types:
//
//   échanges à deux tours   4     messages sur répondeur   3
//   messages d'information  3     micro-trottoirs courts   4
//   consignes et indications 3
//
// Ordered so no two consecutive documents share a sub-type, and the bands are
// SPREAD across A2 to B2 rather than ramping, because TEF does not ramp.
//
// SELF-VERIFY (G01-G17): every key is stated or directly inferable from its
// own document; no item is answerable from another. Cover test passed on all
// seventeen — each option set stays inside one semantic category (all reasons,
// all times, all actions). Every proper noun invented: Pralet, Verlune,
// Sainte-Ambre, Corbeny. Genders checked against lexique-gender.csv:
// facture f, panne f, colonne f, ordonnance f, boîte f, gouttière f,
// caution f, rame f, notice f, douane f, diplôme m, écran m, badge m.

const G = (
  label: string,
  durationS: number,
  text: string,
  q: string,
  opts: string[],
  why: string,
  band: 'a2' | 'b1' | 'b2'
) => ({ label, playCount: 1, readWindowS: 10, durationS, text, items: [{ q, opts, correct: 0, why, band }] });

export const CO_G: ExamTask = {
  ...base,
  id: taskId('co_mcq', '007'),
  level: 'b1',
  label: 'Section G',
  prompt:
    'Vous allez entendre dix-sept documents courts et variés. ' +
    'Pour chaque document, choisissez la bonne réponse.',
  timingS: 790,
  targetItemIds: uniq(
    ITEMS.collegues, ITEMS.courses, ITEMS.sante, ITEMS.immigration, ITEMS.internet,
    ITEMS.maison, ITEMS.communaute, ITEMS.ecologie, ITEMS.transports, ITEMS.appareils
  ),
  parts: [
    G(
      'Document 1 · échange · au bureau',
      24,
      'LUI : Écoute, si tu prends la table près de la fenêtre, moi je ne vois plus mon écran, avec le soleil.\n' +
        'ELLE : Ah. Bon. Et si on décale la table d’un mètre vers la porte ?\n' +
        'LUI : Ça, ça m’irait. Faut juste bouger l’imprimante.',
      'Quelle solution est retenue ?',
      [
        'Déplacer la table vers la porte',
        'Installer un rideau à la fenêtre',
        'Changer l’écran de place',
        'Renoncer à la table près de la fenêtre',
      ],
      'Elle propose de décaler la table d’un mètre et il accepte : « ça, ça m’irait ».',
      'a2'
    ),
    G(
      'Document 2 · répondeur · service client',
      28,
      'LA VOIX : Bonjour, ici le service technique. Nous avons bien reçu votre signalement de panne. ' +
        'Un technicien passera chez vous jeudi entre huit et douze heures. ' +
        'Il faut que quelqu’un soit présent, sinon la visite sera facturée. ' +
        'Pour changer le créneau, rappelez avant mercredi midi.',
      'Que risque le client s’il est absent jeudi matin ?',
      [
        'Il devra payer le déplacement',
        'Il perdra sa place dans la file d’attente',
        'Il devra signaler la panne à nouveau',
        'Il sera raccordé plus tard dans la journée',
      ],
      '« Il faut que quelqu’un soit présent, sinon la visite sera facturée. »',
      'b1'
    ),
    G(
      'Document 3 · information · dans un parc',
      26,
      'LA VOIX : Avis aux promeneurs. L’association Verlune organise samedi matin un ramassage de déchets ' +
        'le long de la rivière. Rendez-vous à neuf heures au pont de pierre. ' +
        'Les gants et les sacs sont fournis. Prévoyez des bottes : les berges sont glissantes.',
      'Que doivent apporter les participants ?',
      ['Des bottes', 'Des gants', 'Des sacs', 'Un pique-nique'],
      'Les gants et les sacs sont fournis. Seules les bottes restent à la charge du participant.',
      'a2'
    ),
    G(
      'Document 4 · micro-trottoir · réunions au travail',
      30,
      'LA PASSANTE : Trente minutes maximum ? Alors sur le papier, oui, évidemment. ' +
        'Mais chez nous ce qui prend du temps, ce n’est pas la réunion. ' +
        'C’est qu’on convoque douze personnes quand le sujet en concerne trois. ' +
        'Réduisez la durée, vous ferez juste deux réunions au lieu d’une.',
      'Quel est son point de vue ?',
      [
        'Limiter la durée ne réglera pas le vrai problème',
        'Les réunions devraient durer moins de trente minutes',
        'Il faudrait convoquer plus de participants',
        'Deux réunions courtes valent mieux qu’une longue',
      ],
      'Elle déplace le problème : ce n’est pas la durée, c’est le nombre de personnes convoquées.',
      'b2'
    ),
    G(
      'Document 5 · consignes · installer un routeur',
      30,
      'LA VOIX : Branchez d’abord le câble gris sur la prise murale, puis le routeur sur le secteur. ' +
        'Attendez que le voyant passe au vert fixe : cela peut prendre dix minutes. ' +
        'Ne débranchez rien pendant ce temps. Si le voyant clignote encore au bout d’un quart d’heure, ' +
        'éteignez le routeur, attendez trente secondes et rallumez.',
      'Que faut-il faire si le voyant clignote toujours après quinze minutes ?',
      [
        'Éteindre le routeur, patienter, puis le rallumer',
        'Débrancher le câble gris et le rebrancher',
        'Attendre encore dix minutes sans rien toucher',
        'Brancher le routeur avant le câble mural',
      ],
      'La consigne finale est explicite : éteindre, attendre trente secondes, rallumer.',
      'b1'
    ),
    G(
      'Document 6 · échange · au magasin',
      27,
      'LE CLIENT : Je voudrais échanger cette lampe, elle ne s’allume pas.\n' +
        'LA VENDEUSE : Vous avez le ticket ?\n' +
        'LE CLIENT : Non, c’était un cadeau.\n' +
        'LA VENDEUSE : Alors sans ticket je ne peux pas rembourser. Mais si c’est un défaut, ' +
        'je peux vous faire un avoir. Il faut que je note le numéro de série.',
      'Que propose la vendeuse ?',
      [
        'Un avoir, après vérification du numéro de série',
        'Un remboursement en espèces',
        'Un échange immédiat contre la même lampe',
        'Une réparation en atelier sous quinze jours',
      ],
      'Sans ticket, pas de remboursement. Elle propose un avoir et doit relever le numéro de série.',
      'b1'
    ),
    G(
      'Document 7 · répondeur · au gestionnaire de l’immeuble',
      29,
      'LA LOCATAIRE : Oui bonjour, madame Pralet, appartement 4B. Je vous rappelle pour la tache au plafond ' +
        'de la chambre. Ça s’est étendu depuis lundi, il y a de l’eau qui perle maintenant. ' +
        'Le voisin du dessus dit qu’il n’a rien remarqué chez lui. Moi je pense que ça vient de la gouttière. ' +
        'Rappelez-moi, c’est urgent.',
      'Selon la locataire, d’où vient l’eau ?',
      [
        'De la gouttière de l’immeuble',
        'De l’appartement du voisin',
        'D’une fuite dans sa chambre',
        'De la salle de bains du dessus',
      ],
      'Le voisin n’a rien remarqué ; elle en conclut que la gouttière est en cause.',
      'b1'
    ),
    G(
      'Document 8 · information · fête de quartier',
      25,
      'LA VOIX : Chers habitants, la fête de quartier prévue dimanche est annulée. ' +
        'Les prévisions annoncent des rafales trop fortes pour les tentes installées sur la place. ' +
        'Le repas est reporté au dimanche suivant, à la salle des fêtes. ' +
        'Les inscriptions déjà prises restent valables.',
      'Pourquoi la fête est-elle annulée ?',
      [
        'À cause du vent annoncé',
        'Parce que la place est déjà occupée',
        'Faute d’un nombre suffisant d’inscrits',
        'Parce que la salle des fêtes est fermée',
      ],
      '« Des rafales trop fortes pour les tentes installées sur la place. »',
      'a2'
    ),
    G(
      'Document 9 · micro-trottoir · les écrans et les enfants',
      28,
      'LE PASSANT : Limiter, limiter… on dit ça, et on leur donne une tablette à table pour avoir la paix. ' +
        'Moi le premier, hein, je ne donne de leçon à personne. ' +
        'Mais tant que les adultes ne lâchent pas leur téléphone, expliquer aux gamins que c’est mauvais, ' +
        'ça ne marchera jamais.',
      'Quel est son point de vue ?',
      [
        'L’exemple des adultes compte plus que les règles',
        'Il faut interdire les tablettes pendant les repas',
        'Les enfants d’aujourd’hui sont plus raisonnables',
        'Les règles sur les écrans sont désormais respectées',
      ],
      'Il s’inclut lui-même dans le reproche : tant que les adultes ne lâchent pas leur téléphone, la règle ne tiendra pas.',
      'b2'
    ),
    G(
      'Document 10 · consignes · activer un abonnement',
      27,
      'LA VOIX : Votre carte est prête. Avant le premier voyage, il faut l’activer : ' +
        'posez-la sur une borne jaune, en gare, et attendez le signal sonore. ' +
        'Tant que vous n’avez pas entendu ce signal, la carte n’est pas valable, ' +
        'même si le montant a été prélevé.',
      'Quand la carte devient-elle valable ?',
      [
        'Après le signal sonore de la borne',
        'Dès que le paiement a été prélevé',
        'Au premier passage dans le train',
        'Le lendemain de l’achat',
      ],
      '« Tant que vous n’avez pas entendu ce signal, la carte n’est pas valable, même si le montant a été prélevé. »',
      'a2'
    ),
    G(
      'Document 11 · échange · prise de rendez-vous',
      30,
      'LE PATIENT : J’aurais voulu voir le docteur assez vite, si possible.\n' +
        'LA SECRÉTAIRE : Alors en consultation normale, c’est fin mars. ' +
        'Par contre, on garde deux créneaux d’urgence chaque matin, à sept heures quarante-cinq. ' +
        'Ceux-là, on ne les donne pas à l’avance : il faut appeler le jour même, dès l’ouverture.',
      'Comment le patient peut-il être vu rapidement ?',
      [
        'En téléphonant le matin même, dès l’ouverture',
        'En prenant un rendez-vous fin mars',
        'En se présentant à sept heures quarante-cinq sans appeler',
        'En demandant à être placé sur une liste d’attente',
      ],
      'Les créneaux d’urgence ne se réservent pas à l’avance : il faut appeler le jour même.',
      'b1'
    ),
    G(
      'Document 12 · répondeur · déménagement',
      26,
      'L’HOMME : Bonjour, c’est monsieur Corbeny. Le camion devait arriver à huit heures, ' +
        'il est onze heures et je n’ai toujours personne. J’ai l’ascenseur réservé jusqu’à quatorze heures, ' +
        'après c’est fini, il y a des travaux dans l’immeuble. Donc si vous ne pouvez pas venir avant midi, ' +
        'dites-le-moi maintenant, je reporte tout.',
      'Quel est le problème le plus pressant pour cet homme ?',
      [
        'L’ascenseur ne sera plus disponible après quatorze heures',
        'Le camion est arrivé trois heures en retard',
        'Des travaux commencent dans son appartement',
        'Il doit quitter le logement avant midi',
      ],
      'Le retard est le fait ; ce qui l’oblige à décider maintenant, c’est la réservation de l’ascenseur qui expire.',
      'b2'
    ),
    G(
      'Document 13 · information · règlement de l’immeuble',
      24,
      'LA VOIX : Rappel aux résidents. Les travaux bruyants sont autorisés du lundi au samedi, ' +
        'de neuf heures à midi et de quatorze à dix-neuf heures. ' +
        'En dehors de ces horaires, et toute la journée le dimanche, ' +
        'ils sont interdits, y compris dans les caves.',
      'Quand les travaux bruyants sont-ils interdits ?',
      [
        'Le dimanche toute la journée',
        'Le samedi après-midi',
        'Le lundi avant midi',
        'Uniquement dans les parties communes',
      ],
      'Le dimanche est exclu en entier ; les autres créneaux cités sont au contraire autorisés.',
      'a2'
    ),
    G(
      'Document 14 · micro-trottoir · les bénévoles d’une course',
      29,
      'LA PASSANTE : Bénévole, oui, j’ai déjà fait. Trois ans de suite, aux ravitaillements. ' +
        'Cette année non. Pas parce que ça ne me plaît pas, hein, au contraire. ' +
        'Mais ils demandent la journée entière, de six heures à dix-huit heures. ' +
        'Une demi-journée, je signais tout de suite.',
      'Pourquoi ne sera-t-elle pas bénévole cette année ?',
      [
        'Parce que l’engagement demandé dure trop longtemps',
        'Parce que l’expérience ne lui a pas plu',
        'Parce qu’elle a déjà donné trois ans',
        'Parce qu’elle n’aime pas les ravitaillements',
      ],
      'Elle écarte explicitement le désintérêt : « pas parce que ça ne me plaît pas ». C’est la journée entière qui bloque.',
      'b1'
    ),
    G(
      'Document 15 · consignes · à la pharmacie',
      28,
      'LA PHARMACIENNE : Alors, un comprimé le matin et un le soir, pendant six jours. ' +
        'Toujours au cours du repas, jamais à jeun. ' +
        'Et si vous oubliez une prise, vous ne doublez pas la suivante, vous reprenez normalement. ' +
        'Six jours, même si vous vous sentez mieux avant.',
      'Que faire en cas d’oubli d’une prise ?',
      [
        'Reprendre normalement à la prise suivante',
        'Prendre deux comprimés à la prise suivante',
        'Arrêter le traitement et revenir en pharmacie',
        'Prendre le comprimé oublié à jeun',
      ],
      '« Vous ne doublez pas la suivante, vous reprenez normalement. »',
      'b1'
    ),
    G(
      'Document 16 · échange · au contrôle des bagages',
      27,
      'L’AGENTE : Vous avez quelque chose à déclarer ?\n' +
        'LE VOYAGEUR : Non… enfin, j’ai du fromage et deux bouteilles, mais c’est pour la famille.\n' +
        'L’AGENTE : Les bouteilles, pas de problème sous deux litres. Le fromage au lait cru, en revanche, ' +
        'je vais devoir vous le retirer. Ce n’est pas une amende, c’est la règle sanitaire.',
      'Que se passe-t-il pour les affaires du voyageur ?',
      [
        'Le fromage est retiré, les bouteilles passent',
        'Tout est retenu en attendant une déclaration',
        'Le voyageur doit payer une amende',
        'Les bouteilles sont retirées, le fromage passe',
      ],
      'Sous deux litres les bouteilles passent ; le fromage au lait cru est retiré, sans amende.',
      'b1'
    ),
    G(
      'Document 17 · micro-trottoir · la valeur des diplômes',
      30,
      'LE PASSANT : Est-ce que ça vaut encore quelque chose ? Ça dépend à quel moment on pose la question. ' +
        'Pour décrocher le premier entretien, oui, ça compte, et ça compte même beaucoup. ' +
        'Après, une fois que vous êtes dans la place, plus personne ne vous demande où vous avez étudié. ' +
        'Le diplôme, ça ouvre la porte. Ça ne fait pas la carrière.',
      'Quel est son point de vue ?',
      [
        'Le diplôme sert surtout au début du parcours professionnel',
        'Le diplôme a perdu toute valeur sur le marché du travail',
        'Le diplôme compte davantage que l’expérience acquise',
        'Le diplôme est réclamé à chaque changement de poste',
      ],
      '« Le diplôme, ça ouvre la porte. Ça ne fait pas la carrière. »',
      'b2'
    ),
  ],
};
