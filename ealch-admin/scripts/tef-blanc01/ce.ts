// TEF Canada blanc-01 — Compréhension écrite. 40 questions, 60 minutes.
//
//   A   7 · documents de la vie quotidienne · 7 documents, 1 question each
//   B   6 · phrases lacunaires              · 1 sentence, 1 gap, no context
//   C   4 · textes lacunaires               · 2 texts, 2 gaps each
//   D+E 5 · lecture rapide                  · 3 text matching, 2 graphic
//   F  10 · documents administratifs        · (ce-fg.ts)
//   G   8 · articles de presse              · (ce-fg.ts)
//
// KEY ORDER. Authored key-first for review; scatterKeys() places it. See
// finalise.ts.
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

/* ═══ Block A — Documents de la vie quotidienne ═══════════════════════════ */
//
// Seven documents, 15–50 words, one question each. Each must LOOK like the
// thing it is: the small ad has abbreviations and no verbs, the service note
// has a date and an imperative, the poster has a headline in capitals. The
// part label names the shape so the runner can draw it.
//
// SELF-VERIFY (A1-A7): every key is retrievable from its own document and
// from no other. Cover test passed — without the document, all four options in
// each item are ordinary facts about that kind of notice. Genders checked:
// colocation f, charge f, annonce f, période f, affiche f, séance f,
// convocation f, assemblée f, permanence f, esplanade f.

export const CE_A: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '001'),
  level: 'a2',
  label: 'Section A',
  prompt: 'Lisez les sept documents suivants et répondez à la question posée pour chacun.',
  timingS: 600,
  targetItemIds: uniq(ITEMS.maison, ITEMS.emploi, ITEMS.sante, ITEMS.bureau, ITEMS.communaute),
  parts: [
    {
      label: 'Document 1 · petite annonce',
      text:
        'COLOC · 2 chambres libres au 1er septembre. 78 m², proche gare de Sainte-Ambre.\n' +
        '420 € par mois, charges comprises (eau, chauffage, internet).\n' +
        'Dépôt de garantie : 1 mois. Non-fumeur. Visites le samedi, sur rendez-vous.',
      items: [
        {
          q: 'Que comprend le loyer de 420 € ?',
          opts: [
            'L’eau, le chauffage et internet',
            'L’eau et le dépôt de garantie',
            'Le chauffage et rien d’autre',
            'Rien : les charges sont en plus',
          ],
          correct: 0,
          why: '« Charges comprises (eau, chauffage, internet) ». Le dépôt de garantie est une somme à part.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 2 · offre d’emploi',
      text:
        'Le magasin Pralet recherche un préparateur ou une préparatrice de commandes.\n' +
        'CDI, 35 heures. Travail du mardi au samedi.\n' +
        'Télétravail un jour par semaine à l’issue de la période d’essai de deux mois.\n' +
        'Débutant accepté, formation assurée.',
      items: [
        {
          q: 'Quand le télétravail devient-il possible ?',
          opts: [
            'Au bout de deux mois',
            'Dès le premier jour de travail',
            'Au bout d’une année complète',
            'Le samedi seulement, chaque semaine',
          ],
          correct: 0,
          why: '« À l’issue de la période d’essai de deux mois ».',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 3 · affichette de pharmacie',
      text:
        'VACCINATION · sans rendez-vous\n' +
        'Du lundi au vendredi, 10 h – 12 h et 15 h – 18 h.\n' +
        'Apportez votre carte, et votre bon de prise en charge si vous en avez un.\n' +
        'Durée : dix minutes.',
      items: [
        {
          q: 'Que faut-il faire pour se faire vacciner ici ?',
          opts: [
            'Se présenter pendant les heures indiquées',
            'Prendre rendez-vous à l’avance',
            'Apporter obligatoirement un bon de prise en charge',
            'Prévoir environ une heure sur place',
          ],
          correct: 0,
          why: 'C’est « sans rendez-vous ». Le bon n’est demandé que « si vous en avez un », et la durée annoncée est de dix minutes.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 4 · note de service',
      text:
        'NOTE DE SERVICE\n' +
        'À compter du lundi 6, l’accueil ferme à 16 h 30 au lieu de 17 h 30.\n' +
        'Les demandes déposées après 16 h seront traitées le lendemain.\n' +
        'Le standard téléphonique reste ouvert jusqu’à 18 h.',
      items: [
        {
          q: 'Que devient une demande déposée à 16 h 45 ?',
          opts: [
            'Elle sera traitée le jour suivant',
            'Elle sera traitée avant la fermeture',
            'Elle devra être reformulée par téléphone',
            'Elle ne sera pas acceptée',
          ],
          correct: 0,
          why: '16 h 45 est après 16 h, donc la demande passe au lendemain. Le standard reste joignable, mais rien n’oblige à repasser par lui.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 5 · affiche d’association',
      text:
        'ATELIER POTERIE · débutants\n' +
        'Huit séances, le samedi de 10 h à 12 h, à partir du 14 mars.\n' +
        'Petit groupe. Matériel fourni.\n' +
        'Renseignements à la maison de quartier.',
      items: [
        {
          q: 'Quel est le but de cette affiche ?',
          opts: [
            'Faire connaître un atelier ouvert aux débutants',
            'Recruter un animateur pour l’atelier',
            'Annoncer une exposition de poteries',
            'Rappeler aux inscrits d’apporter leur matériel',
          ],
          correct: 0,
          why: 'L’affiche présente l’atelier, ses dates et son public. Le matériel est fourni, pas à apporter.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 6 · convocation',
      text:
        'CONVOCATION\n' +
        'Assemblée générale des copropriétaires, jeudi 12 à 19 h, salle Verlune.\n' +
        'Ordre du jour : devis de ravalement, choix de l’entreprise, calendrier des travaux.\n' +
        'En cas d’absence, remettez votre pouvoir avant le 10.',
      items: [
        {
          q: 'Que doit faire un copropriétaire qui ne peut pas venir ?',
          opts: [
            'Remettre un pouvoir avant le 10',
            'Prévenir la salle Verlune',
            'Voter par courrier le jour même',
            'Demander le report de l’assemblée',
          ],
          correct: 0,
          why: 'La dernière ligne le dit : le pouvoir doit être remis avant le 10.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 7 · avis de réunion publique',
      text:
        'RÉUNION PUBLIQUE · projet de tramway, ligne T2\n' +
        'Mercredi 19, 18 h 30, salle des fêtes.\n' +
        'Présentation du tracé, puis questions de la salle.\n' +
        'Le registre de concertation reste ouvert en mairie jusqu’au 30.',
      items: [
        {
          q: 'À quoi sert cette réunion ?',
          opts: [
            'À présenter le projet et à recueillir les questions',
            'À voter le tracé définitif du tramway',
            'À inscrire les habitants sur un registre',
            'À annoncer le début des travaux',
          ],
          correct: 0,
          why: '« Présentation du tracé, puis questions de la salle. » Le registre existe, mais il est en mairie et sert à autre chose.',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ Block B — Phrases lacunaires ════════════════════════════════════════ */
//
// One standalone sentence, one gap, no context beyond the sentence. That is
// exactly what separates B from C: if the candidate has to imagine a context,
// the item belongs in block C.
//
// Split 3 grammar (S7) / 3 collocation (S8), per the standard. Every option
// set is one part of speech and every option is grammatically possible in
// isolation — only one is right HERE.
//
// Grammar targets are drawn from what the corpus already teaches:
// prepositions-essentielles (B1), pronoms-essentiels (B2), recits-au-passe
// and the futur after `dès que` (B3).
//
// SELF-VERIFY (B1-B6): each gap is resolvable from its own sentence alone —
// checked by covering everything else. No option is eliminable on grammar
// alone (F6). Word counts identical within each set, so no giveaway by length.

export const CE_B: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '002'),
  level: 'b1',
  label: 'Section B',
  prompt: 'Complétez chaque phrase avec la proposition qui convient.',
  timingS: 420,
  targetItemIds: [
    'fr.a2.bureau.001', 'fr.a2.bureau.002', 'fr.a2.collegues.001',
    'fr.a1.maison.001', 'fr.a2.courses.001', 'fr.b1.droit.020',
  ],
  items: [
    {
      q: 'Nous avons renoncé ___ ce projet, faute de budget.',
      opts: ['à', 'de', 'sur', 'pour'],
      correct: 0,
      why: 'Renoncer se construit avec « à » : renoncer à quelque chose.',
      band: 'a2',
    },
    {
      q: 'C’est le collègue ___ je vous ai parlé hier.',
      opts: ['dont', 'que', 'qui', 'lequel'],
      correct: 0,
      why: 'On parle DE quelqu’un, et « de + relatif » donne « dont ».',
      band: 'b1',
    },
    {
      q: 'Nous vous appellerons dès que votre commande ___ arrivée.',
      opts: ['sera', 'soit', 'est', 'serait'],
      correct: 0,
      why: 'Après « dès que », le français emploie le futur quand la principale est au futur.',
      band: 'b1',
    },
    {
      q: 'Il a ___ une décision difficile.',
      opts: ['pris', 'fait', 'donné', 'mis'],
      correct: 0,
      why: 'On prend une décision. Les trois autres verbes se construisent avec d’autres noms.',
      band: 'a2',
    },
    {
      q: 'Le locataire doit ___ un préavis de trois mois.',
      opts: ['respecter', 'obéir', 'suivre', 'garder'],
      correct: 0,
      why: 'On respecte un préavis. « Obéir » demande « à », et les deux autres ne se disent pas d’un préavis.',
      band: 'b1',
    },
    {
      q: 'Cette clause ___ en cas de retard de livraison.',
      opts: ['s’applique', 'se produit', 'se déroule', 'se présente'],
      correct: 0,
      why: 'Une clause s’applique. Les trois autres verbes se disent d’un événement, pas d’une règle.',
      band: 'b2',
    },
  ],
};

/* ═══ Block C — Textes lacunaires ═════════════════════════════════════════ */
//
// Two short texts, two gaps each, and the whole point of the block: the gap
// must be resolvable ONLY from beyond its own sentence. Each connector below
// is chosen by the relation between the sentence before it and the sentence
// after it, and the sentence carrying the gap settles nothing on its own.
//
// This block carries no topic tag, on purpose (TOPICS §coverage): gap-fill
// tests cohesion, not content, so the texts are written to the connector.
//
// SELF-VERIFY (C1-C4): for each gap, the sentence containing it was read in
// isolation and every option remained defensible — that is the test that it
// belongs in C and not in B. Options are all connectors of the same rank.

export const CE_C: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '003'),
  level: 'b2',
  label: 'Section C',
  prompt: 'Lisez les deux textes et choisissez, pour chaque espace, le mot ou l’expression qui convient.',
  timingS: 420,
  targetItemIds: ['fr.b1.droit.021', 'fr.b1.musees.001', 'fr.a2.bureau.003', 'fr.a2.collegues.002'],
  parts: [
    {
      label: 'Texte 1 · la médiathèque de Corbeny',
      text:
        'La médiathèque de Corbeny a ouvert le dimanche pendant six mois, à titre d’essai. ' +
        'La fréquentation du week-end a doublé. ___ (1), le budget n’a pas suivi : deux postes ont dû être ' +
        'redéployés depuis la semaine, et les ateliers du mercredi ont été réduits. ' +
        'Le conseil municipal doit trancher en juin. ___ (2), il faudra choisir entre l’ouverture dominicale ' +
        'et le maintien des activités pour les enfants, car les deux ne tiennent pas dans la même enveloppe.',
      items: [
        {
          q: 'Espace (1)',
          opts: ['Toutefois', 'Ainsi', 'En effet', 'Par exemple'],
          correct: 0,
          why: 'La phrase précédente annonce un succès, la suivante un problème. C’est une opposition.',
          band: 'b1',
        },
        {
          q: 'Espace (2)',
          opts: ['Autrement dit', 'Au contraire', 'Pourtant', 'D’ailleurs'],
          correct: 0,
          why: 'Ce qui suit reformule la décision annoncée juste avant, en la ramenant à un choix entre deux options.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Texte 2 · les salles de visioconférence',
      text:
        'Beaucoup d’entreprises ont équipé leurs salles de réunion pour la visioconférence. ' +
        '___ (3), les salariés continuent de se déplacer pour des réunions qui pourraient se tenir à distance. ' +
        'L’explication n’est pas technique. Une réunion en présence sert aussi à être vu, à croiser les gens ' +
        'dans le couloir, à régler en trois minutes ce qui prendrait trois courriels. ' +
        '___ (4), tant que la présence restera un signe d’engagement, le meilleur équipement ne changera rien ' +
        'aux habitudes.',
      items: [
        {
          q: 'Espace (3)',
          opts: ['Pourtant', 'Donc', 'Par ailleurs', 'C’est-à-dire'],
          correct: 0,
          why: 'Les salles sont équipées et pourtant on se déplace quand même : le lien est une opposition.',
          band: 'b1',
        },
        {
          q: 'Espace (4)',
          opts: ['Par conséquent', 'En revanche', 'Par exemple', 'Cependant'],
          correct: 0,
          why: 'La dernière phrase tire la conséquence de l’explication qui précède.',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ Blocks D and E — Lecture rapide ═════════════════════════════════════ */
//
// Five items: three text matching, two graphic reading. Speed, not depth —
// every question must be answerable in under a minute.
//
// For the matching set, all four listings are plausible answers to the stated
// need and differ on ONE decisive criterion: weather-proofing plus price for
// Q1, the hour for Q2, the hour again but at the other end for Q3.
//
// SELF-VERIFY (D1-D3): each need was tested against all four listings in turn.
// Q1 — A is cancelled if it rains, C is outdoors, D costs 4 €, so only B is
// both free and covered. Q2 — D is the only séance before nightfall. Q3 — C is
// the latest, unambiguously. No need has a second defensible answer.
// SELF-VERIFY (E1-E2): the graphic's values are invented and belong to the
// document itself, not presented as a real statistic. The largest single fall
// (13) is offered as a distractor to the total (24), which is the D4.

export const CE_DE: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '004'),
  level: 'b1',
  label: 'Sections D et E',
  prompt: 'Lisez rapidement les documents et répondez aux questions.',
  timingS: 480,
  targetItemIds: uniq(ITEMS.ecologie, ITEMS.laVille, ITEMS.transports),
  parts: [
    {
      label: 'Section D · programme du festival en plein air',
      text:
        'A · Jeudi, film d’ouverture, 21 h 15, parc Verlune. Entrée 6 €. Pas de sièges : prévoir de rester debout. ' +
        'Séance annulée en cas de pluie.\n\n' +
        'B · Vendredi, comédie, 21 h 30, cour de l’école. Entrée libre. 120 places assises sous le préau. ' +
        'Ouverture des portes à 20 h 45.\n\n' +
        'C · Samedi, documentaire, 22 h, esplanade. Entrée 4 €, gratuit pour les moins de douze ans. ' +
        'Apportez votre siège pliant.\n\n' +
        'D · Dimanche, film jeune public, 18 h, salle des fêtes. Entrée 4 €. 200 places. Réservation conseillée.',
      items: [
        {
          q: 'Vous voulez une séance qui aura lieu même s’il pleut, et vous ne voulez pas payer. Laquelle choisissez-vous ?',
          opts: ['La séance B', 'La séance A', 'La séance C', 'La séance D'],
          correct: 0,
          why: 'B est la seule à la fois gratuite et à l’abri. A est annulée en cas de pluie, C est en plein air, D est payante.',
          band: 'a2',
        },
        {
          q: 'Vous venez avec un enfant de huit ans qui doit se coucher tôt. Laquelle choisissez-vous ?',
          opts: ['La séance D', 'La séance A', 'La séance B', 'La séance C'],
          correct: 0,
          why: 'D commence à 18 h ; les trois autres commencent après 21 h.',
          band: 'a2',
        },
        {
          q: 'Quelle est la séance la plus tardive ?',
          opts: ['La séance C', 'La séance A', 'La séance B', 'La séance D'],
          correct: 0,
          why: 'C commence à 22 h, contre 21 h 30 pour B, 21 h 15 pour A et 18 h pour D.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Section E · graphique de consommation d’eau',
      imageRef: 'img/exam/tef/blanc-01/ce-e-01.png',
      imageAlt:
        'Graphique en barres, cinq barres verticales, une par année. Axe vertical : mètres cubes par ménage et par an. ' +
        '2021 : 148. 2022 : 141. 2023 : 139. 2024 : 126. 2025 : 124. ' +
        'Une note sous le graphique indique qu’une nouvelle tarification est entrée en vigueur en 2024.',
      text:
        'Consommation d’eau moyenne par ménage, en mètres cubes par an (commune de Corbeny) :\n' +
        '2021 : 148 · 2022 : 141 · 2023 : 139 · 2024 : 126 · 2025 : 124.\n' +
        'Une nouvelle tarification est entrée en vigueur en 2024.',
      items: [
        {
          q: 'Entre quelles années la baisse est-elle la plus forte ?',
          opts: ['Entre 2023 et 2024', 'Entre 2021 et 2022', 'Entre 2022 et 2023', 'Entre 2024 et 2025'],
          correct: 0,
          why: '13 m³ de baisse, contre 7, 2 et 2 pour les autres intervalles.',
          band: 'b1',
        },
        {
          q: 'De combien la consommation a-t-elle baissé entre 2021 et 2025 ?',
          opts: ['De 24 m³', 'De 13 m³', 'De 124 m³', 'De 148 m³'],
          correct: 0,
          why: '148 moins 124. 13 m³ est la plus forte baisse d’une année sur l’autre, pas le total.',
          band: 'b1',
        },
      ],
    },
  ],
};
