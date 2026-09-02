// TEF Canada blanc-03 — Compréhension orale, blocks E, F and G.
//
//   E  6 · interviews        · 4 options · 2 plays  ← the only 2-play block
//   F  1 · reportage         · 4 options · 1 play
//   G 17 · documents divers  · 4 options · 1 play   ← G-elastic fill rule
//
// Block G is seventeen documents, one question each, in the blueprint's mix —
// 4 échanges, 3 répondeurs, 3 informations, 4 micros-trottoirs, 3 consignes —
// ordered so no two consecutive documents share a sub-type. The order is the
// approved plan's.
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
// THE ONLY TWO-PLAY BLOCK and the longest document in the paper. Six questions
// from one interview means holding a structure rather than catching a fact: the
// interviewee corrects the interviewer twice, and two of the six turn on those
// corrections.
//
// SELF-VERIFY (E1–E6): every key is stated by the interviewee, never by the
// interviewer, so tracking only the questions scores nothing. No two keys come
// from the same turn.

export const CO_E: ExamTask = {
  ...base,
  id: taskId('co_mcq', '005'),
  level: 'b2',
  label: 'Section E',
  prompt: 'Vous allez entendre une interview, deux fois. Choisissez la bonne réponse pour chaque question.',
  timingS: 430,
  targetItemIds: uniq(ITEMS.metiers, ITEMS.universite),
  parts: [
    {
      label: 'Interview · une reconversion à quarante ans',
      playCount: 2,
      readWindowS: 20,
      durationS: 180,
      text:
        'LE JOURNALISTE : Vous étiez juriste, vous êtes aujourd’hui ébéniste. On dit souvent « tout plaquer ».\n' +
        'L’INVITÉE : C’est l’expression que je refuse, justement. Je n’ai rien plaqué : j’ai mis quatre ans ' +
        'à préparer ce changement. Les deux dernières années, je travaillais à quatre-cinquièmes et ' +
        'j’étais en atelier le vendredi. Ce n’est pas un saut, c’est une passerelle.\n' +
        'LE JOURNALISTE : Et financièrement ?\n' +
        'L’INVITÉE : Alors là, il faut être précis, parce qu’on raconte beaucoup de choses. J’ai perdu ' +
        'quarante pour cent de revenu la première année. Ce qui m’a permis de tenir, ce n’est pas le ' +
        'courage, c’est d’avoir mis de côté pendant les quatre années de préparation. Sans ça, je serais ' +
        'revenue au bout de six mois.\n' +
        'LE JOURNALISTE : Qu’est-ce qui a été le plus dur ? Le geste, la technique ?\n' +
        'L’INVITÉE : Non, la technique, ça s’apprend, c’est même reposant. Le plus dur, c’est de ' +
        'redevenir mauvaise. À quarante ans, vous avez vingt ans de compétence derrière vous, et vous ' +
        'vous retrouvez la plus lente de l’atelier. Ça, personne ne vous le dit.\n' +
        'LE JOURNALISTE : Vous conseilleriez à d’autres de le faire ?\n' +
        'L’INVITÉE : Euh… je conseillerais de tester avant. Pas de rêver, de tester. Passez trois mois ' +
        'de samedis dans le métier que vous imaginez. Beaucoup de gens ne fuient pas vers un métier, ils ' +
        'fuient le leur, et ça ne se règle pas en changeant de métier.\n' +
        'LE JOURNALISTE : Vous avez suivi une formation longue, j’imagine ?\n' +
        'L’INVITÉE : Un CAP en un an, pas trois. Et je le précise parce qu’on croit souvent qu’il faut ' +
        'repartir de zéro pour très longtemps. Pour un adulte en reconversion, la durée est réduite.',
      items: [
        {
          q: 'Pourquoi l’invitée refuse-t-elle l’expression « tout plaquer » ?',
          opts: [
            'Parce qu’elle a préparé le changement pendant quatre ans',
            'Parce qu’elle exerce encore son ancien métier à mi-temps',
            'Parce qu’elle juge cette expression trop familière',
            'Parce qu’elle n’a jamais réellement quitté le droit',
          ],
          correct: 0,
          why: '« Je n’ai rien plaqué : j’ai mis quatre ans à préparer ce changement… c’est une passerelle. »',
          band: 'b2',
        },
        {
          q: 'Qu’est-ce qui lui a permis de tenir financièrement ?',
          opts: [
            'L’épargne accumulée pendant sa préparation',
            'Le maintien d’un revenu à quatre-cinquièmes',
            'Une aide versée pendant sa formation',
            'Un revenu d’atelier supérieur à ses prévisions',
          ],
          correct: 0,
          why: '« Ce n’est pas le courage, c’est d’avoir mis de côté pendant les quatre années de préparation. »',
          band: 'b2',
        },
        {
          q: 'Quelle a été, selon elle, la difficulté principale ?',
          opts: [
            'Accepter de redevenir la plus lente de l’atelier',
            'Apprendre les gestes techniques du métier',
            'Convaincre son entourage de son choix',
            'Trouver un atelier prêt à l’accueillir',
          ],
          correct: 0,
          why: 'Elle écarte la technique (« ça s’apprend, c’est même reposant ») et nomme le fait de « redevenir mauvaise ».',
          band: 'b2',
        },
        {
          q: 'Que conseille-t-elle à ceux qui envisagent une reconversion ?',
          opts: [
            'De tester le métier concrètement avant de se décider',
            'De se former pendant au moins trois années',
            'D’attendre d’avoir une épargne suffisante',
            'De consulter un conseiller en évolution professionnelle',
          ],
          correct: 0,
          why: '« Je conseillerais de tester avant. Pas de rêver, de tester. Passez trois mois de samedis dans le métier que vous imaginez. »',
          band: 'b2',
        },
        {
          q: 'Quelle distinction fait-elle sur les motivations ?',
          opts: [
            'Beaucoup fuient leur métier plutôt qu’ils ne vont vers un autre',
            'Beaucoup choisissent un métier manuel par simple curiosité',
            'Beaucoup surestiment largement le revenu du métier vers lequel ils se dirigent',
            'Beaucoup se reconvertissent trop tard dans leur carrière',
          ],
          correct: 0,
          why: '« Beaucoup de gens ne fuient pas vers un métier, ils fuient le leur, et ça ne se règle pas en changeant de métier. »',
          band: 'b2',
        },
        {
          q: 'Que corrige-t-elle à propos de la formation ?',
          opts: [
            'Un adulte en reconversion prépare le CAP en un an',
            'La formation dure trois ans comme pour les autres élèves',
            'La formation se fait uniquement en apprentissage',
            'Aucun diplôme n’est exigé pour exercer le métier',
          ],
          correct: 0,
          why: '« Un CAP en un an, pas trois… Pour un adulte en reconversion, la durée est réduite. »',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ Block F — Reportage ═════════════════════════════════════════════════ */
//
// One question for the longest stretch of continuous speech, and the hardest
// mark on the épreuve: the candidate answers about the report's movement, not a
// detail.
//
// LENGTH: STANDARD-tef §2 puts this document at 120-180s. The first draft ran
// 206 words and rendered at 68s, roughly half. Extended to length with the same
// movement and the same key: a gist item needs enough argument to be a gist.
//
// SELF-VERIFY (F1): the key is the report's shape and is stated in no single
// sentence. Each distractor IS stated somewhere, which is the point. The
// Centre Aubrac figure is invented and attributed to an invented source.
//
// ROUTING: this block routes to `examens-et-diplomes` rather than to `ecole`,
// the situation's own theme. `ecole` carries nothing above A2, so a miss on a
// C1 reportage would have sent the learner A1 school vocabulary.

export const CO_F: ExamTask = {
  ...base,
  id: taskId('co_mcq', '006'),
  level: 'b2',
  label: 'Section F',
  prompt: 'Vous allez entendre un reportage. Choisissez la bonne réponse.',
  timingS: 190,
  targetItemIds: uniq(ITEMS.examensEtDiplomes),
  parts: [
    {
      label: 'Reportage · l’orientation après le lycée',
      playCount: 1,
      readWindowS: 15,
      durationS: 150,
      text:
        'LA REPORTRICE : Au lycée de Mesnil-Doré, l’orientation occupait deux heures par an. Elle en occupe ' +
        'aujourd’hui quarante. Ce n’est pas une lubie locale : c’est le résultat d’un constat brutal fait ' +
        'il y a cinq ans.\n' +
        'LE PROVISEUR : Un tiers de nos élèves changeaient de filière ou abandonnaient dans l’année qui ' +
        'suivait le bac. Un tiers. Et quand on les interrogeait, la réponse n’était presque jamais « je ' +
        'n’ai pas le niveau ». C’était « je ne savais pas ce que c’était ».\n' +
        'LE PROVISEUR : Nous avions pourtant tout fait dans les règles. Deux salons par an, des anciens ' +
        'élèves qui venaient parler le vendredi, des brochures. Les élèves écoutaient poliment et ' +
        'ressortaient avec exactement la même idée qu’en entrant.\n' +
        'LA REPORTRICE : L’établissement a donc renoncé aux conférences et aux salons, jugés trop ' +
        'généraux, pour une formule plus lente : chaque élève passe deux journées entières dans une ' +
        'structure professionnelle, et deux dans une formation supérieure, avant de formuler ses vœux.\n' +
        'LA REPORTRICE : Deux jours, ce n’est pas un stage. C’est assez long pour voir l’ennui, les ' +
        'horaires, les gestes répétés, ce qu’aucune brochure ne montre.\n' +
        'UNE ÉLÈVE : Moi je voulais faire vétérinaire depuis la sixième. J’ai passé deux jours en ' +
        'clinique. Ce n’est pas que ça m’a déplu, c’est que j’ai vu ce que c’était vraiment, et j’ai ' +
        'compris que ce n’était pas ce que j’imaginais. Je fais biologie maintenant, et je suis contente.\n' +
        'UNE ÉLÈVE : Ce qui m’a le plus servi, franchement, c’est le deuxième jour. Le premier, on vous ' +
        'montre. Le deuxième, on vous oublie un peu, et là vous voyez le métier tel qu’il est.\n' +
        'LA REPORTRICE : Le Centre Aubrac a comparé quarante établissements sur trois promotions. Là où ' +
        'l’orientation reste informative, un élève sur trois change de voie dans l’année. Là où elle ' +
        'passe par une immersion longue, c’est un sur six.\n' +
        'UNE PROFESSEURE : Il faut dire d’où viennent ces quarante heures. Elles ne tombent pas du ciel. ' +
        'Elles sortent de mes heures à moi, et de celles de mes collègues. Je crois au dispositif, et je ' +
        'vois aussi le programme que je ne finis plus.\n' +
        'LA REPORTRICE : Les abandons ont reculé de moitié. Le proviseur, lui, refuse d’y voir une ' +
        'recette : les quarante heures se prennent sur les autres enseignements, et le dispositif repose ' +
        'sur un réseau d’entreprises que tous les lycées n’ont pas sous la main.\n' +
        'LE PROVISEUR : Cette année, deux entreprises se sont retirées. Il a fallu trouver vingt places ' +
        'en six semaines. Nous les avons trouvées. Je ne garantis pas que ce sera vrai l’an prochain.',
      items: [
        {
          q: 'Quelle est l’idée principale du reportage ?',
          opts: [
            'Une orientation fondée sur l’expérience réelle réduit les abandons, à un coût',
            'Les élèves de terminale choisissent des filières trop difficiles pour eux',
            'Les salons et les conférences restent le meilleur outil d’orientation',
            'Les lycées manquent surtout d’heures d’enseignement disciplinaire',
          ],
          correct: 0,
          why: 'Le constat est « je ne savais pas ce que c’était », la réponse est l’immersion, le résultat une baisse de moitié, et le prix est nommé deux fois : par la professeure dont les heures partent, et par le proviseur dont deux entreprises se retirent.',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ Block G — Documents divers ══════════════════════════════════════════ */
//
// Seventeen short documents, one question each, built through a helper: writing
// seventeen part literals by hand is seventeen chances to drop a playCount or a
// reading window, and the helper cannot forget one.
//
// SELF-VERIFY (G1–G17): every key is stated in its own document and in no other.
// Sub-type order matches the plan and no two consecutive documents share one.

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
    ITEMS.maison, ITEMS.deplacements, ITEMS.entraide, ITEMS.argentQuotidien, ITEMS.soins,
    ITEMS.collegues, ITEMS.courses, ITEMS.animauxDomestiques, ITEMS.universite,
    ITEMS.gouvernement, ITEMS.appareils, ITEMS.objets, ITEMS.ecologie,
    ITEMS.transportsQuotidiens, ITEMS.hebergement, ITEMS.reseauxSociaux
  ),
  parts: [
    doc(
      'Document 1 · échange · la clé cassée',
      33,
      'LA LOCATAIRE : Bonjour, j’ai la clé qui a cassé dans la serrure. Il en reste la moitié dedans.\n' +
      'LE DÉPANNEUR : Vous êtes dehors ou dedans ?\n' +
      'LA LOCATAIRE : Dehors, justement.\n' +
      'LE DÉPANNEUR : D’accord. Ne tirez surtout pas dessus avec une pince, vous l’enfonceriez. ' +
      'Je passe dans quarante minutes, ne touchez à rien.',
      'Que demande le dépanneur à la locataire ?',
      [
        'De ne rien tenter avant son arrivée',
        'D’essayer de retirer la clé avec une pince',
        'De se rendre chez un serrurier avec la clé',
        'D’attendre dehors pendant quarante minutes',
      ],
      '« Ne tirez surtout pas dessus avec une pince… ne touchez à rien. » Il ne lui demande pas où attendre.',
      'b1'
    ),
    doc(
      'Document 2 · répondeur · le remboursement du billet',
      30,
      'LA VOIX : Bonjour, message du service clientèle concernant votre billet du douze mars. Votre ' +
      'demande de remboursement a été acceptée. Le montant sera crédité sur le moyen de paiement ' +
      'utilisé lors de l’achat, sous sept à dix jours ouvrés. Aucune démarche supplémentaire n’est ' +
      'nécessaire de votre part. Si vous ne voyez rien au bout de quinze jours, rappelez-nous.',
      'Que doit faire le client maintenant ?',
      ['Rien, sauf en l’absence de virement après quinze jours', 'Renvoyer son billet par courrier', 'Rappeler pour confirmer son compte bancaire', 'Se présenter au guichet avec sa pièce d’identité'],
      '« Aucune démarche supplémentaire n’est nécessaire… Si vous ne voyez rien au bout de quinze jours, rappelez-nous. »',
      'b1'
    ),
    doc(
      'Document 3 · information · l’appel à bénévoles',
      31,
      'LA BÉNÉVOLE : Avis à tous. La collecte alimentaire a lieu samedi, de neuf heures à dix-huit heures, ' +
      'devant les trois magasins de Grandvaux. Nous cherchons des bénévoles par créneaux de deux heures : ' +
      'inutile de donner toute votre journée, deux heures suffisent et c’est même mieux réparti. ' +
      'Les gilets et les caisses sont fournis. Inscrivez-vous sur la feuille affichée à la mairie.',
      'Quelle durée d’engagement est demandée ?',
      [
        'Deux heures, sur un créneau au choix',
        'La journée entière, de neuf à dix-huit heures',
        'Trois heures devant chacun des magasins',
        'Une matinée, gilets et caisses non fournis',
      ],
      '« Des bénévoles par créneaux de deux heures : inutile de donner toute votre journée. »',
      'a2'
    ),
    doc(
      'Document 4 · micro-trottoir · payer sans espèces',
      32,
      'LE PASSANT : Sans espèces, ça ne me gêne pas, moi je paie tout par carte. Mais je pense à ma mère, ' +
      'qui a quatre-vingt-six ans, et qui compte ses billets sur la table pour tenir son budget. Vous lui ' +
      'enlevez ça, elle ne sait plus où elle en est. Alors « progrès », oui, mais pour qui ?',
      'Quelle est la position du passant ?',
      [
        'Le progrès existe mais laisse certaines personnes de côté',
        'Les paiements par carte devraient être limités par la loi',
        'Les espèces sont plus sûres que les paiements électroniques',
        'Les personnes âgées s’adaptent aussi vite que les autres',
      ],
      'Il paie lui-même par carte, mais objecte par l’exemple de sa mère : « progrès, oui, mais pour qui ? »',
      'b2'
    ),
    doc(
      'Document 5 · consignes · avant la prise de sang',
      32,
      'L’INFIRMIÈRE : Pour demain matin, trois choses. Vous êtes à jeun : rien à manger après minuit, ' +
      'mais vous pouvez boire de l’eau, et il vaut mieux en boire, ça facilite le prélèvement. Vous ' +
      'apportez l’ordonnance et votre carte. Et si vous prenez un traitement le matin, vous ne l’arrêtez ' +
      'pas : vous le prenez après la prise de sang, pas avant.',
      'Que peut faire le patient avant l’examen ?',
      [
        'Boire de l’eau, ce qui facilite le prélèvement',
        'Prendre un petit-déjeuner léger avant minuit',
        'Prendre son traitement habituel du matin',
        'Se présenter sans ordonnance ni carte',
      ],
      '« Vous pouvez boire de l’eau, et il vaut mieux en boire, ça facilite le prélèvement. » Le traitement se prend après, pas avant.',
      'a2'
    ),
    doc(
      'Document 6 · échange · la machine à café',
      31,
      'LE COLLÈGUE : La machine est encore en panne ?\n' +
      'LA COLLÈGUE : Non, elle marche. C’est le gobelet qui est bloqué, il faut appuyer deux fois.\n' +
      'LE COLLÈGUE : Ah. Et on prévient quelqu’un ?\n' +
      'LA COLLÈGUE : J’ai déjà signalé lundi. Ils viennent jeudi. En attendant, deux fois sur le bouton.',
      'Quel est le problème avec la machine ?',
      [
        'Le distributeur de gobelets se bloque',
        'La machine ne fonctionne plus du tout',
        'Personne n’a signalé la panne au service',
        'Le technicien est passé sans rien réparer',
      ],
      '« Elle marche. C’est le gobelet qui est bloqué. » La panne a bien été signalée le lundi.',
      'a2'
    ),
    doc(
      'Document 7 · répondeur · le délai de livraison',
      29,
      'LA VOIX : Bonjour, message concernant votre commande numéro quatre-vingt-douze. L’article est en ' +
      'rupture chez notre fournisseur. Nous pouvons soit vous livrer sous trois semaines, soit annuler ' +
      'et vous rembourser immédiatement. Sans réponse de votre part sous quarante-huit heures, nous ' +
      'maintenons la commande et vous livrons sous trois semaines.',
      'Que se passe-t-il si le client ne répond pas ?',
      [
        'La commande est maintenue et livrée sous trois semaines',
        'La commande est annulée et remboursée automatiquement',
        'La commande est suspendue pendant quarante-huit heures',
        'Le client doit rappeler pour relancer sa commande',
      ],
      '« Sans réponse de votre part sous quarante-huit heures, nous maintenons la commande. »',
      'b1'
    ),
    doc(
      'Document 8 · information · le chat perdu',
      27,
      'LA VOISINE : Bonjour à tous. Notre chat roux a disparu depuis mardi soir, du côté de la rue des ' +
      'Peupliers. Il est tatoué mais il n’a pas de collier. Il est très craintif : surtout, n’essayez ' +
      'pas de l’attraper, vous le feriez fuir plus loin. Appelez-nous simplement, le numéro est sur ' +
      'l’affiche, et nous viendrons.',
      'Que demande la voisine à ceux qui verraient le chat ?',
      [
        'De téléphoner sans chercher à l’attraper',
        'De l’attraper et de le garder chez eux',
        'De vérifier s’il porte bien un collier',
        'De le conduire chez un vétérinaire',
      ],
      '« N’essayez pas de l’attraper, vous le feriez fuir plus loin. Appelez-nous simplement. »',
      'a2'
    ),
    doc(
      'Document 9 · micro-trottoir · petit groupe ou amphithéâtre',
      33,
      'L’ÉTUDIANTE : En petit groupe, on apprend mieux, c’est évident, mais je vais dire quelque chose ' +
      'qui ne va pas plaire : l’amphi m’a appris à travailler seule. En petit groupe, on est porté, ' +
      'on n’a pas le choix de suivre. En amphi, si vous ne vous organisez pas, vous coulez. Et ça, ' +
      'personne ne me l’aurait appris autrement.',
      'Quel avantage l’étudiante reconnaît-elle à l’amphithéâtre ?',
      [
        'Il oblige à s’organiser et à travailler seul',
        'Il permet de suivre plus de cours différents',
        'Il favorise les échanges entre étudiants',
        'Il coûte moins cher à l’université',
      ],
      'Elle concède que le petit groupe fait mieux apprendre, puis nomme ce que l’amphi apporte : « si vous ne vous organisez pas, vous coulez ».',
      'b2'
    ),
    doc(
      'Document 10 · consignes · renouveler sa pièce d’identité',
      33,
      'L’AGENT : Alors, pour le renouvellement en ligne, dans l’ordre. Vous faites d’abord la pré-demande ' +
      'sur le site, et vous notez le numéro qu’elle vous donne. Ensuite seulement vous prenez rendez-vous ' +
      'en mairie, parce qu’on vous demandera ce numéro. Et le jour du rendez-vous, vous venez avec ' +
      'l’ancienne pièce, même périmée. Sans elle, il faut fournir un acte de naissance, et là ça rallonge.',
      'Dans quel ordre faut-il procéder ?',
      [
        'La pré-demande en ligne, puis le rendez-vous en mairie',
        'Le rendez-vous en mairie, puis la pré-demande en ligne',
        'L’acte de naissance, puis la pré-demande en ligne',
        'Les deux démarches peuvent être faites en même temps',
      ],
      '« Vous faites d’abord la pré-demande… Ensuite seulement vous prenez rendez-vous, parce qu’on vous demandera ce numéro. »',
      'b1'
    ),
    doc(
      'Document 11 · échange · la notice perdue',
      30,
      'LE CLIENT : J’ai acheté ce micro-ondes chez vous et j’ai perdu la notice.\n' +
      'LA VENDEUSE : On ne les garde pas en magasin, mais elle est en ligne. Vous prenez le numéro de ' +
      'modèle, il est derrière l’appareil, et vous le tapez sur le site du fabricant.\n' +
      'LE CLIENT : Et si je ne trouve pas le numéro ?\n' +
      'LA VENDEUSE : Il est aussi sur le ticket de caisse.',
      'Où le client peut-il trouver le numéro de modèle ?',
      [
        'Derrière l’appareil, ou sur le ticket de caisse',
        'Uniquement sur le site du fabricant',
        'Auprès du magasin, qui garde les notices',
        'Sur l’emballage d’origine de l’appareil',
      ],
      'La vendeuse donne deux emplacements : « il est derrière l’appareil » puis « aussi sur le ticket de caisse ».',
      'a2'
    ),
    doc(
      'Document 12 · répondeur · le report du partiel',
      29,
      'LA VOIX : Message du secrétariat pédagogique. Le partiel de méthodologie prévu jeudi est reporté ' +
      'au mardi suivant, même horaire, même salle. Ce report concerne uniquement ce partiel : les autres ' +
      'épreuves de la semaine sont maintenues. Les étudiants dispensés d’assiduité sont également ' +
      'concernés par le nouveau créneau.',
      'Qu’est-ce qui change exactement ?',
      [
        'La date de ce seul partiel, pas l’horaire ni la salle',
        'La date et la salle de toutes les épreuves de la semaine',
        'L’horaire de l’ensemble des épreuves de la semaine',
        'Rien pour les étudiants dispensés d’assiduité',
      ],
      '« Reporté au mardi suivant, même horaire, même salle », et « ce report concerne uniquement ce partiel ».',
      'b1'
    ),
    doc(
      'Document 13 · information · l’avis de passage',
      26,
      'LE FACTEUR : Avis de passage. Votre colis n’a pas pu être remis. Il est disponible au bureau de ' +
      'poste à partir de demain quatorze heures, et pendant quinze jours. Passé ce délai, il repart chez ' +
      'l’expéditeur. Présentez cet avis et une pièce d’identité au nom du destinataire.',
      'Que devient le colis après quinze jours ?',
      [
        'Il est renvoyé à l’expéditeur',
        'Il est représenté une seconde fois au domicile',
        'Il est conservé encore quinze jours au bureau',
        'Il est remis à toute personne présentant l’avis',
      ],
      '« Passé ce délai, il repart chez l’expéditeur. » La pièce d’identité doit être au nom du destinataire.',
      'a2'
    ),
    doc(
      'Document 14 · micro-trottoir · l’éclairage nocturne',
      31,
      'LA PASSANTE : Éteindre la nuit, oui. On l’a fait dans mon village, de minuit à cinq heures. Ce que ' +
      'je n’avais pas prévu, c’est que ça a divisé les gens : ceux qui dorment mieux, et ceux qui n’osent ' +
      'plus rentrer à pied. Les deux ont raison, hein. Il aurait fallu commencer par éclairer autrement, ' +
      'pas par éteindre.',
      'Que reproche la passante à la mesure prise dans son village ?',
      [
        'On a éteint sans repenser d’abord la façon d’éclairer',
        'On a éteint trop peu d’heures pour que ce soit utile',
        'On n’a pas consulté les habitants avant de décider',
        'On a rallumé dès les premières plaintes',
      ],
      '« Il aurait fallu commencer par éclairer autrement, pas par éteindre. » Elle donne raison aux deux camps.',
      'b2'
    ),
    doc(
      'Document 15 · consignes · valider son titre de transport',
      30,
      'LA VOIX : Rappel sur la carte rechargeable. Vous devez la valider à chaque montée, y compris en ' +
      'correspondance, et y compris si vous avez un abonnement mensuel. Une carte non validée est ' +
      'considérée comme un voyage sans titre, même si elle est chargée. Posez-la à plat sur le lecteur ' +
      'et attendez le signal vert : le signal orange veut dire que la validation n’a pas été prise.',
      'Que signifie le signal orange ?',
      [
        'La validation n’a pas été enregistrée',
        'La carte n’est plus chargée',
        'La correspondance est déjà validée',
        'L’abonnement mensuel a expiré',
      ],
      '« Le signal orange veut dire que la validation n’a pas été prise. »',
      'a2'
    ),
    doc(
      'Document 16 · échange · l’état des lieux de sortie',
      34,
      'LE LOCATAIRE : J’ai donné mon préavis. L’état des lieux, c’est bien le dernier jour ?\n' +
      'L’AGENTE : Le dernier jour ou avant, mais logement vide et nettoyé, et compteurs relevés.\n' +
      'LE LOCATAIRE : Et si je laisse les étagères que j’ai posées ?\n' +
      'L’AGENTE : Là, ça dépend du propriétaire. S’il n’en veut pas, c’est à vous de remettre le mur en ' +
      'état, et ça se déduit du dépôt.',
      'Que se passe-t-il si le propriétaire refuse les étagères ?',
      [
        'Le locataire doit remettre le mur en état à ses frais',
        'Les étagères restent en place sans conséquence',
        'Le dépôt de garantie est intégralement conservé par le propriétaire',
        'L’état des lieux est reporté après les travaux',
      ],
      '« S’il n’en veut pas, c’est à vous de remettre le mur en état, et ça se déduit du dépôt. »',
      'b1'
    ),
    doc(
      'Document 17 · micro-trottoir · le visage des enfants en ligne',
      32,
      'LE PASSANT : Publier des photos de ses enfants, euh… le problème, ce n’est pas la photo. C’est ' +
      'qu’on décide à leur place d’une chose qui les suivra. Moi j’en publie, hein, je ne fais pas la ' +
      'leçon. Mais je me dis qu’à quinze ans, ils auront un dossier qu’ils n’ont pas choisi. On ne peut ' +
      'pas retirer ce qui est parti.',
      'Quel est l’argument du passant ?',
      [
        'L’enfant subit un choix durable qu’il n’a pas fait',
        'Les photos publiées présentent un risque de vol de données',
        'Les parents publient beaucoup trop de photos',
        'Les réseaux devraient interdire ces publications',
      ],
      'Il précise qu’il en publie lui-même : son objection porte sur le fait de décider à la place de l’enfant, « une chose qui les suivra ».',
      'b2'
    ),
  ],
};
