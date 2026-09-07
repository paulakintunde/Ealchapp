// TCF Canada blanc-05 — Compréhension orale, the lower slope (A1, A2, B1).
//
// One task per BAND, so a miss routes to material at the band it happened. The
// upper slope is in co-hi.ts and MUST follow this file in the array — order is
// the instrument here.
//
// Band characters, from TOPICS-tcf-canada:
//   A1  concrete, literal, one fact, stated once plainly
//   A2  still literal, but one competing fact must be ignored
//   B1  two facts held together, or one tracked across a turn change
//
// ── Written for the RATE, not only for the sense ────────────────────────────
//
// Three things blanc-02, blanc-03 and blanc-04 each had to learn by rendering
// first, and which this paper applies from the start (VOICES-tcf-canada §3):
//
//   Size to the MIDDLE of the envelope, never its floor. At the band's target
//   rate that is roughly 28 words at A1, 50 at A2, 93 at B1.
//
//   Prefer dialogue to monologue at A1 and A2. A turn boundary is a pause, and
//   a pause is the only thing that lengthens a short document once the speed
//   is already at the provider's 0.70 floor.
//
//   Prefer LONG words at A1. The rate is words over seconds, and a word counts
//   as one whether it takes a fifth of a second or a whole one. blanc-04's
//   A1 document written in monosyllables measured 143 wpm against a 110 target
//   and could not be slowed by adding turns, because adding turns added words.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId, uniq, ITEMS } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  taskType: 'co_mcq' as const,
  skill: 'CO' as const,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ A1 — positions 1 to 3 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: each answer is said once, in plain words, and no distractor is
// mentioned in the audio at all.

export const CO_A1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '001'),
  level: 'a1',
  label: 'Compréhension orale · A1',
  prompt: 'Vous allez entendre trois documents courts. Pour chaque document, choisissez la bonne réponse.',
  timingS: 110,
  targetItemIds: uniq(ITEMS.heureEtDate.a1, ITEMS.routines.a1, ITEMS.ecole.a1),
  parts: [
    {
      label: 'Document 1 · à la pharmacie',
      playCount: 1,
      readWindowS: 10,
      durationS: 15,
      text:
        'UNE CLIENTE : Bonjour Madame. Vous fermez à quelle heure, aujourd’hui ?\n' +
        'UNE PHARMACIENNE : À dix-neuf heures trente, comme tous les mardis.\n' +
        'UNE CLIENTE : Parfait. Je repasserai après mon travail.\n' +
        'UNE PHARMACIENNE : Très bien. Bonne journée, Madame.',
      items: [
        {
          q: 'À quelle heure ferme la pharmacie ?',
          opts: ['À dix-neuf heures trente', 'À dix-huit heures', 'À vingt heures', 'À midi'],
          correct: 0,
          why: 'La pharmacienne annonce dix-neuf heures trente.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 2 · le matin',
      playCount: 1,
      readWindowS: 10,
      durationS: 16,
      text:
        'UNE JOURNALISTE : Racontez-moi votre matinée, Monsieur Berthaud.\n' +
        'UN HOMME : Je me réveille à cinq heures et demie. ' +
        'Je prépare un café, j’écoute la radio.\n' +
        'UNE JOURNALISTE : Et ensuite ?\n' +
        'UN HOMME : Ensuite je pars travailler à bicyclette.',
      items: [
        {
          q: 'Que fait cet homme après son café ?',
          opts: [
            'Il écoute la radio',
            'Il regarde la télévision',
            'Il téléphone à sa famille',
            'Il prépare le repas',
          ],
          correct: 0,
          why: 'Il prépare un café et écoute la radio ; la bicyclette vient après.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 3 · une annonce à l’école',
      playCount: 1,
      readWindowS: 10,
      durationS: 18,
      text:
        'UNE VOIX : Chers élèves, la récréation est terminée. ' +
        'Rejoignez immédiatement votre salle de classe. ' +
        'Les élèves de sixième descendent directement à la bibliothèque. ' +
        'Le professeur de mathématiques sera absent cet après-midi. ' +
        'Merci de votre attention.',
      items: [
        {
          q: 'Que doivent faire les élèves ?',
          opts: [
            'Retourner en classe',
            'Rester dans la cour',
            'Aller à la cantine',
            'Attendre le professeur dehors',
          ],
          correct: 0,
          why: 'L’annonce demande de rejoindre la salle de classe.',
          band: 'a1',
        },
      ],
    },
  ],
};

/* ═══ A2 — positions 4 to 9 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: every document names exactly ONE competing fact the candidate
// must set aside — a second parcel, a second neighbourhood, a second day, a
// second carriage, a second dish, a second address.

export const CO_A2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  level: 'a2',
  label: 'Compréhension orale · A2',
  prompt: 'Vous allez entendre six documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 295,
  targetItemIds: uniq(
    ITEMS.internet.a2,
    ITEMS.voisinage.a2,
    ITEMS.systemeDeSante.a2,
    ITEMS.transportsQuotidiens.a2,
    ITEMS.auRestaurant.a2,
    ITEMS.collegues.a2
  ),
  parts: [
    {
      label: 'Document 4 · une commande incomplète',
      playCount: 1,
      readWindowS: 12,
      durationS: 28,
      text:
        'UN CONSEILLER : Vous avez reçu deux colis, d’après le dossier.\n' +
        'UNE CLIENTE : J’en ai reçu un seul. Il contenait les chaussures.\n' +
        'UN CONSEILLER : Le second contenait le manteau. Il est parti lundi.\n' +
        'UNE CLIENTE : Je n’ai rien reçu lundi. C’est le manteau qui manque.\n' +
        'UN CONSEILLER : Je lance une recherche auprès du transporteur. ' +
        'Vous recevrez une réponse sous quarante-huit heures.\n' +
        'UNE CLIENTE : Très bien. Je vous remercie beaucoup.',
      items: [
        {
          q: 'Qu’est-ce que la cliente n’a pas reçu ?',
          opts: ['Le manteau', 'Les chaussures', 'Les deux colis', 'La facture'],
          correct: 0,
          why: 'Le premier colis contenait les chaussures ; c’est le second, le manteau, qui manque.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 5 · le choix d’un quartier',
      playCount: 1,
      readWindowS: 12,
      durationS: 30,
      text:
        'UNE AMIE : Tu regrettes d’avoir choisi ce quartier ?\n' +
        'UN HOMME : Non, pas du tout. Nous hésitions avec le centre-ville.\n' +
        'UNE AMIE : Pourquoi avoir décidé ainsi ?\n' +
        'UN HOMME : Pour l’école, qui se trouve à deux minutes de la maison.\n' +
        'UNE AMIE : Et le centre-ville te manque, parfois ?\n' +
        'UN HOMME : Le samedi, un peu. Le reste de la semaine, jamais. ' +
        'Cinq ans après, l’école est toujours ce qui compte le plus.',
      items: [
        {
          q: 'Pourquoi a-t-il choisi ce quartier ?',
          opts: [
            'Pour la proximité de l’école',
            'Pour le prix des logements',
            'Pour être au centre-ville',
            'Pour être près de son travail',
          ],
          correct: 0,
          why: 'Le centre-ville était l’autre possibilité ; l’école a décidé.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 6 · un répondeur',
      playCount: 1,
      readWindowS: 12,
      durationS: 24,
      text:
        'UNE VOIX : Vous êtes bien au cabinet du docteur Marville. ' +
        'Le cabinet est ouvert du lundi au vendredi, de huit heures à dix-huit heures, ' +
        'et le samedi matin uniquement sur rendez-vous. ' +
        'En cas d’urgence pendant la fermeture, composez le quinze. ' +
        'Pour toute autre demande, laissez un message après le signal.',
      items: [
        {
          q: 'Quand faut-il un rendez-vous pour venir ?',
          opts: ['Le samedi matin', 'Le lundi matin', 'Tous les jours', 'Le vendredi soir'],
          correct: 0,
          why: 'Le samedi matin est uniquement sur rendez-vous ; la semaine est ouverte.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 7 · une annonce dans le train',
      playCount: 1,
      readWindowS: 12,
      durationS: 30,
      text:
        'UN CONTRÔLEUR : Mesdames et Messieurs, votre attention. ' +
        'La voiture numéro huit sera détachée à Corbeny. ' +
        'Les voyageurs installés dans cette voiture rejoignent la voiture numéro six ' +
        'avant l’arrivée en gare. ' +
        'La voiture numéro sept continue jusqu’au terminus. ' +
        'Les places sont libres dans la voiture six. ' +
        'Un agent accompagnera les voyageurs qui le souhaitent.',
      items: [
        {
          q: 'Que doivent faire les voyageurs de la voiture huit ?',
          opts: [
            'Aller dans la voiture six',
            'Rester à leur place',
            'Aller dans la voiture sept',
            'Descendre à Corbeny',
          ],
          correct: 0,
          why: 'La voiture huit est détachée ; ses voyageurs rejoignent la six, pas la sept.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 8 · au restaurant',
      playCount: 1,
      readWindowS: 12,
      durationS: 28,
      text:
        'UN SERVEUR : Aujourd’hui, le plat du jour est un poisson grillé ' +
        'accompagné de légumes de saison.\n' +
        'UNE CLIENTE : Très bien, je prendrai le plat du jour. Et en dessert ?\n' +
        'UN SERVEUR : Je suis désolé, la tarte aux pommes est terminée depuis midi. ' +
        'Il nous reste de la mousse au chocolat.\n' +
        'UNE CLIENTE : Alors ce sera la mousse au chocolat. Je vous remercie.',
      items: [
        {
          q: 'Quel dessert la cliente peut-elle prendre ?',
          opts: [
            'La mousse au chocolat',
            'La tarte aux pommes',
            'Une glace',
            'Un fruit',
          ],
          correct: 0,
          why: 'La tarte est terminée ; il reste la mousse.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 9 · partager un taxi',
      playCount: 1,
      readWindowS: 12,
      durationS: 22,
      text:
        'UNE COLLÈGUE : Tu rentres comment, ce soir ?\n' +
        'UN COLLÈGUE : Je pensais prendre le dernier bus, comme d’habitude.\n' +
        'UNE COLLÈGUE : Il est supprimé le mercredi depuis la rentrée.\n' +
        'UN COLLÈGUE : Ah, je l’ignorais complètement. J’attendrai le tramway.\n' +
        'UNE COLLÈGUE : Partageons plutôt un taxi. Nous habitons presque la même rue.\n' +
        'UN COLLÈGUE : Volontiers. C’est une excellente idée.',
      items: [
        {
          q: 'Comment vont-ils rentrer ?',
          opts: ['En taxi', 'En bus', 'À pied', 'En voiture personnelle'],
          correct: 0,
          why: 'Le dernier bus est supprimé le mercredi, donc ils partagent un taxi.',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ B1 — positions 10 to 19 ═════════════════════════════════════════════ */
//
// Seven documents, ten questions: three carry two. A document with two
// questions is one where two facts must be held at once.

export const CO_B1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '003'),
  level: 'b1',
  label: 'Compréhension orale · B1',
  prompt: 'Vous allez entendre sept documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 528,
  targetItemIds: uniq(
    ITEMS.rpFamille.b1,
    ITEMS.cuisine.b1,
    ITEMS.universite.b1,
    ITEMS.argentQuotidien.b1,
    ITEMS.soins.b1,
    ITEMS.immigrationEtCitoyennete.b1,
    ITEMS.vetements.b1
  ),
  parts: [
    {
      label: 'Document 10 · les horaires décalés',
      playCount: 1,
      readWindowS: 20,
      durationS: 43,
      text:
        'UNE CHRONIQUEUSE : On dit que travailler de nuit abîme la vie de famille. ' +
        'Les personnes concernées disent autre chose.\n' +
        'UN INFIRMIER : Ce qui abîme, ce n’est pas la nuit, c’est l’irrégularité. ' +
        'Trois ans de nuits fixes m’ont convenu. Les enfants savaient quand j’étais là.\n' +
        'UNE CHRONIQUEUSE : Et depuis ?\n' +
        'UN INFIRMIER : Depuis, je tourne : deux nuits, deux jours, trois de repos, ' +
        'et le planning tombe quinze jours avant.\n' +
        'UNE CHRONIQUEUSE : Cela se compense, non ? Vous êtes davantage chez vous.\n' +
        'UN INFIRMIER : J’y suis davantage, et je n’y suis jamais attendu. ' +
        'Personne ne sait de quoi la semaine prochaine sera faite, ' +
        'et c’est cela qui use, bien plus que les heures.',
      items: [
        {
          q: 'Qu’est-ce qui pèse le plus, selon lui ?',
          opts: [
            'L’irrégularité des horaires',
            'Le travail de nuit',
            'Le nombre d’heures',
            'La fatigue physique',
          ],
          correct: 0,
          why: 'Trois ans de nuits fixes lui convenaient ; c’est le roulement qui use.',
          band: 'b1',
        },
        {
          q: 'Pourquoi les nuits fixes convenaient-elles ?',
          opts: [
            'Les enfants savaient quand il était là',
            'Il dormait davantage',
            'Il gagnait plus d’argent',
            'Il travaillait moins souvent',
          ],
          correct: 0,
          why: 'La régularité rendait sa présence prévisible pour la famille.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 11 · un cuisinier et ses restes',
      playCount: 1,
      readWindowS: 20,
      durationS: 43,
      text:
        'UNE JOURNALISTE : Vous avez réduit vos déchets de moitié en un an. Comment ?\n' +
        'UN CUISINIER : Pas en cuisinant autrement. En changeant la carte. ' +
        'Nous avions vingt plats, nous en avons neuf.\n' +
        'UNE JOURNALISTE : Le gaspillage venait donc du choix proposé ?\n' +
        'UN CUISINIER : Il venait de l’incertitude. Avec vingt plats, ' +
        'on prépare pour tous les scénarios possibles et on en jette la moitié. ' +
        'Avec neuf, je sais à peu près ce qui partira dans la soirée.\n' +
        'UNE JOURNALISTE : Vos clients n’ont pas protesté ?\n' +
        'UN CUISINIER : Trois ou quatre habitués, la première semaine. ' +
        'Depuis, personne ne me parle de la carte, ' +
        'et j’achète mieux parce que j’achète moins de choses différentes.',
      items: [
        {
          q: 'Comment le restaurant a-t-il réduit ses déchets ?',
          opts: [
            'En réduisant le nombre de plats à la carte',
            'En cuisinant différemment',
            'En achetant moins souvent',
            'En baissant ses prix',
          ],
          correct: 0,
          why: 'Il écarte la manière de cuisiner : la carte est passée de vingt plats à neuf.',
          band: 'b1',
        },
        {
          q: 'Pourquoi une carte longue provoque-t-elle du gaspillage ?',
          opts: [
            'Il faut préparer pour toutes les commandes possibles',
            'Les plats sont plus compliqués',
            'Les clients commandent davantage',
            'Les livraisons sont plus fréquentes',
          ],
          correct: 0,
          why: 'L’incertitude oblige à préparer tous les scénarios, dont la moitié est jetée.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 12 · des cours du soir',
      playCount: 1,
      readWindowS: 20,
      durationS: 45,
      text:
        'UN REPORTER : Deux cents inscrits en septembre, quatre-vingts en février. ' +
        'L’abandon est-il inévitable ?\n' +
        'UNE RESPONSABLE : Il ne l’est pas, et nous avons mis trois ans à comprendre pourquoi ' +
        'les gens partaient. Ce n’est presque jamais le niveau.\n' +
        'UN REPORTER : Qu’est-ce que c’est ?\n' +
        'UNE RESPONSABLE : L’horaire. Un cours à dix-huit heures suppose de quitter le travail à moins le quart, ' +
        'ce que personne ne peut faire toute une année. ' +
        'Nous avons donc ouvert un groupe à vingt heures et un autre à midi.\n' +
        'UN REPORTER : Avec quel résultat ?\n' +
        'UNE RESPONSABLE : Nous perdons un inscrit sur cinq au lieu de trois sur cinq. ' +
        'Le niveau des uns et des autres est identique ; l’assiduité ne l’est pas.',
      items: [
        {
          q: 'Pourquoi les inscrits abandonnent-ils ?',
          opts: [
            'À cause de l’horaire des cours',
            'Parce que le niveau est trop élevé',
            'Parce que les cours sont payants',
            'Parce que les groupes sont trop grands',
          ],
          correct: 0,
          why: 'Elle écarte le niveau explicitement et nomme l’horaire.',
          band: 'b1',
        },
        {
          q: 'Qu’a fait l’organisme ?',
          opts: [
            'Ouvert des groupes à d’autres heures',
            'Baissé le niveau demandé',
            'Réduit le nombre d’inscrits',
            'Supprimé les cours du soir',
          ],
          correct: 0,
          why: 'Un groupe à vingt heures et un à midi, à niveau identique.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 13 · un découvert bancaire',
      playCount: 1,
      readWindowS: 18,
      durationS: 44,
      text:
        'UNE CONSEILLÈRE : Votre compte est à découvert depuis onze jours ce mois-ci.\n' +
        'UN CLIENT : De peu, chaque fois. Le salaire arrive le cinq et le loyer part le premier.\n' +
        'UNE CONSEILLÈRE : C’est exactement le problème, et ce n’est pas un problème d’argent. ' +
        'Vous gagnez assez pour ce que vous dépensez ; ' +
        'ce sont vos dates qui ne se suivent pas.\n' +
        'UN CLIENT : Je ne peux pas demander à mon employeur de payer plus tôt.\n' +
        'UNE CONSEILLÈRE : Il ne s’agit pas de lui. ' +
        'Demandez à votre propriétaire de prélever le loyer le huit plutôt que le premier. ' +
        'Vous économiserez les agios de quatre mois sur douze ' +
        'sans rien changer du tout à votre budget.',
      items: [
        {
          q: 'Quelle solution propose la conseillère ?',
          opts: [
            'Déplacer la date du prélèvement du loyer',
            'Réduire les dépenses mensuelles',
            'Ouvrir un second compte',
            'Demander une avance sur salaire',
          ],
          correct: 0,
          why: 'Le revenu suffit : ce sont les dates qui ne se suivent pas.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 14 · les gardes de nuit',
      playCount: 1,
      readWindowS: 18,
      durationS: 41,
      text:
        'UN JOURNALISTE : Les gardes de nuit sont-elles rentables pour une pharmacie ?\n' +
        'UNE PHARMACIENNE : Absolument pas, et personne ne les fait pour cela. ' +
        'Une nuit rapporte moins qu’une matinée ordinaire.\n' +
        'UN JOURNALISTE : Pourquoi les assurer, alors ?\n' +
        'UNE PHARMACIENNE : Parce que le tour est obligatoire, et parce qu’il est juste. ' +
        'Chacune des douze pharmacies du secteur y passe.\n' +
        'UN JOURNALISTE : Vous ne demandez donc rien.\n' +
        'UNE PHARMACIENNE : Je ne demande rien pour moi. ' +
        'Ce qui me gêne n’est pas la nuit, c’est ce que la nuit donne à voir : ' +
        'des gens qui viennent à trois heures du matin ' +
        'faute d’avoir pu consulter à trois heures de l’après-midi.',
      items: [
        {
          q: 'Qu’est-ce qui gêne cette pharmacienne ?',
          opts: [
            'Ce que la nuit révèle de l’accès aux soins',
            'La perte financière des gardes',
            'Le manque de sommeil',
            'Le caractère obligatoire du tour',
          ],
          correct: 0,
          why: 'Elle accepte le tour et la perte ; ce qui la gêne est pourquoi les gens viennent la nuit.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 15 · la première semaine',
      playCount: 1,
      readWindowS: 18,
      durationS: 39,
      text:
        'UNE FEMME : On m’avait prévenue pour le froid, pour la langue, pour les papiers. ' +
        'Tout cela était vrai et je m’y attendais.\n' +
        'UN HOMME : Qu’est-ce qui vous a surprise, alors ?\n' +
        'UNE FEMME : Le silence des immeubles. Chez moi, on entend les voisins toute la journée : ' +
        'la radio, les enfants, les casseroles à midi.\n' +
        'UN HOMME : Et ici ?\n' +
        'UNE FEMME : Ici, j’ai passé une semaine entière sans entendre une seule voix ' +
        'derrière un mur, et j’ai fini par croire que le bâtiment était vide. ' +
        'Personne ne prévient de cela, parce que personne ne le remarque avant de le vivre.',
      items: [
        {
          q: 'Qu’est-ce qui l’a le plus surprise ?',
          opts: [
            'Le silence dans les immeubles',
            'Le froid',
            'La difficulté de la langue',
            'Les démarches administratives',
          ],
          correct: 0,
          why: 'Elle avait été prévenue du froid, de la langue et des papiers ; le silence, non.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 16 · une friperie solidaire',
      playCount: 1,
      readWindowS: 18,
      durationS: 44,
      text:
        'UN REPORTER : Vous recevez trop de dons, dites-vous. C’est un problème étonnant.\n' +
        'UNE BÉNÉVOLE : Nous recevons quatre tonnes par an et nous en vendons une. ' +
        'Le reste part au recyclage, et le tri nous coûte nos heures.\n' +
        'UN REPORTER : Vous refusez des dons ?\n' +
        'UNE BÉNÉVOLE : Nous n’en refusons aucun, et nous demandons autre chose. ' +
        'Que l’on nous apporte des vêtements portables tels quels, ' +
        'propres et sans trou, comme on les prêterait à quelqu’un.\n' +
        'UN REPORTER : La demande paraît sévère.\n' +
        'UNE BÉNÉVOLE : Un carton non trié prend deux heures à l’une d’entre nous ' +
        'et donne rarement plus de trois pièces vendables. ' +
        'Donner ce dont on ne veut plus n’est pas donner ce qui servira.',
      items: [
        {
          q: 'Que demande la bénévole aux donateurs ?',
          opts: [
            'De n’apporter que des vêtements immédiatement portables',
            'De cesser tout don pendant l’été',
            'De trier par taille',
            'D’apporter les dons en semaine',
          ],
          correct: 0,
          why: 'Un carton non trié coûte deux heures pour trois pièces vendables.',
          band: 'b1',
        },
      ],
    },
  ],
};
