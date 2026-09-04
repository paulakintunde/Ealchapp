// TCF Canada blanc-02 — Compréhension écrite, the lower slope (A1, A2, B1).
//
// Same shape as CO: one task per band, so a miss routes to material at the band
// it happened. The upper slope is in ce-hi.ts and MUST follow this file in the
// array — order is the instrument here.
//
// ── Reading is not listening with the sound off ────────────────────────────
//
// A CE document is present the whole time, so nothing can be tested by memory
// and every question has to be answerable from the text as it sits there. That
// removes the commonest listening trap (a fact said once and passed over) and
// puts the weight on where in the document the answer is, and whether a
// plausible sentence nearby says something slightly different.
//
// ── Length is exact here, not predicted ────────────────────────────────────
//
// STANDARD-tcf §4 gives a word count per band, so unlike a listening document
// there is no delivery to argue about: a reading document fails for being too
// long as well as too short. `lengthShortfalls` checks both directions.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId, uniq, ITEMS } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  taskType: 'ce_mcq' as const,
  skill: 'CE' as const,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ A1 — positions 1 to 3 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: each document is a real object a beginner meets — an opening
// notice, a text message, a care label — and the answer is one retrievable
// line. No distractor appears in the text. Document 1 is the one to watch:
// eighteen hundred hours IS printed on it, so the closing time cannot be an
// option, and the three wrong answers are hours that appear nowhere.

export const CE_A1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '001'),
  level: 'a1',
  label: 'Compréhension écrite · A1',
  prompt: 'Lisez les trois documents et choisissez la bonne réponse.',
  timingS: 170,
  targetItemIds: uniq(ITEMS.heureEtDate.a1, ITEMS.salutations.a1, ITEMS.marche.a1),
  parts: [
    {
      label: 'Document 1 · une affiche',
      text:
        'BIBLIOTHÈQUE MUNICIPALE\n' +
        'Ouverture : du mardi au samedi, à partir de dix heures.\n' +
        'Fermeture à dix-huit heures.\n' +
        'Fermée le dimanche et le lundi.',
      items: [
        {
          q: 'À quelle heure la bibliothèque ouvre-t-elle ?',
          opts: ['À dix heures', 'À neuf heures', 'À onze heures', 'À midi'],
          correct: 0,
          why: 'L’affiche indique une ouverture à partir de dix heures.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 2 · un message',
      text:
        'Salut maman,\n' +
        'Je suis bien arrivé. Le train avait vingt minutes de retard mais tout va bien.\n' +
        'Je t’appelle demain matin.\n' +
        'Bises, Théo',
      items: [
        {
          q: 'Pourquoi Théo écrit-il ce message ?',
          opts: [
            'Pour dire qu’il est bien arrivé',
            'Pour demander de l’argent',
            'Pour annoncer une visite',
            'Pour souhaiter un anniversaire',
          ],
          correct: 0,
          why: '« Je suis bien arrivé » est la raison du message.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 3 · une étiquette',
      text:
        'CENT POUR CENT COTON\n' +
        'Lavage en machine à trente degrés.\n' +
        'Ne pas utiliser d’eau de Javel.\n' +
        'Repassage doux.\n' +
        'Fabriqué à Vaubourg.',
      items: [
        {
          q: 'À quelle température faut-il laver ce vêtement ?',
          opts: ['À trente degrés', 'À quarante degrés', 'À soixante degrés', 'À vingt degrés'],
          correct: 0,
          why: 'L’étiquette indique un lavage en machine à trente degrés.',
          band: 'a1',
        },
      ],
    },
  ],
};

/* ═══ A2 — positions 4 to 9 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: one competing figure or condition per document, always present
// in the text — the candidate must read past it, not fail to find it. A second
// bin day, a second tariff, a second opening hour, a second set of screws.

export const CE_A2: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '002'),
  level: 'a2',
  label: 'Compréhension écrite · A2',
  prompt: 'Lisez les six documents et choisissez la bonne réponse.',
  timingS: 430,
  targetItemIds: uniq(
    ITEMS.voisinage.a2,
    ITEMS.internet.a2,
    ITEMS.communaute.a2,
    ITEMS.objets.a2,
    ITEMS.lesFetes.a2,
    ITEMS.maison.a2
  ),
  parts: [
    {
      label: 'Document 4 · un règlement d’immeuble',
      text:
        'RÈGLEMENT INTÉRIEUR · sortie des bacs\n' +
        'Les bacs jaunes sont sortis le mardi soir et rentrés le mercredi matin.\n' +
        'Les bacs gris sont sortis le vendredi soir.\n' +
        'Les encombrants sont ramassés le premier samedi du mois, sur inscription auprès du gardien.\n' +
        'Merci de ne rien déposer dans le hall, même pour quelques heures.',
      items: [
        {
          q: 'Quand faut-il sortir les bacs jaunes ?',
          opts: ['Le mardi soir', 'Le vendredi soir', 'Le mercredi matin', 'Le premier samedi du mois'],
          correct: 0,
          why: 'Le vendredi soir concerne les bacs gris ; le mercredi matin est la rentrée des bacs jaunes.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 5 · une offre de forfait',
      text:
        'FORFAIT MOBILE · deux formules\n' +
        'Formule Essentiel : cinq gigaoctets d’internet, appels illimités, neuf euros par mois.\n' +
        'Formule Confort : cinquante gigaoctets d’internet, appels illimités, quinze euros par mois.\n' +
        'Les deux formules comprennent les messages illimités.\n' +
        'Engagement de douze mois. Frais de mise en service : dix euros.',
      items: [
        {
          q: 'Qu’est-ce qui distingue les deux formules ?',
          opts: [
            'La quantité d’internet',
            'Le nombre d’appels',
            'Les messages',
            'La durée d’engagement',
          ],
          correct: 0,
          why: 'Appels et messages sont illimités dans les deux, et l’engagement est le même. Seul l’internet change.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 6 · un dépliant d’inscription',
      text:
        'INSCRIPTION À LA MÉDIATHÈQUE\n' +
        'L’inscription est gratuite pour les habitants de la commune.\n' +
        'Pour les autres, elle coûte quinze euros par an.\n' +
        'Apportez une pièce d’identité et un justificatif de domicile de moins de trois mois.\n' +
        'Le prêt est de six documents pour trois semaines, renouvelable une fois.',
      items: [
        {
          q: 'Combien paie un habitant de la commune ?',
          opts: ['Rien, l’inscription est gratuite', 'Quinze euros par an', 'Six euros par an', 'Trois euros par mois'],
          correct: 0,
          why: 'Les quinze euros concernent ceux qui n’habitent pas la commune.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 7 · un avis de retrait',
      text:
        'RETRAIT DE VOTRE COLIS\n' +
        'Votre colis est disponible au point relais du quatorze, rue Pralet.\n' +
        'Ouvert du lundi au samedi, de neuf heures à dix-neuf heures.\n' +
        'Présentez votre pièce d’identité et le code reçu par message.\n' +
        'Le colis est gardé pendant dix jours. Passé ce délai, il repart chez l’expéditeur.',
      items: [
        {
          q: 'Que faut-il présenter pour retirer le colis ?',
          opts: [
            'Une pièce d’identité et le code reçu',
            'Le code reçu seulement',
            'Un justificatif de domicile',
            'Le bon de commande',
          ],
          correct: 0,
          why: 'L’avis demande les deux : la pièce d’identité ET le code reçu par message.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 8 · une affiche de brocante',
      text:
        'GRANDE BROCANTE DE PRINTEMPS\n' +
        'Dimanche douze avril, de sept heures à dix-huit heures, place du Marché.\n' +
        'Installation des exposants à partir de six heures.\n' +
        'Entrée libre pour les visiteurs. Emplacement : huit euros les trois mètres.\n' +
        'Buvette et restauration sur place. En cas de pluie, la brocante est annulée.',
      items: [
        {
          q: 'À partir de quelle heure les visiteurs peuvent-ils venir ?',
          opts: ['Sept heures', 'Six heures', 'Huit heures', 'Midi'],
          correct: 0,
          why: 'Six heures est l’heure d’installation des exposants. La brocante ouvre aux visiteurs à sept heures.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 9 · une notice de montage',
      text:
        'MONTAGE DE L’ÉTAGÈRE\n' +
        'Étape un : assemblez les deux montants avec les vis courtes.\n' +
        'Étape deux : fixez les tablettes avec les vis longues.\n' +
        'Étape trois : accrochez l’ensemble au mur à l’aide des deux équerres.\n' +
        'Important : ne serrez complètement les vis qu’après avoir vérifié que l’étagère est droite.',
      items: [
        {
          q: 'Quand faut-il serrer complètement les vis ?',
          opts: [
            'Après avoir vérifié que l’étagère est droite',
            'Dès l’étape un',
            'Avant de fixer les tablettes',
            'Avant d’accrocher au mur',
          ],
          correct: 0,
          why: 'La consigne finale l’emporte sur l’ordre des étapes : le serrage vient après la vérification.',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ B1 — positions 10 to 19 ═════════════════════════════════════════════ */
//
// Seven documents, ten questions. The three that carry two ask for a fact AND
// for what the document is DOING with it, which is the B1 step: holding the
// content and the intention together.

export const CE_B1: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '003'),
  level: 'b1',
  label: 'Compréhension écrite · B1',
  prompt: 'Lisez les sept documents et choisissez la bonne réponse.',
  timingS: 850,
  targetItemIds: uniq(
    ITEMS.internet.b1,
    ITEMS.rechercheEmploi.b1,
    ITEMS.communaute.b1,
    ITEMS.musees.b1,
    ITEMS.collegues.b1,
    ITEMS.questionsSociales.b1
  ),
  parts: [
    {
      label: 'Document 10 · installer l’application',
      text:
        'PREMIÈRE CONNEXION\n' +
        'Téléchargez l’application, puis saisissez votre numéro de client, qui figure en haut de vos relevés.\n' +
        'Vous recevrez un code à six chiffres par message. Ce code est valable dix minutes.\n' +
        'Si le délai est dépassé, revenez à l’écran d’accueil et demandez un nouveau code : ' +
        'saisir un code expiré bloque la connexion pendant une heure.\n' +
        'Choisissez ensuite un mot de passe de huit caractères au moins, comprenant un chiffre.\n' +
        'La reconnaissance faciale peut remplacer le mot de passe à partir de la deuxième connexion. ' +
        'Elle ne remplace jamais le code reçu par message lors d’un changement d’appareil.\n' +
        'En cas d’oubli du numéro de client, il figure également sur le contrat remis à l’ouverture ' +
        'du compte, ou peut être redemandé en agence sur présentation d’une pièce d’identité. ' +
        'L’assistance téléphonique ne communique jamais ce numéro.',
      items: [
        {
          q: 'Que faire si le code a expiré ?',
          opts: [
            'Revenir à l’accueil et en demander un nouveau',
            'Le saisir quand même',
            'Attendre une heure',
            'Réinstaller l’application',
          ],
          correct: 0,
          why: 'Le texte l’indique et prévient : saisir un code expiré bloque la connexion pendant une heure.',
          band: 'b1',
        },
        {
          q: 'Dans quel cas le code par message reste-t-il obligatoire ?',
          opts: [
            'Lors d’un changement d’appareil',
            'À chaque connexion',
            'Pour modifier le mot de passe',
            'Jamais, après la deuxième connexion',
          ],
          correct: 0,
          why: 'La reconnaissance faciale remplace le mot de passe, jamais le code lors d’un changement d’appareil.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 11 · une lettre de motivation',
      text:
        'Madame, Monsieur,\n' +
        'Votre annonce pour un poste de vendeur en librairie a retenu mon attention.\n' +
        'J’ai travaillé trois ans dans un magasin de sport, où j’ai appris à conseiller ' +
        'des clients qui ne savent pas encore ce qu’ils cherchent. C’est cette partie du métier ' +
        'que je souhaite retrouver, dans un domaine que je connais mieux.\n' +
        'Je n’ai pas d’expérience en librairie. Je lis beaucoup, ce qui n’est pas la même chose, ' +
        'et je préfère l’écrire plutôt que de le laisser deviner.\n' +
        'Je suis disponible à partir du premier mars et je peux travailler le samedi.\n' +
        'Je suis également à l’aise avec les logiciels de caisse, que j’ai utilisés quotidiennement, ' +
        'et j’ai formé deux saisonniers l’été dernier.\n' +
        'Je vous remercie de l’attention que vous voudrez bien porter à ma candidature ' +
        'et reste à votre disposition pour un entretien.',
      items: [
        {
          q: 'Quelle expérience le candidat met-il en avant ?',
          opts: [
            'Le conseil aux clients dans un magasin de sport',
            'Trois ans en librairie',
            'Une formation de libraire',
            'La vente par internet',
          ],
          correct: 0,
          why: 'Trois ans dans un magasin de sport, et précisément le conseil à des clients indécis.',
          band: 'b1',
        },
        {
          q: 'Que fait le candidat en écrivant qu’il n’a pas d’expérience en librairie ?',
          opts: [
            'Il annonce lui-même la faiblesse de sa candidature',
            'Il demande une formation',
            'Il conteste l’annonce',
            'Il renonce au poste',
          ],
          correct: 0,
          why: 'Il préfère l’écrire plutôt que de le laisser deviner : la lacune est déclarée, pas cachée.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 12 · le bilan de l’association',
      text:
        'BILAN DE L’ANNÉE\n' +
        'L’association compte cent quarante adhérents, contre cent dix l’an dernier.\n' +
        'La hausse vient presque entièrement de l’atelier de réparation de vélos, ' +
        'ouvert en septembre, qui a attiré des habitants que nos activités ne touchaient pas.\n' +
        'Les sorties du dimanche, en revanche, réunissent moins de monde qu’avant : ' +
        'douze personnes en moyenne, contre vingt il y a deux ans.\n' +
        'Le conseil propose de maintenir les sorties, sans chercher à en augmenter la fréquence, ' +
        'et de consacrer le budget supplémentaire à un second atelier.\n' +
        'Les comptes sont à l’équilibre, la subvention municipale ayant été reconduite ' +
        'au même montant que l’an dernier.\n' +
        'Nous remercions les bénévoles, dont le nombre est resté stable, ' +
        'et cherchons deux personnes supplémentaires pour le samedi matin.\n' +
        'La décision sera soumise au vote lors de l’assemblée du quinze mars.',
      items: [
        {
          q: 'D’où vient la hausse du nombre d’adhérents ?',
          opts: [
            'De l’atelier de réparation de vélos',
            'Des sorties du dimanche',
            'D’une baisse de la cotisation',
            'De l’assemblée de mars',
          ],
          correct: 0,
          why: 'La hausse vient presque entièrement de l’atelier ouvert en septembre.',
          band: 'b1',
        },
        {
          q: 'Que propose le conseil pour les sorties du dimanche ?',
          opts: [
            'Les garder telles quelles',
            'Les supprimer',
            'Les rendre plus fréquentes',
            'Les remplacer par un atelier',
          ],
          correct: 0,
          why: 'Maintenir, sans chercher à en augmenter la fréquence. Le budget va ailleurs.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 13 · un avis de recrutement',
      text:
        'AGENT D’ENTRETIEN · centre culturel de Vaubourg\n' +
        'Contrat de vingt-huit heures par semaine, du lundi au vendredi, en fin de journée.\n' +
        'Prise de poste au premier avril. Contrat d’un an, renouvelable.\n' +
        'Expérience souhaitée mais non exigée : une formation est assurée la première semaine.\n' +
        'Permis de conduire nécessaire, le poste desservant aussi l’annexe du parc.\n' +
        'Avantages : treizième mois, participation aux frais de transport, ' +
        'et deux semaines de congés imposées à la fermeture de fin d’année.\n' +
        'Le matériel et les produits sont fournis, ainsi qu’une tenue renouvelée chaque année.\n' +
        'Le poste suppose de travailler seul une partie du temps et de rendre compte ' +
        'chaque semaine à la responsable du site, par un cahier de liaison.\n' +
        'Nous cherchons quelqu’un de régulier, capable de signaler un problème ' +
        'plutôt que de le contourner.\n' +
        'Candidature par courriel avant le premier mars.',
      items: [
        {
          q: 'Quelle condition est indispensable pour ce poste ?',
          opts: [
            'Le permis de conduire',
            'Une expérience préalable',
            'Une formation déjà suivie',
            'La disponibilité le samedi',
          ],
          correct: 0,
          why: 'L’expérience est souhaitée sans être exigée. Le permis, lui, est nécessaire pour l’annexe.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 14 · la médiathèque après travaux',
      text:
        'La médiathèque de Corbeny a rouvert en janvier après huit mois de travaux. ' +
        'La fréquentation a augmenté de trente pour cent par rapport à l’année précédente, ' +
        'ce que la commune présente comme le résultat de la rénovation.\n' +
        'Le chiffre mérite un regard. Les prêts, eux, sont restés stables. ' +
        'Ce qui a changé est la durée des visites et l’usage : les nouveaux espaces de travail ' +
        'sont occupés toute la journée, en particulier par des étudiants et par des personnes ' +
        'qui viennent travailler sans être inscrites.\n' +
        'Autrement dit, la médiathèque reçoit davantage de monde sans prêter davantage de livres. ' +
        'Selon la directrice, c’est précisément ce que le projet visait, ' +
        'même si ce n’est pas ce que les indicateurs habituels savent mesurer.',
      items: [
        {
          q: 'Qu’est-ce qui a changé après la rénovation ?',
          opts: [
            'L’usage des lieux, pas le nombre de prêts',
            'Le nombre de prêts, pas la fréquentation',
            'Les horaires d’ouverture',
            'Le nombre d’inscrits',
          ],
          correct: 0,
          why: 'Les prêts sont stables ; ce sont la durée des visites et l’usage des espaces qui augmentent.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 15 · une note de service',
      text:
        'NOTE DE SERVICE · partage des bureaux\n' +
        'À compter du deux mai, les postes de travail du deuxième étage ne sont plus attribués.\n' +
        'Chacun réserve sa place la veille, par l’intranet, pour une journée entière.\n' +
        'Les réservations non utilisées avant dix heures sont libérées automatiquement.\n' +
        'Trois bureaux restent attribués nominativement, pour les personnes dont le poste ' +
        'suppose un matériel fixe. La liste est établie par le service technique, non par la direction.\n' +
        'Les casiers personnels sont maintenus et ne changent pas.\n' +
        'Les salles de réunion se réservent comme auparavant et ne sont pas concernées.\n' +
        'Il est demandé de laisser le poste vide en partant : ni dossier, ni tasse, ni câble. ' +
        'Un rangement collectif est prévu chaque vendredi à seize heures.\n' +
        'Cette organisation sera revue en novembre, après six mois d’usage.',
      items: [
        {
          q: 'Qui décide des trois bureaux attribués ?',
          opts: [
            'Le service technique',
            'La direction',
            'Les salariés eux-mêmes',
            'Personne, ils sont tirés au sort',
          ],
          correct: 0,
          why: 'La note le précise : la liste est établie par le service technique, non par la direction.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 16 · les commerces du centre-bourg',
      text:
        'Six commerces ont ouvert en deux ans dans le centre de Corbeny, après une décennie ' +
        'de fermetures. La commune met en avant la gratuité du stationnement, votée en même temps.\n' +
        'Les commerçants installés donnent une autre explication. Trois d’entre eux citent ' +
        'le rachat des murs par la commune, qui loue désormais à un loyer inférieur au marché ' +
        'pendant les trois premières années. Le stationnement, disent-ils, n’a jamais empêché ' +
        'personne d’ouvrir : c’est le loyer qui décidait.\n' +
        'La distinction n’est pas anodine. Une commune qui croit avoir réussi par le stationnement ' +
        'reconduira le stationnement. Le bail à loyer réduit, lui, arrive à échéance en septembre, ' +
        'et rien n’indique pour l’instant qu’il sera prolongé.',
      items: [
        {
          q: 'Selon les commerçants, qu’est-ce qui a permis ces ouvertures ?',
          opts: [
            'Le loyer réduit sur les murs rachetés par la commune',
            'La gratuité du stationnement',
            'La fin d’une décennie de fermetures',
            'L’arrivée de nouveaux habitants',
          ],
          correct: 0,
          why: 'Ils écartent le stationnement et citent le loyer inférieur au marché pendant trois ans.',
          band: 'b1',
        },
      ],
    },
  ],
};
