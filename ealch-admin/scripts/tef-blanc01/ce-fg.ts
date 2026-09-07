// TEF Canada blanc-01 — Compréhension écrite, blocks F and G.
//
// KEY ORDER. Authored key-first for review; scatterKeys() places it.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, FORMAT_VERSION, VARIANT, NOTES_CLOSED, taskId, ITEMS, uniq } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  taskType: 'ce_mcq' as const,
  skill: 'CE' as const,
  formatVersion: FORMAT_VERSION,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ Block F — Documents administratifs et professionnels ════════════════ */
//
// Ten items on two documents. This is where TEF's adult-working-life character
// lives, and where the corpus themes `immigration-et-citoyennete`, `droit` and
// `appareils` earn their keep.
//
// THE EXCEPTION CLAUSE IS THE ITEM. Both documents state a rule and then
// qualify it, and the candidate who reads the rule and stops picks the
// distractor: the late application that is still admissible but loses the work
// permit (F2), the free collection that applies only above thirty kilos (F7),
// the replacement appliance that must be asked for (F8).
//
// One negative stem in the block, typographically marked (F9), per the
// standard's limit of one per block.
//
// SELF-VERIFY (F1-F10): every key is stated or follows from a single stated
// condition. Cover test passed — none of these can be answered from general
// knowledge of how administrations work, because each turns on this document's
// own threshold. Register is real administrative French: `le cas échéant`,
// `sous réserve que`, `il convient de`, `sont réputées reçues`. Genders:
// récépissé m, convocation f, instruction f, garantie f, main-d’œuvre f,
// usure f, facture f, enlèvement m.

export const CE_F: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '005'),
  level: 'b2',
  label: 'Section F',
  prompt: 'Lisez les deux documents et répondez aux questions.',
  timingS: 900,
  targetItemIds: uniq(ITEMS.immigration, ITEMS.droit, ITEMS.appareils, ITEMS.courses),
  parts: [
    {
      label: 'Document 1 · notice de renouvellement d’un titre de séjour',
      text:
        'RENOUVELLEMENT DU TITRE DE SÉJOUR · notice à l’usage des demandeurs\n\n' +
        'La demande de renouvellement se dépose au plus tôt quatre mois et au plus tard deux mois avant ' +
        'l’expiration du titre. Toute demande déposée hors de ces délais reste recevable, mais elle n’ouvre pas ' +
        'droit au récépissé qui autorise à travailler pendant l’instruction.\n\n' +
        'Le dossier comprend le formulaire signé, une pièce d’identité en cours de validité, un justificatif de ' +
        'domicile de moins de six mois et trois photographies conformes. Les justificatifs de ressources ne sont ' +
        'exigés que pour les titres portant la mention « salarié » ou « entrepreneur ».\n\n' +
        'Le dépôt s’effectue en ligne. Le cas échéant, une convocation au guichet est adressée par courriel ; ' +
        'l’absence à ce rendez-vous, sauf motif légitime signalé sous quarante-huit heures, entraîne le classement ' +
        'du dossier.\n\n' +
        'Le récépissé est délivré dans un délai de trois semaines. Il vaut autorisation de séjour et, sous réserve ' +
        'que le titre précédent le prévoyait, autorisation de travail. Il ne permet pas de voyager hors du territoire.\n\n' +
        'En cas de changement d’adresse pendant l’instruction, il convient de le signaler sans délai : les ' +
        'convocations envoyées à l’ancienne adresse sont réputées reçues.',
      items: [
        {
          q: 'Quand la demande doit-elle être déposée ?',
          opts: [
            'Entre quatre et deux mois avant l’expiration',
            'Au plus tard quatre mois avant l’expiration',
            'Dans les deux mois qui suivent l’expiration',
            'À n’importe quel moment de l’année',
          ],
          correct: 0,
          why: '« Au plus tôt quatre mois et au plus tard deux mois avant l’expiration. »',
          band: 'b1',
        },
        {
          q: 'Que perd un demandeur qui dépose sa demande hors délai ?',
          opts: [
            'Le droit de travailler pendant l’instruction',
            'Le droit de déposer une demande',
            'Le remboursement des frais de dossier',
            'La possibilité d’être convoqué au guichet',
          ],
          correct: 0,
          why: 'La demande reste recevable, mais elle « n’ouvre pas droit au récépissé qui autorise à travailler ».',
          band: 'b2',
        },
        {
          q: 'Qui doit fournir des justificatifs de ressources ?',
          opts: [
            'Les titulaires d’un titre « salarié » ou « entrepreneur »',
            'Tous les demandeurs, sans exception',
            'Les demandeurs sans justificatif de domicile',
            'Personne : ils ne sont jamais demandés',
          ],
          correct: 0,
          why: '« Ne sont exigés que pour les titres portant la mention “salarié” ou “entrepreneur”. »',
          band: 'b1',
        },
        {
          q: 'Que se passe-t-il si le demandeur ne vient pas à la convocation ?',
          opts: [
            'Le dossier est classé, sauf motif légitime signalé à temps',
            'Une nouvelle convocation lui est envoyée automatiquement',
            'Le récépissé lui est délivré malgré son absence',
            'Le délai d’instruction est prolongé de trois semaines',
          ],
          correct: 0,
          why: '« L’absence à ce rendez-vous, sauf motif légitime signalé sous quarante-huit heures, entraîne le classement du dossier. »',
          band: 'b2',
        },
        {
          q: 'Que doit faire le demandeur qui déménage pendant l’instruction ?',
          opts: [
            'Le signaler immédiatement',
            'Attendre la fin de l’instruction',
            'Déposer une nouvelle demande',
            'Faire suivre son courrier',
          ],
          correct: 0,
          why: '« Il convient de le signaler sans délai » : les convocations envoyées à l’ancienne adresse sont réputées reçues.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 2 · conditions de garantie',
      text:
        'CONDITIONS DE GARANTIE · appareils de gros électroménager\n\n' +
        'La garantie commerciale court deux ans à compter de la date figurant sur le ticket de caisse, ' +
        'et non de la date de livraison. Elle couvre les pièces et la main-d’œuvre.\n\n' +
        'Sont exclus de la garantie : l’usure normale des joints et des filtres, les dommages causés par un ' +
        'branchement non conforme, et toute panne survenue après une intervention réalisée par un tiers non agréé.\n\n' +
        'La prise en charge s’effectue en atelier. Le transport est à la charge du client, sauf pour les appareils ' +
        'de plus de trente kilogrammes, pour lesquels un enlèvement à domicile est organisé sans frais.\n\n' +
        'En cas d’immobilisation supérieure à quinze jours, un appareil de remplacement est mis à disposition. ' +
        'Cette mise à disposition n’est pas automatique : elle doit être sollicitée auprès du service après-vente.\n\n' +
        'La garantie commerciale ne se substitue pas à la garantie légale de conformité, qui s’applique ' +
        'indépendamment et dont le client conserve le bénéfice.\n\n' +
        'Toute demande est accompagnée du ticket de caisse ou de la facture. Une copie est acceptée, ' +
        'à condition que le numéro de série y figure.',
      items: [
        {
          q: 'À partir de quelle date la garantie commence-t-elle ?',
          opts: [
            'De la date du ticket de caisse',
            'De la date de livraison',
            'De la date d’installation',
            'De la date de la première panne',
          ],
          correct: 0,
          why: '« À compter de la date figurant sur le ticket de caisse, et non de la date de livraison. »',
          band: 'b1',
        },
        {
          q: 'Dans quel cas le transport est-il gratuit ?',
          opts: [
            'Si l’appareil pèse plus de trente kilogrammes',
            'Dans tous les cas prévus par la garantie',
            'Si la panne est couverte par la garantie',
            'Si l’appareil est immobilisé plus de quinze jours',
          ],
          correct: 0,
          why: 'Le transport est à la charge du client, « sauf pour les appareils de plus de trente kilogrammes ».',
          band: 'b2',
        },
        {
          q: 'Comment obtient-on un appareil de remplacement ?',
          opts: [
            'En le demandant au service après-vente',
            'Il est fourni automatiquement après quinze jours',
            'En rapportant l’appareil en atelier',
            'En invoquant la garantie légale de conformité',
          ],
          correct: 0,
          why: '« Cette mise à disposition n’est pas automatique : elle doit être sollicitée. »',
          band: 'b2',
        },
        {
          q: 'Quel cas n’est PAS couvert par la garantie ?',
          opts: [
            'Une panne survenue après une réparation non agréée',
            'Une panne de moteur pendant la première année',
            'Un défaut de pièce nécessitant de la main-d’œuvre',
            'Une immobilisation de plus de quinze jours',
          ],
          correct: 0,
          why: 'La liste des exclusions vise « toute panne survenue après une intervention réalisée par un tiers non agréé ».',
          band: 'b2',
        },
        {
          q: 'Que faut-il joindre à une demande de prise en charge ?',
          opts: [
            'Le ticket de caisse ou la facture',
            'L’original du ticket, obligatoirement',
            'Le numéro de série seul',
            'Une attestation du service après-vente',
          ],
          correct: 0,
          why: 'Le ticket ou la facture, et « une copie est acceptée, à condition que le numéro de série y figure ».',
          band: 'b1',
        },
      ],
    },
  ],
};

/* ═══ Block G — Article de presse ═════════════════════════════════════════ */
//
// The top of the paper. The article has a POSITION and carries it by structure
// rather than announcing it: `Certes … Mais` in the second paragraph, then a
// full concession-and-limit move in the fifth (`On objectera que … L’objection
// est juste … Elle ne suffit pourtant pas`). That structure is what makes the
// two S6 items possible — a candidate can be asked what a paragraph is DOING.
//
// SELF-VERIFY (G1-G8): the survey and its figures are invented and attributed
// to an invented source, never presented as established fact. G1's second
// option is true of the article's own concession (beyond an hour, duration
// weighs) and is false only on scope, which is what makes it a D4 rather than
// a free elimination. G7 was rewritten once: the first version asked whether
// the author "agreed with" the survey, and both the defence and the concession
// were defensible answers — F1. It now asks for the combination, which only
// one option gives. Genders: enquête f, agglomération f, satisfaction f,
// fourchette f, marge f, ponctualité f.

export const CE_G: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '006'),
  level: 'c1',
  label: 'Section G',
  prompt: 'Lisez l’article et répondez aux questions.',
  timingS: 780,
  targetItemIds: uniq(ITEMS.transports, ITEMS.bureau, ITEMS.collegues, ITEMS.laVille),
  parts: [
    {
      label: 'Article · le trajet n’est pas le problème',
      text:
        'LE TRAJET N’EST PAS LE PROBLÈME\n\n' +
        'Une enquête de l’Institut Verlune, menée auprès de quatre mille salariés de six agglomérations, ' +
        'remet en cause une évidence : la durée du trajet domicile-travail expliquerait mal la satisfaction ' +
        'des salariés. Les auteurs ont comparé des trajets de durée identique et trouvé des écarts considérables. ' +
        'À quarante minutes, les uns déclarent leur trajet « supportable », les autres « épuisant ».\n\n' +
        'Certes, au-delà d’une heure, la durée finit par peser sur tout le monde. Personne ne prétend le contraire, ' +
        'et les auteurs le rappellent eux-mêmes. Mais entre vingt et soixante minutes, fourchette dans laquelle ' +
        'se situe la grande majorité des salariés, deux facteurs pèsent davantage que le chronomètre.\n\n' +
        'Le premier est la régularité. Un trajet de cinquante minutes qui dure toujours cinquante minutes est mieux ' +
        'vécu qu’un trajet de trente-cinq minutes qui, une fois par semaine, en dure soixante-dix. L’incertitude ' +
        'coûte plus cher que la durée : elle oblige à prévoir une marge, et la marge est du temps perdu même ' +
        'lorsqu’elle ne sert pas.\n\n' +
        'Le second est ce que l’enquête appelle la disponibilité du trajet. Un trajet pendant lequel on peut lire, ' +
        'écouter, dormir ou téléphoner cesse d’être un temps mort. Les salariés qui décrivent leur trajet comme ' +
        'un moment à eux sont, à durée égale, nettement plus satisfaits que ceux qui conduisent.\n\n' +
        'On objectera que la conclusion arrange les employeurs : si le problème n’est pas la durée, il n’y a plus ' +
        'à financer de rapprochement entre domicile et travail. L’objection est juste et il faut la prendre au ' +
        'sérieux. Elle ne suffit pourtant pas à écarter les résultats, car ceux-ci ne disent pas que la durée est ' +
        'indifférente. Ils disent qu’à durée égale, la fiabilité et l’usage du temps font la différence, ' +
        'ce qui est une information et non une excuse.\n\n' +
        'Reste que les politiques publiques continuent de se fixer sur la seule minute gagnée. On finance une voie ' +
        'rapide qui fait gagner huit minutes ; on ne finance pas la ponctualité d’une ligne qui en fait perdre ' +
        'trente une fois sur cinq. L’enquête ne dit pas où mettre l’argent. Elle dit où l’on a cessé de regarder.',
      items: [
        {
          q: 'Quelle est l’idée principale de l’article ?',
          opts: [
            'À durée égale, la régularité et l’usage du trajet comptent davantage',
            'Les trajets longs nuisent au bien-être de tous les salariés',
            'Les salariés préfèrent les transports en commun à la voiture',
            'Les pouvoirs publics investissent trop dans les voies rapides',
          ],
          correct: 0,
          why: 'C’est la thèse annoncée dès le premier paragraphe et développée par les deux facteurs.',
          band: 'b2',
        },
        {
          q: 'Sur quelle comparaison l’enquête s’appuie-t-elle ?',
          opts: [
            'Des trajets de même durée jugés très différemment',
            'Des trajets de durées très différentes',
            'Des salariés de six agglomérations comparés entre eux',
            'Des trajets de plus d’une heure comparés aux autres',
          ],
          correct: 0,
          why: '« Les auteurs ont comparé des trajets de durée identique et trouvé des écarts considérables. »',
          band: 'b2',
        },
        {
          q: 'Que dit l’article des trajets de plus d’une heure ?',
          opts: [
            'La durée finit alors par peser sur tout le monde',
            'Ils concernent la majorité des salariés interrogés',
            'Ils sont mieux vécus quand on peut y lire',
            'Ils ne figurent pas dans l’enquête',
          ],
          correct: 0,
          why: '« Certes, au-delà d’une heure, la durée finit par peser sur tout le monde. » La majorité se situe entre vingt et soixante minutes.',
          band: 'b2',
        },
        {
          q: 'Pourquoi l’incertitude coûte-t-elle plus cher que la durée ?',
          opts: [
            'Parce qu’elle oblige à prévoir une marge souvent inutile',
            'Parce qu’elle allonge la durée moyenne du trajet',
            'Parce qu’elle empêche de lire ou de dormir',
            'Parce qu’elle touche surtout les automobilistes',
          ],
          correct: 0,
          why: '« La marge est du temps perdu même lorsqu’elle ne sert pas. »',
          band: 'c1',
        },
        {
          q: 'Qu’est-ce qui distingue les salariés les plus satisfaits, à durée égale ?',
          opts: [
            'Ils peuvent occuper leur trajet autrement qu’à conduire',
            'Ils habitent plus près de leur lieu de travail',
            'Ils partent plus tôt le matin',
            'Ils empruntent une voie rapide',
          ],
          correct: 0,
          why: 'Le trajet « cesse d’être un temps mort » quand on peut y lire, écouter, dormir ou téléphoner.',
          band: 'b2',
        },
        {
          q: 'Que fait l’auteur dans le paragraphe qui commence par « On objectera que… » ?',
          opts: [
            'Il présente une objection, l’accepte en partie, puis la limite',
            'Il réfute une objection sans la reprendre à son compte',
            'Il abandonne sa position devant l’objection',
            'Il illustre son propos par un exemple concret',
          ],
          correct: 0,
          why: '« L’objection est juste » (acceptation), « elle ne suffit pourtant pas » (limitation).',
          band: 'c1',
        },
        {
          q: 'Quel regard l’auteur porte-t-il sur l’enquête ?',
          opts: [
            'Il la défend, tout en reconnaissant l’usage qu’on peut en faire',
            'Il en conteste la méthode et les chiffres',
            'Il la reprend sans y apporter la moindre réserve',
            'Il y voit surtout une excuse offerte aux employeurs',
          ],
          correct: 0,
          why: 'Il en tire la thèse de l’article, prend l’objection au sérieux, puis conclut que les résultats sont « une information et non une excuse ».',
          band: 'c1',
        },
        {
          q: 'Que reproche l’auteur aux politiques publiques ?',
          opts: [
            'De ne mesurer que les minutes gagnées',
            'De financer trop peu de voies rapides',
            'De se désintéresser du temps de trajet',
            'De suivre trop vite les conclusions de l’enquête',
          ],
          correct: 0,
          why: '« On finance une voie rapide qui fait gagner huit minutes ; on ne finance pas la ponctualité. »',
          band: 'c1',
        },
      ],
    },
  ],
};
