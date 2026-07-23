// Playlists — real listening sets, not four decorative gradients.
//
// The home cards used to be plain Views with a French noun painted on them and a
// track count ('15 tracks') that lived inside a translation string and pointed at
// nothing. These are the real thing: each track carries actual French lines that
// feed the player's TTS exactly as a corpus item does, and the count a card shows
// is `tracks.length` — a fact, not a claim. Counts are deliberately honest and
// modest; a playlist grows by adding real tracks here, never by editing a string.
//
// `glow` is stored as a literal rgba so a playlist is theme-independent, matching
// the three sibling cards that were already fixed colors.

import type { Level } from './schema';

export type PlaylistTrack = {
  /** Stable id: `<playlistId>-t<seq>`. */
  id: string;
  /** French track title, shown as the now-playing heading in the player. */
  title: string;
  /** The lines spoken in order. `fr` is what TTS says; `en` is the gloss. */
  lines: { fr: string; en: string }[];
};

export type Playlist = {
  id: string;
  /** The lowest band this playlist is honest listening for. Nothing gates on it
   *  yet: it is the declaration the future level-aware feed reads, recorded at
   *  authoring time while the judgement is fresh rather than reverse-engineered
   *  later. Argot at a1 would be noise; that fact belongs on the data. */
  minLevel: Level;
  /** The serif French word painted on the card (La Voix, Argot…). */
  word: string;
  /** Eyebrow tag (DEEP-DIVE, PARIS…). */
  tag: string;
  /** Card gradient, literal rgba. */
  glow: string;
  labelFr: string;
  labelEn: string;
  /** The meta topic ('nasal vowels'); the count is derived, never stored here. */
  topicFr: string;
  topicEn: string;
  tracks: PlaylistTrack[];
};

export const playlists: Playlist[] = [
  {
    id: 'la-voix',
    minLevel: 'sons',
    word: 'La Voix',
    tag: 'DEEP-DIVE',
    glow: 'rgba(214,160,96,0.28)',
    labelFr: 'Prononciation en profondeur',
    labelEn: 'Pronunciation Deep-Dives',
    topicFr: 'voyelles nasales',
    topicEn: 'nasal vowels',
    tracks: [
      {
        id: 'la-voix-t1',
        title: 'Les voyelles nasales',
        lines: [
          { fr: 'un bon vin blanc', en: 'a good white wine' },
          { fr: 'on prend le train', en: 'we take the train' },
          { fr: 'cent ans', en: 'a hundred years' },
          { fr: 'mon oncle est content', en: 'my uncle is happy' },
        ],
      },
      {
        id: 'la-voix-t2',
        title: 'La liaison obligatoire',
        lines: [
          { fr: 'les amis', en: 'the friends' },
          { fr: 'vous avez', en: 'you have' },
          { fr: 'un grand homme', en: 'a great man' },
          { fr: 'les enfants', en: 'the children' },
        ],
      },
      {
        id: 'la-voix-t3',
        title: 'Le R français',
        lines: [
          { fr: 'Paris au printemps', en: 'Paris in spring' },
          { fr: 'rue de Rivoli', en: 'Rivoli street' },
          { fr: 'un verre de rouge', en: 'a glass of red' },
          { fr: 'trois roses rouges', en: 'three red roses' },
        ],
      },
      {
        id: 'la-voix-t4',
        title: 'Accent et rythme',
        lines: [
          { fr: "s'il vous plaît", en: 'please' },
          { fr: 'merci beaucoup', en: 'thank you very much' },
          { fr: "à tout à l'heure", en: 'see you later' },
          { fr: "c'est très bien", en: "that's very good" },
        ],
      },
    ],
  },
  {
    id: 'argot',
    minLevel: 'b1',
    word: 'Argot',
    tag: 'PARIS',
    glow: 'rgba(199,106,92,0.30)',
    labelFr: 'Argot parisien décontracté',
    labelEn: 'Casual Parisian Slang',
    topicFr: 'argot parisien',
    topicEn: 'Parisian slang',
    tracks: [
      {
        id: 'argot-t1',
        title: 'Se retrouver',
        lines: [
          { fr: 'on se capte plus tard', en: "let's catch up later" },
          { fr: 'je suis grave en retard', en: "I'm super late" },
          { fr: "t'inquiète, ça marche", en: 'no worries, works for me' },
        ],
      },
      {
        id: 'argot-t2',
        title: 'Le boulot',
        lines: [
          { fr: "j'ai un taf de dingue", en: "I've got a crazy job" },
          { fr: 'je suis débordé en ce moment', en: "I'm swamped right now" },
          { fr: 'je file, à plus', en: "I'm off, later" },
        ],
      },
      {
        id: 'argot-t3',
        title: 'Au comptoir',
        lines: [
          { fr: "un p'tit café, s'il te plaît", en: 'a little coffee, please' },
          { fr: "c'est ma tournée", en: "it's my round" },
          { fr: 'on trinque ?', en: 'shall we toast?' },
        ],
      },
    ],
  },
  {
    id: 'l-argent',
    minLevel: 'b1',
    word: "L'Argent",
    tag: 'BUSINESS',
    glow: 'rgba(96,126,160,0.32)',
    labelFr: 'Le français des affaires',
    labelEn: 'French for Business',
    topicFr: 'réunions & téléphone',
    topicEn: 'meetings & calls',
    tracks: [
      {
        id: 'l-argent-t1',
        title: 'En réunion',
        lines: [
          { fr: "revenons à l'ordre du jour", en: "let's get back to the agenda" },
          { fr: 'pouvez-vous préciser ?', en: 'could you clarify?' },
          { fr: 'je vous en prie', en: 'please, go ahead' },
        ],
      },
      {
        id: 'l-argent-t2',
        title: 'Au téléphone',
        lines: [
          { fr: 'ne quittez pas', en: 'please hold' },
          { fr: 'je vous le passe', en: "I'll put you through" },
          { fr: "je vous rappelle dans l'après-midi", en: "I'll call you back this afternoon" },
        ],
      },
      {
        id: 'l-argent-t3',
        title: 'Négocier',
        lines: [
          { fr: 'quel est votre budget ?', en: "what's your budget?" },
          { fr: "c'est tout à fait envisageable", en: "that's quite feasible" },
          { fr: "nous sommes d'accord", en: "we're agreed" },
        ],
      },
    ],
  },
  {
    id: 'l-oreille',
    minLevel: 'a2',
    word: "L'Oreille",
    tag: 'IMMERSION',
    glow: 'rgba(139,116,190,0.28)',
    labelFr: 'Immersion métro',
    labelEn: 'Métro Immersion',
    topicFr: 'annonces du métro',
    topicEn: 'métro announcements',
    tracks: [
      {
        id: 'l-oreille-t1',
        title: 'Dans le métro',
        lines: [
          { fr: 'prochain arrêt : Châtelet', en: 'next stop: Châtelet' },
          { fr: 'attention à la marche', en: 'mind the gap' },
          { fr: 'correspondance avec la ligne 4', en: 'transfer to line 4' },
        ],
      },
      {
        id: 'l-oreille-t2',
        title: 'Les annonces',
        lines: [
          { fr: 'le trafic est momentanément interrompu', en: 'service is temporarily suspended' },
          { fr: 'en raison d\'un incident voyageur', en: 'due to a passenger incident' },
          { fr: 'nous vous prions de nous excuser', en: 'we apologise for the inconvenience' },
        ],
      },
    ],
  },

  // ── Conversation-builder sets (01–15) ──────────────────────────────────
  //
  // Fifteen everyday-life themes, each a set of real interview-style Q&A and
  // model sentences a learner can lift straight into an exam speaking task or
  // a real conversation. Tracks are the theme's sub-topics; lines mix a
  // question, an answer and a couple of reusable model sentences rather than
  // an unbroken monologue, because that is the shape a learner actually
  // reuses at a counter, an interview or a DELF/TEF oral.
  {
    id: 'identite',
    minLevel: 'a1',
    word: "L'Identité",
    tag: '01 · IDENTITY',
    glow: 'rgba(196,142,110,0.30)',
    labelFr: 'Parler de soi',
    labelEn: 'Personal Identity',
    topicFr: 'nom, âge, origine',
    topicEn: 'name, age, origin',
    tracks: [
      {
        id: 'identite-t1',
        title: 'Le nom',
        lines: [
          { fr: 'Comment vous appelez-vous ?', en: 'What is your name?' },
          { fr: "Je m'appelle Claire Dubois.", en: 'My name is Claire Dubois.' },
          { fr: "Comment ça s'écrit ?", en: 'How is that spelled?' },
          { fr: "Ça s'écrit C, L, A, I, R, E.", en: "It's spelled C, L, A, I, R, E." },
          { fr: "On m'appelle Clo pour faire court.", en: 'They call me Clo for short.' },
        ],
      },
      {
        id: 'identite-t2',
        title: "L'âge et la naissance",
        lines: [
          { fr: 'Quel âge avez-vous ?', en: 'How old are you?' },
          { fr: "J'ai vingt-huit ans.", en: "I'm twenty-eight." },
          { fr: 'Je suis né en mille neuf cent quatre-vingt-dix-huit.', en: 'I was born in nineteen ninety-eight.' },
          { fr: "Mon anniversaire, c'est le douze mars.", en: 'My birthday is March twelfth.' },
        ],
      },
      {
        id: 'identite-t3',
        title: 'Le lieu de vie',
        lines: [
          { fr: 'Où habitez-vous ?', en: 'Where do you live?' },
          { fr: "J'habite à Lyon, dans le troisième arrondissement.", en: 'I live in Lyon, in the third district.' },
          { fr: "Je viens du Canada, mais je vis en France depuis deux ans.", en: "I'm from Canada, but I've lived in France for two years." },
          { fr: 'Mon quartier est calme et plein de petits cafés.', en: 'My neighborhood is quiet and full of little cafés.' },
        ],
      },
      {
        id: 'identite-t4',
        title: 'Les coordonnées',
        lines: [
          { fr: 'Quelle est votre adresse e-mail ?', en: 'What is your email address?' },
          { fr: 'Claire, point, Dubois, arobase, gmail, point, com.', en: 'Claire, dot, Dubois, at, gmail, dot, com.' },
          { fr: 'Et votre numéro de téléphone ?', en: 'And your phone number?' },
          { fr: "C'est le zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit.", en: "It's 06 12 34 56 78." },
          { fr: "Pouvez-vous répéter plus lentement, s'il vous plaît ?", en: 'Could you repeat that more slowly, please?' },
        ],
      },
      {
        id: 'identite-t5',
        title: 'Origines et langues',
        lines: [
          { fr: "D'où venez-vous ?", en: 'Where are you from?' },
          { fr: 'Je suis originaire du Sénégal.', en: "I'm originally from Senegal." },
          { fr: "J'ai grandi à Dakar, puis j'ai déménagé en France.", en: 'I grew up in Dakar, then I moved to France.' },
          { fr: 'Je parle wolof, français et un peu anglais.', en: 'I speak Wolof, French and a bit of English.' },
        ],
      },
      {
        id: 'identite-t6',
        title: 'Le physique',
        lines: [
          { fr: 'Comment êtes-vous physiquement ?', en: 'What do you look like?' },
          { fr: 'Je suis de taille moyenne, plutôt mince.', en: "I'm average height, rather slim." },
          { fr: "J'ai les cheveux bruns et les yeux verts.", en: 'I have brown hair and green eyes.' },
          { fr: 'Elle porte souvent des lunettes.', en: 'She often wears glasses.' },
        ],
      },
      {
        id: 'identite-t7',
        title: 'Le caractère',
        lines: [
          { fr: 'Comment décririez-vous votre caractère ?', en: 'How would you describe your personality?' },
          { fr: "Je suis plutôt timide au début, mais très sociable une fois à l'aise.", en: "I'm rather shy at first, but very sociable once I feel comfortable." },
          { fr: 'Il est patient et toujours de bonne humeur.', en: 'He is patient and always in a good mood.' },
          { fr: "On me dit que je suis têtu, mais je préfère dire déterminé.", en: "People tell me I'm stubborn, but I prefer to say determined." },
        ],
      },
      {
        id: 'identite-t8',
        title: "Les papiers d'identité",
        lines: [
          { fr: "Avez-vous une pièce d'identité sur vous ?", en: 'Do you have an ID on you?' },
          { fr: "Voici ma carte d'identité.", en: 'Here is my ID card.' },
          { fr: "Mon passeport expire l'année prochaine.", en: 'My passport expires next year.' },
          { fr: 'Il faut renouveler mon titre de séjour.', en: 'I need to renew my residence permit.' },
          { fr: "J'ai perdu mes papiers la semaine dernière.", en: 'I lost my papers last week.' },
        ],
      },
      {
        id: 'identite-t9',
        title: 'État civil et démarches',
        lines: [
          { fr: 'Quel est votre état civil ?', en: 'What is your marital status?' },
          { fr: 'Célibataire, marié, ou divorcé ?', en: 'Single, married, or divorced?' },
          { fr: 'Je dois remplir ce formulaire administratif.', en: 'I need to fill out this administrative form.' },
          { fr: "Signez ici, s'il vous plaît.", en: 'Sign here, please.' },
          { fr: "J'ai rendez-vous à la mairie ce matin.", en: 'I have an appointment at the town hall this morning.' },
        ],
      },
      {
        id: 'identite-t10',
        title: 'Se présenter en une minute',
        lines: [
          { fr: 'Pouvez-vous vous présenter en quelques mots ?', en: 'Can you introduce yourself in a few words?' },
          { fr: "Je suis quelqu'un de curieux et de motivé.", en: "I'm someone curious and motivated." },
          { fr: 'En résumé, voilà qui je suis.', en: "In short, that's who I am." },
          { fr: "J'aime apprendre de nouvelles choses tous les jours.", en: 'I like learning new things every day.' },
          { fr: "Voilà, je crois que ça résume bien ma situation.", en: "That's it, I think that sums up my situation well." },
        ],
      },
    ],
  },
  {
    id: 'famille',
    minLevel: 'a1',
    word: 'La Famille',
    tag: '02 · FAMILY',
    glow: 'rgba(168,150,92,0.28)',
    labelFr: 'La famille et les proches',
    labelEn: 'Family & Relationships',
    topicFr: 'famille et amis',
    topicEn: 'family and friends',
    tracks: [
      {
        id: 'famille-t1',
        title: 'Ma famille',
        lines: [
          { fr: 'Vous avez des frères et sœurs ?', en: 'Do you have brothers and sisters?' },
          { fr: "J'ai un frère aîné et une petite sœur.", en: 'I have an older brother and a little sister.' },
          { fr: 'Mes parents sont à la retraite.', en: 'My parents are retired.' },
          { fr: 'Nous sommes une famille de quatre.', en: 'We are a family of four.' },
        ],
      },
      {
        id: 'famille-t2',
        title: 'Le couple',
        lines: [
          { fr: 'Êtes-vous marié ou célibataire ?', en: 'Are you married or single?' },
          { fr: 'Je suis marié depuis trois ans.', en: "I've been married for three years." },
          { fr: "Nous nous sommes rencontrés à l'université.", en: 'We met at university.' },
          { fr: "Nous nous sommes fiancés l'année dernière.", en: 'We got engaged last year.' },
        ],
      },
      {
        id: 'famille-t3',
        title: 'La famille élargie',
        lines: [
          { fr: 'Toute la famille se réunit à Noël.', en: 'The whole family gets together at Christmas.' },
          { fr: 'Mon cousin se marie en juin.', en: 'My cousin is getting married in June.' },
          { fr: "On a fêté les noces d'or de mes grands-parents.", en: "We celebrated my grandparents' golden anniversary." },
          { fr: 'Ma tante organise une grande réunion de famille cet été.', en: 'My aunt is organizing a big family reunion this summer.' },
        ],
      },
      {
        id: 'famille-t4',
        title: 'Les amitiés',
        lines: [
          { fr: 'Comment vous êtes-vous connus ?', en: 'How did you meet?' },
          { fr: "On s'est rencontrés au lycée.", en: 'We met in high school.' },
          { fr: 'On se voit environ une fois par semaine.', en: 'We see each other about once a week.' },
          { fr: "C'est mon meilleur ami depuis l'enfance.", en: "He's been my best friend since childhood." },
        ],
      },
      {
        id: 'famille-t5',
        title: 'Le voisinage',
        lines: [
          { fr: 'Vous connaissez bien vos voisins ?', en: 'Do you know your neighbors well?' },
          { fr: 'Mes voisins sont très serviables.', en: 'My neighbors are very helpful.' },
          { fr: "On s'entraide dans l'immeuble.", en: 'We help each other out in the building.' },
          { fr: 'Il y a une bonne ambiance dans le quartier.', en: 'There is a good atmosphere in the neighborhood.' },
        ],
      },
      {
        id: 'famille-t6',
        title: 'Se disputer et se réconcilier',
        lines: [
          { fr: "On s'est disputés, mais on s'est réconciliés le lendemain.", en: 'We argued, but we made up the next day.' },
          { fr: "Je suis désolé, j'ai réagi trop vite.", en: "I'm sorry, I reacted too quickly." },
          { fr: "Ce n'était qu'un malentendu.", en: 'It was just a misunderstanding.' },
          { fr: 'On a fini par en rire ensemble.', en: 'We ended up laughing about it together.' },
        ],
      },
      {
        id: 'famille-t7',
        title: 'Les enfants',
        lines: [
          { fr: 'Vous avez des enfants ?', en: 'Do you have children?' },
          { fr: "J'ai deux enfants, un garçon et une fille.", en: 'I have two children, a boy and a girl.' },
          { fr: 'Mon fils a sept ans et ma fille en a dix.', en: 'My son is seven and my daughter is ten.' },
          { fr: "Ma fille rentre à l'école primaire cette année.", en: 'My daughter is starting primary school this year.' },
          { fr: 'Le petit dernier vient de naître.', en: 'The youngest was just born.' },
        ],
      },
      {
        id: 'famille-t8',
        title: "L'éducation des enfants",
        lines: [
          { fr: 'Comment élevez-vous vos enfants ?', en: 'How do you raise your children?' },
          { fr: "J'essaie d'être ferme mais bienveillant.", en: 'I try to be firm but caring.' },
          { fr: 'Les enfants doivent faire leurs devoirs avant de jouer.', en: 'The kids have to do their homework before playing.' },
          { fr: "On limite le temps d'écran le soir.", en: 'We limit screen time in the evening.' },
          { fr: 'Chaque enfant a son propre caractère.', en: 'Each child has their own personality.' },
        ],
      },
      {
        id: 'famille-t9',
        title: 'Les beaux-parents',
        lines: [
          { fr: "J'ai rencontré ses parents pour la première fois hier.", en: 'I met their parents for the first time yesterday.' },
          { fr: 'Mes beaux-parents habitent près de chez nous.', en: 'My in-laws live near us.' },
          { fr: "On s'entend plutôt bien avec eux.", en: 'We get along quite well with them.' },
          { fr: 'Ma belle-mère est très accueillante.', en: 'My mother-in-law is very welcoming.' },
          { fr: 'On les voit surtout pendant les fêtes.', en: 'We mostly see them during the holidays.' },
        ],
      },
      {
        id: 'famille-t10',
        title: 'Rester en contact à distance',
        lines: [
          { fr: "Ma famille vit loin, on s'appelle chaque dimanche.", en: 'My family lives far away, we call each other every Sunday.' },
          { fr: "On se fait des appels vidéo pour voir les enfants grandir.", en: 'We do video calls to watch the kids grow up.' },
          { fr: 'Le décalage horaire complique un peu les choses.', en: 'The time difference makes things a bit tricky.' },
          { fr: 'On essaie de se voir au moins une fois par an.', en: 'We try to see each other at least once a year.' },
          { fr: "Ça me manque de ne pas les voir plus souvent.", en: 'I miss not seeing them more often.' },
        ],
      },
    ],
  },
  {
    id: 'quotidien',
    minLevel: 'a1',
    word: 'Le Quotidien',
    tag: '03 · ROUTINE',
    glow: 'rgba(120,150,168,0.28)',
    labelFr: 'La vie de tous les jours',
    labelEn: 'Daily Life & Routines',
    topicFr: 'routines quotidiennes',
    topicEn: 'daily routines',
    tracks: [
      {
        id: 'quotidien-t1',
        title: 'Le matin',
        lines: [
          { fr: 'Je me réveille à sept heures.', en: 'I wake up at seven.' },
          { fr: "Je prends une douche, puis je m'habille.", en: 'I take a shower, then I get dressed.' },
          { fr: 'Je prends mon petit-déjeuner en vitesse.', en: 'I have breakfast quickly.' },
          { fr: 'Je pars de chez moi vers huit heures.', en: 'I leave home around eight.' },
        ],
      },
      {
        id: 'quotidien-t2',
        title: 'La journée de travail',
        lines: [
          { fr: 'Le travail commence à neuf heures.', en: 'Work starts at nine.' },
          { fr: 'Je fais une pause déjeuner à midi.', en: 'I take a lunch break at noon.' },
          { fr: 'Les cours finissent à seize heures.', en: 'Classes end at four.' },
          { fr: 'La journée passe vite quand il y a beaucoup à faire.', en: 'The day goes by fast when there is a lot to do.' },
        ],
      },
      {
        id: 'quotidien-t3',
        title: 'Le soir',
        lines: [
          { fr: 'Le soir, je prépare le dîner.', en: 'In the evening, I make dinner.' },
          { fr: 'On regarde un peu la télé après le repas.', en: 'We watch a bit of TV after the meal.' },
          { fr: 'Je me couche vers vingt-trois heures.', en: 'I go to bed around eleven.' },
          { fr: 'Je lis quelques pages avant de dormir.', en: 'I read a few pages before falling asleep.' },
        ],
      },
      {
        id: 'quotidien-t4',
        title: 'Semaine et week-end',
        lines: [
          { fr: 'En semaine, je me lève tôt.', en: 'During the week, I get up early.' },
          { fr: 'Le week-end, je fais la grasse matinée.', en: 'On weekends, I sleep in.' },
          { fr: 'Le samedi, je fais du sport.', en: 'On Saturdays, I do sports.' },
          { fr: 'Le dimanche, on déjeune en famille.', en: 'On Sundays, we have lunch as a family.' },
        ],
      },
      {
        id: 'quotidien-t5',
        title: 'Les tâches et les courses',
        lines: [
          { fr: 'Je fais le ménage le mercredi.', en: 'I do the cleaning on Wednesdays.' },
          { fr: 'Il faut que je passe à la pharmacie.', en: 'I need to stop by the pharmacy.' },
          { fr: 'Je fais la lessive deux fois par semaine.', en: 'I do laundry twice a week.' },
          { fr: 'On se partage les tâches ménagères.', en: 'We share the household chores.' },
        ],
      },
      {
        id: 'quotidien-t6',
        title: 'La fréquence',
        lines: [
          { fr: 'Je fais toujours du sport le matin.', en: 'I always exercise in the morning.' },
          { fr: 'Je vais parfois au cinéma le vendredi.', en: 'I sometimes go to the movies on Fridays.' },
          { fr: 'Je ne bois jamais de café le soir.', en: 'I never drink coffee in the evening.' },
          { fr: 'Je fais les courses une fois par semaine.', en: 'I do the grocery shopping once a week.' },
        ],
      },
      {
        id: 'quotidien-t7',
        title: 'Les repas de la journée',
        lines: [
          { fr: 'Je prends un café et des tartines le matin.', en: 'I have coffee and toast in the morning.' },
          { fr: 'Le midi, je mange souvent un sandwich au bureau.', en: 'At noon, I often eat a sandwich at the office.' },
          { fr: "On dîne en général vers vingt heures.", en: 'We generally have dinner around eight.' },
          { fr: 'Je grignote rarement entre les repas.', en: 'I rarely snack between meals.' },
          { fr: "Le petit-déjeuner, c'est sacré chez moi.", en: 'Breakfast is sacred for me.' },
        ],
      },
      {
        id: 'quotidien-t8',
        title: 'Les trajets du quotidien',
        lines: [
          { fr: 'Je mets vingt minutes pour aller au travail.', en: 'It takes me twenty minutes to get to work.' },
          { fr: 'Je prends le métro tous les jours.', en: 'I take the subway every day.' },
          { fr: 'Je fais le trajet à vélo quand il fait beau.', en: 'I bike there when the weather is nice.' },
          { fr: 'Les transports sont souvent bondés le matin.', en: 'The transit is often crowded in the morning.' },
          { fr: "Je profite du trajet pour écouter un podcast.", en: 'I use the commute to listen to a podcast.' },
        ],
      },
      {
        id: 'quotidien-t9',
        title: 'Les petites pauses',
        lines: [
          { fr: 'Je fais une pause café vers dix heures.', en: 'I take a coffee break around ten.' },
          { fr: 'On papote un peu à la machine à café.', en: 'We chat a bit by the coffee machine.' },
          { fr: 'Je sors marcher cinq minutes pour me changer les idées.', en: 'I go for a five-minute walk to clear my head.' },
          { fr: 'Une petite pause fait du bien entre deux réunions.', en: 'A short break feels good between two meetings.' },
          { fr: "Je m'accorde une pause déjeuner complète.", en: 'I give myself a full lunch break.' },
        ],
      },
      {
        id: 'quotidien-t10',
        title: 'Organiser sa journée',
        lines: [
          { fr: 'Je fais une liste de choses à faire chaque matin.', en: 'I make a to-do list every morning.' },
          { fr: "J'organise ma semaine le dimanche soir.", en: 'I plan my week on Sunday evening.' },
          { fr: 'Je note tout dans mon agenda.', en: 'I write everything down in my planner.' },
          { fr: 'Je priorise les tâches les plus urgentes.', en: 'I prioritize the most urgent tasks.' },
          { fr: "Un jour bien organisé est un jour réussi.", en: 'A well-organized day is a successful day.' },
        ],
      },
    ],
  },
  {
    id: 'logement',
    minLevel: 'a1',
    word: 'Le Logement',
    tag: '04 · HOME',
    glow: 'rgba(150,120,96,0.30)',
    labelFr: 'Chez soi',
    labelEn: 'Home & Living Space',
    topicFr: 'logement et maison',
    topicEn: 'housing and home',
    tracks: [
      {
        id: 'logement-t1',
        title: 'Décrire son logement',
        lines: [
          { fr: "J'habite dans un appartement de trois pièces.", en: 'I live in a three-room apartment.' },
          { fr: 'Il y a un salon, une cuisine et deux chambres.', en: 'There is a living room, a kitchen and two bedrooms.' },
          { fr: 'La cuisine donne sur un petit balcon.', en: 'The kitchen opens onto a small balcony.' },
          { fr: "C'est lumineux et bien agencé.", en: "It's bright and well laid out." },
        ],
      },
      {
        id: 'logement-t2',
        title: 'Location ou propriété',
        lines: [
          { fr: 'Vous êtes locataire ou propriétaire ?', en: 'Are you a tenant or an owner?' },
          { fr: 'Je suis locataire depuis deux ans.', en: "I've been a tenant for two years." },
          { fr: "Nous avons acheté une maison l'an dernier.", en: 'We bought a house last year.' },
          { fr: 'Le loyer augmente chaque année.', en: 'The rent goes up every year.' },
        ],
      },
      {
        id: 'logement-t3',
        title: 'Les meubles',
        lines: [
          { fr: 'Le canapé est en face de la télévision.', en: 'The sofa is facing the television.' },
          { fr: 'Il y a une étagère pleine de livres.', en: 'There is a shelf full of books.' },
          { fr: 'La table de la cuisine est en bois.', en: 'The kitchen table is made of wood.' },
          { fr: 'Mon bureau est près de la fenêtre.', en: 'My desk is near the window.' },
        ],
      },
      {
        id: 'logement-t4',
        title: 'Le bricolage',
        lines: [
          { fr: 'Le robinet fuit, il faut le réparer.', en: 'The faucet is leaking, it needs to be fixed.' },
          { fr: "J'ai repeint la chambre moi-même.", en: 'I repainted the bedroom myself.' },
          { fr: 'Il faut appeler un plombier.', en: 'We need to call a plumber.' },
          { fr: 'Je bricole un peu le week-end.', en: 'I do a bit of DIY on weekends.' },
        ],
      },
      {
        id: 'logement-t5',
        title: 'Le jardin',
        lines: [
          { fr: "J'ai un petit jardin derrière la maison.", en: 'I have a small garden behind the house.' },
          { fr: 'Je cultive des tomates et des herbes.', en: 'I grow tomatoes and herbs.' },
          { fr: 'Il faut arroser les plantes tous les soirs.', en: 'The plants need watering every evening.' },
          { fr: 'On mange souvent sur la terrasse en été.', en: 'We often eat on the terrace in summer.' },
        ],
      },
      {
        id: 'logement-t6',
        title: 'Déménager',
        lines: [
          { fr: 'Nous déménageons le mois prochain.', en: "We're moving next month." },
          { fr: "J'ai trouvé un appartement plus grand.", en: 'I found a bigger apartment.' },
          { fr: 'Il faut résilier le bail avant de partir.', en: 'The lease needs to be cancelled before leaving.' },
          { fr: 'Des amis nous aident à porter les cartons.', en: 'Friends are helping us carry the boxes.' },
        ],
      },
      {
        id: 'logement-t7',
        title: 'Le quartier',
        lines: [
          { fr: 'Le quartier est bien desservi par les transports.', en: 'The neighborhood is well served by public transit.' },
          { fr: 'Il y a une boulangerie juste en bas de chez moi.', en: 'There is a bakery right at the bottom of my building.' },
          { fr: 'Le supermarché est à cinq minutes à pied.', en: 'The supermarket is a five-minute walk away.' },
          { fr: "C'est un quartier plutôt animé le soir.", en: "It's a fairly lively neighborhood at night." },
          { fr: "J'aime vivre près du centre-ville.", en: 'I like living near downtown.' },
        ],
      },
      {
        id: 'logement-t8',
        title: "Les charges et l'entretien",
        lines: [
          { fr: 'Les charges sont comprises dans le loyer.', en: 'Utilities are included in the rent.' },
          { fr: 'La facture de chauffage est plus élevée en hiver.', en: 'The heating bill is higher in winter.' },
          { fr: 'Il faut entretenir la chaudière chaque année.', en: 'The boiler needs to be serviced every year.' },
          { fr: 'Le syndic gère les parties communes.', en: 'The property manager takes care of the common areas.' },
          { fr: 'On partage les charges avec les autres locataires.', en: 'We share the costs with the other tenants.' },
        ],
      },
      {
        id: 'logement-t9',
        title: 'La décoration',
        lines: [
          { fr: "J'aime un style plutôt minimaliste.", en: 'I like a rather minimalist style.' },
          { fr: "J'ai repeint les murs en blanc cassé.", en: 'I painted the walls off-white.' },
          { fr: 'Des plantes vertes apportent de la vie au salon.', en: 'Green plants bring life to the living room.' },
          { fr: "J'ai chiné ce miroir dans une brocante.", en: 'I found this mirror at a flea market.' },
          { fr: 'La lumière naturelle change tout dans une pièce.', en: 'Natural light changes everything in a room.' },
        ],
      },
      {
        id: 'logement-t10',
        title: 'Vivre en colocation',
        lines: [
          { fr: 'Je vis en colocation avec deux amies.', en: 'I live in a shared apartment with two friends.' },
          { fr: 'On se partage le loyer et les courses.', en: 'We split the rent and the groceries.' },
          { fr: 'Chacun fait la vaisselle à son tour.', en: 'Everyone takes turns doing the dishes.' },
          { fr: "On s'entend vraiment bien entre colocataires.", en: 'We really get along well as roommates.' },
          { fr: "Trouver un bon coloc, ce n'est pas toujours facile.", en: 'Finding a good roommate is not always easy.' },
        ],
      },
    ],
  },
  {
    id: 'travail',
    minLevel: 'a2',
    word: 'Le Travail',
    tag: '05 · WORK',
    glow: 'rgba(96,140,132,0.30)',
    labelFr: 'Le travail et les études',
    labelEn: 'Work & Education',
    topicFr: 'métier et études',
    topicEn: 'jobs and studies',
    tracks: [
      {
        id: 'travail-t1',
        title: 'Le poste',
        lines: [
          { fr: 'Que faites-vous dans la vie ?', en: 'What do you do for a living?' },
          { fr: 'Je suis infirmière dans un hôpital.', en: "I'm a nurse in a hospital." },
          { fr: "Au quotidien, je m'occupe des patients et je gère les dossiers.", en: 'Day to day, I take care of patients and manage files.' },
          { fr: 'Je travaille à temps plein.', en: 'I work full time.' },
        ],
      },
      {
        id: 'travail-t2',
        title: 'Le lieu de travail',
        lines: [
          { fr: 'Je travaille dans une petite entreprise.', en: 'I work at a small company.' },
          { fr: 'Mes collègues sont très accueillants.', en: 'My colleagues are very welcoming.' },
          { fr: 'Ma patronne est exigeante mais juste.', en: 'My boss is demanding but fair.' },
          { fr: "L'ambiance au bureau est plutôt détendue.", en: 'The atmosphere at the office is fairly relaxed.' },
        ],
      },
      {
        id: 'travail-t3',
        title: 'Le parcours professionnel',
        lines: [
          { fr: 'Pourquoi avez-vous choisi ce métier ?', en: 'Why did you choose this profession?' },
          { fr: "Je voulais aider les gens depuis toujours.", en: "I've always wanted to help people." },
          { fr: "J'ai changé de carrière il y a cinq ans.", en: 'I changed careers five years ago.' },
          { fr: 'Avant, je travaillais dans la vente.', en: 'Before, I worked in sales.' },
        ],
      },
      {
        id: 'travail-t4',
        title: 'Les études',
        lines: [
          { fr: "Qu'est-ce que vous avez étudié ?", en: 'What did you study?' },
          { fr: "J'ai étudié la biologie à l'université.", en: 'I studied biology at university.' },
          { fr: 'Mes matières préférées étaient les sciences.', en: 'My favorite subjects were the sciences.' },
          { fr: "J'ai obtenu mon diplôme il y a quatre ans.", en: 'I got my degree four years ago.' },
        ],
      },
      {
        id: 'travail-t5',
        title: 'Compétences et qualifications',
        lines: [
          { fr: 'Quelles sont vos compétences ?', en: 'What are your skills?' },
          { fr: 'Je parle couramment anglais et espagnol.', en: 'I speak English and Spanish fluently.' },
          { fr: 'Je maîtrise plusieurs logiciels de gestion.', en: 'I am proficient in several management software tools.' },
          { fr: "J'ai un bon sens de l'organisation.", en: 'I have a good sense of organization.' },
        ],
      },
      {
        id: 'travail-t6',
        title: "La recherche d'emploi",
        lines: [
          { fr: 'Parlez-moi de votre expérience.', en: 'Tell me about your experience.' },
          { fr: "J'ai envoyé plusieurs candidatures ce mois-ci.", en: 'I sent several applications this month.' },
          { fr: "J'ai un entretien d'embauche demain.", en: 'I have a job interview tomorrow.' },
          { fr: 'Voici mon CV et ma lettre de motivation.', en: 'Here is my resume and cover letter.' },
        ],
      },
      {
        id: 'travail-t7',
        title: "L'avenir professionnel",
        lines: [
          { fr: 'Où vous voyez-vous dans cinq ans ?', en: 'Where do you see yourself in five years?' },
          { fr: "J'aimerais monter ma propre entreprise.", en: 'I would like to start my own business.' },
          { fr: 'Je compte évoluer vers un poste de direction.', en: 'I plan to move into a management position.' },
          { fr: "J'espère me spécialiser davantage.", en: 'I hope to specialize further.' },
        ],
      },
      {
        id: 'travail-t8',
        title: 'La formation continue',
        lines: [
          { fr: "Je suis une formation en ligne le soir.", en: "I'm taking an online course in the evenings." },
          { fr: "L'entreprise finance mes formations.", en: 'The company funds my training.' },
          { fr: 'Je voudrais obtenir une certification supplémentaire.', en: 'I would like to get an additional certification.' },
          { fr: "Se former régulièrement, c'est important dans mon métier.", en: 'Training regularly is important in my field.' },
          { fr: "J'ai suivi un séminaire la semaine dernière.", en: 'I attended a seminar last week.' },
        ],
      },
      {
        id: 'travail-t9',
        title: 'L\'équilibre vie pro-perso',
        lines: [
          { fr: 'Je fais attention à mon équilibre vie professionnelle et vie privée.', en: 'I pay attention to my work-life balance.' },
          { fr: "Je ne réponds pas aux mails après dix-huit heures.", en: "I don't answer emails after six in the evening." },
          { fr: "J'essaie de ne pas ramener de travail à la maison.", en: 'I try not to bring work home.' },
          { fr: "Prendre des congés régulièrement, c'est essentiel.", en: 'Taking time off regularly is essential.' },
          { fr: 'Le week-end, je déconnecte complètement.', en: 'On weekends, I completely disconnect.' },
        ],
      },
      {
        id: 'travail-t10',
        title: 'Le télétravail',
        lines: [
          { fr: 'Je télétravaille deux jours par semaine.', en: 'I work remotely two days a week.' },
          { fr: 'On organise une visioconférence chaque matin.', en: 'We hold a video call every morning.' },
          { fr: "J'ai aménagé un coin bureau chez moi.", en: 'I set up a home office corner.' },
          { fr: 'Travailler de chez soi demande de la discipline.', en: 'Working from home requires discipline.' },
          { fr: "Je préfère le bureau pour garder le contact avec l'équipe.", en: 'I prefer the office to stay in touch with the team.' },
        ],
      },
    ],
  },
  {
    id: 'table',
    minLevel: 'a1',
    word: 'La Table',
    tag: '06 · FOOD',
    glow: 'rgba(190,120,90,0.30)',
    labelFr: 'À table',
    labelEn: 'Food & Dining',
    topicFr: 'repas et cuisine',
    topicEn: 'meals and cooking',
    tracks: [
      {
        id: 'table-t1',
        title: 'Au restaurant',
        lines: [
          { fr: "Une table pour deux, s'il vous plaît.", en: 'A table for two, please.' },
          { fr: "Qu'est-ce que vous me conseillez ?", en: 'What do you recommend?' },
          { fr: 'Je vais prendre le menu du jour.', en: "I'll have the set menu." },
          { fr: "L'addition, s'il vous plaît.", en: 'The check, please.' },
        ],
      },
      {
        id: 'table-t2',
        title: 'Faire les courses',
        lines: [
          { fr: 'Je vais au marché le samedi matin.', en: 'I go to the market on Saturday mornings.' },
          { fr: 'Il me faut des fruits et des légumes frais.', en: 'I need fresh fruits and vegetables.' },
          { fr: "C'est combien le kilo de tomates ?", en: 'How much is a kilo of tomatoes?' },
          { fr: 'Je fais mes courses au supermarché du coin.', en: 'I do my shopping at the corner supermarket.' },
        ],
      },
      {
        id: 'table-t3',
        title: 'Cuisiner',
        lines: [
          { fr: "J'aime bien cuisiner le week-end.", en: 'I like to cook on weekends.' },
          { fr: "Ma recette préférée, c'est le poulet rôti.", en: 'My favorite recipe is roast chicken.' },
          { fr: 'Il faut laisser mijoter vingt minutes.', en: 'It needs to simmer for twenty minutes.' },
          { fr: 'Je suis les recettes de ma grand-mère.', en: "I follow my grandmother's recipes." },
        ],
      },
      {
        id: 'table-t4',
        title: 'Régimes et allergies',
        lines: [
          { fr: 'Je suis végétarien.', en: "I'm vegetarian." },
          { fr: 'Je suis allergique aux fruits de mer.', en: "I'm allergic to seafood." },
          { fr: 'Est-ce que ce plat contient des noix ?', en: 'Does this dish contain nuts?' },
          { fr: 'Je fais attention au sucre.', en: 'I watch my sugar intake.' },
        ],
      },
      {
        id: 'table-t5',
        title: 'Manger dehors ou à la maison',
        lines: [
          { fr: 'On mange dehors une fois par semaine.', en: 'We eat out once a week.' },
          { fr: "Je préfère cuisiner à la maison, c'est moins cher.", en: "I prefer cooking at home, it's cheaper." },
          { fr: 'Le vendredi, on commande souvent une pizza.', en: 'On Fridays, we often order pizza.' },
          { fr: 'Rien ne vaut un bon repas fait maison.', en: 'Nothing beats a good home-cooked meal.' },
        ],
      },
      {
        id: 'table-t6',
        title: 'Recevoir à table',
        lines: [
          { fr: 'Ce soir, je reçois des amis à dîner.', en: "Tonight, I'm having friends over for dinner." },
          { fr: 'Servez-vous, je vous en prie.', en: 'Help yourself, please.' },
          { fr: 'Bon appétit !', en: 'Enjoy your meal!' },
          { fr: "Merci de m'avoir invité, c'était délicieux.", en: "Thank you for having me, it was delicious." },
        ],
      },
      {
        id: 'table-t7',
        title: 'Le petit-déjeuner',
        lines: [
          { fr: 'Je prends un café noir et un croissant.', en: 'I have a black coffee and a croissant.' },
          { fr: "Le petit-déjeuner français est plutôt léger.", en: 'The French breakfast is fairly light.' },
          { fr: "J'aime tartiner mon pain de confiture.", en: 'I like to spread jam on my bread.' },
          { fr: 'On prend parfois des œufs le week-end.', en: 'We sometimes have eggs on weekends.' },
          { fr: 'Un bon café me réveille vraiment.', en: 'A good coffee really wakes me up.' },
        ],
      },
      {
        id: 'table-t8',
        title: 'Le café et les boissons',
        lines: [
          { fr: "Un café allongé, s'il vous plaît.", en: 'A long black coffee, please.' },
          { fr: 'Vous prenez du sucre avec votre thé ?', en: 'Do you take sugar with your tea?' },
          { fr: "Je bois beaucoup d'eau dans la journée.", en: 'I drink a lot of water during the day.' },
          { fr: 'Un verre de vin rouge avec le fromage, ça se fait bien.', en: 'A glass of red wine with cheese goes really well.' },
          { fr: "Je ne bois pas d'alcool, un jus de fruit suffira.", en: "I don't drink alcohol, a fruit juice will do." },
        ],
      },
      {
        id: 'table-t9',
        title: 'Les spécialités régionales',
        lines: [
          { fr: "La spécialité de la région, c'est la raclette.", en: 'The specialty of the region is raclette.' },
          { fr: 'Chaque région a ses propres plats traditionnels.', en: 'Each region has its own traditional dishes.' },
          { fr: "J'adore la bouillabaisse quand je suis à Marseille.", en: 'I love bouillabaisse when I am in Marseille.' },
          { fr: 'Il faut absolument goûter les crêpes en Bretagne.', en: 'You absolutely must try crepes in Brittany.' },
          { fr: 'Cette recette se transmet de génération en génération.', en: 'This recipe is passed down from generation to generation.' },
        ],
      },
      {
        id: 'table-t10',
        title: 'Au bar',
        lines: [
          { fr: 'On se retrouve au bar après le travail ?', en: 'Shall we meet at the bar after work?' },
          { fr: "Qu'est-ce que tu prends ?", en: 'What are you having?' },
          { fr: "Une bière pression, s'il vous plaît.", en: 'A draft beer, please.' },
          { fr: "C'est ma tournée ce soir.", en: "It's my round tonight." },
          { fr: 'Santé !', en: 'Cheers!' },
        ],
      },
    ],
  },
  {
    id: 'achats',
    minLevel: 'a2',
    word: 'Les Achats',
    tag: '07 · SHOPPING',
    glow: 'rgba(180,130,150,0.28)',
    labelFr: 'Faire les courses',
    labelEn: 'Shopping & Money',
    topicFr: 'courses et argent',
    topicEn: 'shopping and money',
    tracks: [
      {
        id: 'achats-t1',
        title: 'Acheter des vêtements',
        lines: [
          { fr: "Je cherche une taille moyenne.", en: "I'm looking for a medium size." },
          { fr: 'Est-ce que je peux essayer cette veste ?', en: 'Can I try on this jacket?' },
          { fr: "La cabine d'essayage est au fond à droite.", en: 'The fitting room is at the back on the right.' },
          { fr: 'Puis-je échanger cet article ?', en: 'Can I exchange this item?' },
        ],
      },
      {
        id: 'achats-t2',
        title: 'Les courses au quotidien',
        lines: [
          { fr: "C'est combien, s'il vous plaît ?", en: 'How much is it, please?' },
          { fr: "C'est un peu cher, vous avez moins cher ?", en: "That's a bit expensive, do you have anything cheaper?" },
          { fr: 'Il y a une promotion sur ce produit.', en: 'There is a discount on this product.' },
          { fr: 'Gardez votre ticket de caisse.', en: 'Keep your receipt.' },
        ],
      },
      {
        id: 'achats-t3',
        title: 'Payer',
        lines: [
          { fr: 'Vous payez comment ? Carte ou espèces ?', en: 'How are you paying? Card or cash?' },
          { fr: 'Je vais payer par carte.', en: "I'll pay by card." },
          { fr: "Je fais attention à mon budget ce mois-ci.", en: "I'm watching my budget this month." },
          { fr: 'Vous acceptez les paiements sans contact ?', en: 'Do you accept contactless payments?' },
        ],
      },
      {
        id: 'achats-t4',
        title: 'La banque',
        lines: [
          { fr: 'Je voudrais ouvrir un compte bancaire.', en: 'I would like to open a bank account.' },
          { fr: "J'ai reçu ma facture d'électricité.", en: 'I received my electricity bill.' },
          { fr: 'Il faut que je paie le loyer avant le cinq.', en: 'I need to pay the rent before the fifth.' },
          { fr: 'Mon virement a été retardé.', en: 'My bank transfer was delayed.' },
        ],
      },
      {
        id: 'achats-t5',
        title: 'Comparer les prix',
        lines: [
          { fr: 'Ce modèle-ci est moins cher que celui-là.', en: 'This model is cheaper than that one.' },
          { fr: 'Le prix a beaucoup augmenté cette année.', en: 'The price has gone up a lot this year.' },
          { fr: "C'est le meilleur rapport qualité-prix.", en: 'This is the best value for money.' },
          { fr: "Ça vaut vraiment le coup.", en: "It's really worth it." },
        ],
      },
      {
        id: 'achats-t6',
        title: 'Les soldes et promotions',
        lines: [
          { fr: 'Les soldes commencent la semaine prochaine.', en: 'The sales start next week.' },
          { fr: 'Il y a moins cinquante pour cent sur tout le magasin.', en: 'There is fifty percent off the whole store.' },
          { fr: "J'attends les soldes pour acheter un manteau.", en: 'I am waiting for the sales to buy a coat.' },
          { fr: "Cette offre est valable jusqu'à dimanche.", en: 'This offer is valid until Sunday.' },
          { fr: "C'est une bonne affaire, je le prends.", en: "It's a good deal, I'll take it." },
        ],
      },
      {
        id: 'achats-t7',
        title: 'Faire du shopping en ligne',
        lines: [
          { fr: "J'ai commandé ça en ligne hier soir.", en: 'I ordered that online last night.' },
          { fr: 'La livraison prend environ trois jours.', en: 'Delivery takes about three days.' },
          { fr: 'Le colis est arrivé endommagé.', en: 'The package arrived damaged.' },
          { fr: 'Je peux suivre ma commande sur le site.', en: 'I can track my order on the website.' },
          { fr: 'Les frais de livraison sont gratuits au-dessus de trente euros.', en: 'Shipping is free above thirty euros.' },
        ],
      },
      {
        id: 'achats-t8',
        title: 'Rendre ou échanger un article',
        lines: [
          { fr: "Je voudrais rendre cet article, il ne me va pas.", en: 'I would like to return this item, it does not fit me.' },
          { fr: 'Avez-vous le ticket de caisse ?', en: 'Do you have the receipt?' },
          { fr: 'Vous pouvez être remboursé ou faire un échange.', en: 'You can be refunded or make an exchange.' },
          { fr: "L'article était encore sous garantie.", en: 'The item was still under warranty.' },
          { fr: 'Le remboursement prendra quelques jours.', en: 'The refund will take a few days.' },
        ],
      },
      {
        id: 'achats-t9',
        title: 'Le marché aux puces et la seconde main',
        lines: [
          { fr: "J'aime chiner au marché aux puces le dimanche.", en: 'I like browsing the flea market on Sundays.' },
          { fr: 'Vous pouvez baisser un peu le prix ?', en: 'Can you lower the price a bit?' },
          { fr: "J'achète souvent mes vêtements en seconde main.", en: 'I often buy my clothes second-hand.' },
          { fr: "C'est plus économique et plus écologique.", en: "It's cheaper and more eco-friendly." },
          { fr: "J'ai trouvé une belle lampe pour presque rien.", en: 'I found a nice lamp for almost nothing.' },
        ],
      },
      {
        id: 'achats-t10',
        title: 'Offrir un cadeau',
        lines: [
          { fr: "Je cherche un cadeau pour l'anniversaire de ma sœur.", en: "I'm looking for a gift for my sister's birthday." },
          { fr: 'Vous avez un budget en tête ?', en: 'Do you have a budget in mind?' },
          { fr: 'Pouvez-vous me faire un paquet cadeau ?', en: 'Can you gift-wrap it for me?' },
          { fr: "J'aimerais joindre une carte.", en: 'I would like to include a card.' },
          { fr: "J'espère que ça lui plaira.", en: 'I hope they will like it.' },
        ],
      },
    ],
  },
  {
    id: 'sante',
    minLevel: 'a2',
    word: 'La Santé',
    tag: '08 · HEALTH',
    glow: 'rgba(120,168,140,0.30)',
    labelFr: 'La santé et le corps',
    labelEn: 'Health & Body',
    topicFr: 'corps et bien-être',
    topicEn: 'body and wellbeing',
    tracks: [
      {
        id: 'sante-t1',
        title: 'Décrire les symptômes',
        lines: [
          { fr: "J'ai mal à la tête.", en: 'I have a headache.' },
          { fr: "J'ai de la fièvre depuis hier.", en: "I've had a fever since yesterday." },
          { fr: "Je tousse et j'ai le nez bouché.", en: 'I have a cough and a stuffy nose.' },
          { fr: "J'ai mal au ventre depuis ce matin.", en: 'My stomach has hurt since this morning.' },
        ],
      },
      {
        id: 'sante-t2',
        title: 'Chez le médecin',
        lines: [
          { fr: 'Je voudrais prendre rendez-vous avec le médecin.', en: 'I would like to make an appointment with the doctor.' },
          { fr: 'Vous êtes disponible mardi à quatorze heures ?', en: 'Are you available Tuesday at two?' },
          { fr: "Depuis quand avez-vous ces symptômes ?", en: 'How long have you had these symptoms?' },
          { fr: "Le médecin m'a prescrit des antibiotiques.", en: 'The doctor prescribed me antibiotics.' },
        ],
      },
      {
        id: 'sante-t3',
        title: 'À la pharmacie',
        lines: [
          { fr: "Avez-vous quelque chose contre le mal de tête ?", en: 'Do you have something for headaches?' },
          { fr: 'Voici mon ordonnance.', en: 'Here is my prescription.' },
          { fr: 'Prenez un comprimé matin et soir.', en: 'Take one tablet morning and evening.' },
          { fr: "C'est remboursé par la sécurité sociale ?", en: 'Is this reimbursed by social security?' },
        ],
      },
      {
        id: 'sante-t4',
        title: 'Bien-être et stress',
        lines: [
          { fr: 'Je me sens un peu stressé en ce moment.', en: 'I feel a bit stressed right now.' },
          { fr: 'Je dors mal depuis quelques semaines.', en: "I've been sleeping poorly for a few weeks." },
          { fr: 'Je fais de la méditation pour me détendre.', en: 'I meditate to relax.' },
          { fr: 'Il faut que je prenne soin de moi.', en: 'I need to take care of myself.' },
        ],
      },
      {
        id: 'sante-t5',
        title: 'Le sport et la forme',
        lines: [
          { fr: 'Je fais du sport trois fois par semaine.', en: 'I exercise three times a week.' },
          { fr: 'Je cours dix kilomètres le dimanche.', en: 'I run ten kilometers on Sundays.' },
          { fr: 'Je vais à la salle de sport après le travail.', en: 'I go to the gym after work.' },
          { fr: 'Rester actif me fait beaucoup de bien.', en: 'Staying active does me a lot of good.' },
        ],
      },
      {
        id: 'sante-t6',
        title: 'Les urgences',
        lines: [
          { fr: "Appelez une ambulance, s'il vous plaît !", en: 'Call an ambulance, please!' },
          { fr: 'Il y a eu un accident sur la route.', en: 'There has been an accident on the road.' },
          { fr: 'Elle est tombée et elle ne peut plus marcher.', en: 'She fell and can no longer walk.' },
          { fr: "Quel est le numéro des urgences ?", en: 'What is the emergency number?' },
        ],
      },
      {
        id: 'sante-t7',
        title: 'Chez le dentiste',
        lines: [
          { fr: "J'ai rendez-vous chez le dentiste demain.", en: 'I have a dentist appointment tomorrow.' },
          { fr: "J'ai mal aux dents depuis deux jours.", en: 'My teeth have hurt for two days.' },
          { fr: "Ouvrez grand, s'il vous plaît.", en: 'Open wide, please.' },
          { fr: 'Il faut faire un détartrage.', en: 'You need a cleaning.' },
          { fr: 'Je me brosse les dents deux fois par jour.', en: 'I brush my teeth twice a day.' },
        ],
      },
      {
        id: 'sante-t8',
        title: "L'hôpital et les examens",
        lines: [
          { fr: 'Je dois passer une prise de sang demain.', en: 'I need to have a blood test tomorrow.' },
          { fr: "L'infirmière m'a pris la tension.", en: 'The nurse took my blood pressure.' },
          { fr: "J'ai un rendez-vous pour un examen à l'hôpital.", en: 'I have an appointment for a test at the hospital.' },
          { fr: 'Les résultats seront prêts dans une semaine.', en: 'The results will be ready in a week.' },
          { fr: "On m'a gardé en observation une nuit.", en: 'I was kept for observation overnight.' },
        ],
      },
      {
        id: 'sante-t9',
        title: 'Le sommeil',
        lines: [
          { fr: 'Je dors environ sept heures par nuit.', en: 'I sleep about seven hours a night.' },
          { fr: "J'ai du mal à m'endormir en ce moment.", en: 'I have trouble falling asleep right now.' },
          { fr: 'Je me couche toujours à la même heure.', en: 'I always go to bed at the same time.' },
          { fr: "Éviter les écrans le soir aide à mieux dormir.", en: 'Avoiding screens in the evening helps you sleep better.' },
          { fr: "Je fais souvent une sieste l'après-midi.", en: 'I often take a nap in the afternoon.' },
        ],
      },
      {
        id: 'sante-t10',
        title: "L'alimentation saine",
        lines: [
          { fr: "J'essaie de manger équilibré.", en: 'I try to eat a balanced diet.' },
          { fr: 'Je mange cinq fruits et légumes par jour.', en: 'I eat five fruits and vegetables a day.' },
          { fr: 'Je réduis le sucre et les plats industriels.', en: 'I am cutting down on sugar and processed foods.' },
          { fr: "Boire assez d'eau, c'est essentiel.", en: 'Drinking enough water is essential.' },
          { fr: 'Je cuisine maison le plus souvent possible.', en: 'I cook at home as often as possible.' },
        ],
      },
    ],
  },
  {
    id: 'meteo',
    minLevel: 'a1',
    word: 'La Météo',
    tag: '09 · WEATHER',
    glow: 'rgba(110,150,190,0.28)',
    labelFr: 'Le temps qu\'il fait',
    labelEn: 'Weather & Environment',
    topicFr: 'météo et nature',
    topicEn: 'weather and nature',
    tracks: [
      {
        id: 'meteo-t1',
        title: "Aujourd'hui",
        lines: [
          { fr: "Quel temps fait-il aujourd'hui ?", en: 'What is the weather like today?' },
          { fr: 'Il fait beau et il y a du soleil.', en: 'It is sunny and beautiful out.' },
          { fr: 'Il pleut depuis ce matin.', en: 'It has been raining since this morning.' },
          { fr: 'La météo annonce de la neige pour demain.', en: 'The forecast says snow for tomorrow.' },
        ],
      },
      {
        id: 'meteo-t2',
        title: 'Les saisons',
        lines: [
          { fr: "En été, il fait très chaud dans le sud.", en: 'In summer, it is very hot in the south.' },
          { fr: "L'automne est ma saison préférée.", en: 'Autumn is my favorite season.' },
          { fr: "En hiver, il fait froid et il neige souvent.", en: 'In winter, it is cold and it often snows.' },
          { fr: 'Le printemps arrive, les fleurs poussent.', en: 'Spring is coming, the flowers are growing.' },
        ],
      },
      {
        id: 'meteo-t3',
        title: 'Comparer les climats',
        lines: [
          { fr: "Ici, il pleut plus qu'au sud.", en: 'Here, it rains more than in the south.' },
          { fr: 'Le climat est plus doux près de la mer.', en: 'The climate is milder near the sea.' },
          { fr: 'Chez moi, les hivers sont bien plus froids.', en: 'Back home, the winters are much colder.' },
          { fr: 'Je préfère un climat tempéré.', en: 'I prefer a temperate climate.' },
        ],
      },
      {
        id: 'meteo-t4',
        title: 'La nature',
        lines: [
          { fr: "La forêt est magnifique en automne.", en: 'The forest is beautiful in autumn.' },
          { fr: 'On a vu des chevreuils dans le champ.', en: 'We saw deer in the field.' },
          { fr: 'La montagne est couverte de neige.', en: 'The mountain is covered in snow.' },
          { fr: 'La rivière traverse tout le village.', en: 'The river runs through the whole village.' },
        ],
      },
      {
        id: 'meteo-t5',
        title: "L'écologie",
        lines: [
          { fr: 'Il faut trier les déchets.', en: 'We need to sort our waste.' },
          { fr: "Le réchauffement climatique m'inquiète.", en: 'Climate change worries me.' },
          { fr: "J'essaie de réduire mes déchets plastiques.", en: 'I try to reduce my plastic waste.' },
          { fr: 'On devrait tous consommer de manière plus responsable.', en: 'We should all consume more responsibly.' },
        ],
      },
      {
        id: 'meteo-t6',
        title: 'Les vêtements selon la météo',
        lines: [
          { fr: 'Il fait froid, prends un manteau.', en: 'It is cold, take a coat.' },
          { fr: "S'il pleut, n'oublie pas ton parapluie.", en: 'If it rains, do not forget your umbrella.' },
          { fr: 'En été, je porte des vêtements légers.', en: 'In summer, I wear light clothes.' },
          { fr: 'Il vaut mieux se couvrir, le vent est glacial.', en: 'It is better to bundle up, the wind is freezing.' },
          { fr: 'Mets de la crème solaire, il fait très chaud.', en: 'Put on sunscreen, it is very hot.' },
        ],
      },
      {
        id: 'meteo-t7',
        title: 'Les intempéries',
        lines: [
          { fr: 'Un orage violent est annoncé ce soir.', en: 'A violent storm is forecast tonight.' },
          { fr: "Le vent souffle très fort aujourd'hui.", en: 'The wind is blowing very hard today.' },
          { fr: 'Les routes sont inondées après la pluie.', en: 'The roads are flooded after the rain.' },
          { fr: 'Il y a eu une tempête de neige dans le nord.', en: 'There was a snowstorm in the north.' },
          { fr: 'Restez chez vous, la tempête approche.', en: 'Stay home, the storm is coming.' },
        ],
      },
      {
        id: 'meteo-t8',
        title: 'Les animaux et la nature sauvage',
        lines: [
          { fr: 'On a aperçu un renard près de la forêt.', en: 'We spotted a fox near the forest.' },
          { fr: 'Les oiseaux chantent tôt le matin au printemps.', en: 'Birds sing early in the morning in spring.' },
          { fr: "Certaines espèces hibernent pendant l'hiver.", en: 'Some species hibernate during the winter.' },
          { fr: "La faune locale s'adapte bien au climat.", en: 'The local wildlife adapts well to the climate.' },
          { fr: 'Il faut protéger les habitats naturels.', en: 'Natural habitats need to be protected.' },
        ],
      },
      {
        id: 'meteo-t9',
        title: 'Le jardin selon la saison',
        lines: [
          { fr: 'On plante les tomates au printemps.', en: 'We plant tomatoes in spring.' },
          { fr: 'En automne, on ramasse les feuilles mortes.', en: 'In autumn, we rake up the dead leaves.' },
          { fr: "L'hiver, le jardin est au repos.", en: 'In winter, the garden is at rest.' },
          { fr: 'Il faut arroser davantage pendant la canicule.', en: 'You need to water more during a heatwave.' },
          { fr: 'Les fleurs poussent bien avec ce climat doux.', en: 'The flowers grow well in this mild climate.' },
        ],
      },
      {
        id: 'meteo-t10',
        title: 'Prévoir une sortie selon la météo',
        lines: [
          { fr: 'On regarde la météo avant de partir en randonnée.', en: 'We check the weather before going hiking.' },
          { fr: "S'il fait beau, on ira à la plage demain.", en: 'If the weather is nice, we will go to the beach tomorrow.' },
          { fr: 'Le pique-nique est annulé à cause de la pluie.', en: 'The picnic is cancelled because of the rain.' },
          { fr: 'Mieux vaut prévoir un plan B en cas de mauvais temps.', en: 'It is better to have a backup plan in case of bad weather.' },
          { fr: "On a de la chance, il fait un temps magnifique.", en: 'We are lucky, the weather is magnificent.' },
        ],
      },
    ],
  },
  {
    id: 'voyage',
    minLevel: 'a2',
    word: 'Le Voyage',
    tag: '10 · TRAVEL',
    glow: 'rgba(190,160,90,0.30)',
    labelFr: 'Se déplacer',
    labelEn: 'Travel & Getting Around',
    topicFr: 'transports et voyages',
    topicEn: 'transport and travel',
    tracks: [
      {
        id: 'voyage-t1',
        title: 'Demander son chemin',
        lines: [
          { fr: 'Excusez-moi, comment aller à la gare ?', en: 'Excuse me, how do I get to the station?' },
          { fr: 'Continuez tout droit, puis tournez à gauche.', en: 'Keep going straight, then turn left.' },
          { fr: "C'est loin d'ici ?", en: 'Is it far from here?' },
          { fr: "C'est à dix minutes à pied.", en: "It's a ten-minute walk." },
        ],
      },
      {
        id: 'voyage-t2',
        title: 'Les transports',
        lines: [
          { fr: "Un ticket pour le centre-ville, s'il vous plaît.", en: 'A ticket to downtown, please.' },
          { fr: 'Le bus passe toutes les dix minutes.', en: 'The bus comes every ten minutes.' },
          { fr: 'Je préfère prendre un taxi le soir.', en: 'I prefer to take a taxi at night.' },
          { fr: 'Je conduis rarement en ville.', en: 'I rarely drive in the city.' },
        ],
      },
      {
        id: 'voyage-t3',
        title: 'Réserver un hébergement',
        lines: [
          { fr: "J'aimerais réserver une chambre pour deux nuits.", en: 'I would like to book a room for two nights.' },
          { fr: 'Le petit-déjeuner est-il inclus ?', en: 'Is breakfast included?' },
          { fr: "À quelle heure est l'arrivée ?", en: 'What time is check-in?' },
          { fr: 'Je voudrais annuler ma réservation.', en: 'I would like to cancel my reservation.' },
        ],
      },
      {
        id: 'voyage-t4',
        title: "À l'aéroport",
        lines: [
          { fr: "Où se trouve l'enregistrement des bagages ?", en: 'Where is baggage check-in?' },
          { fr: 'Le vol a du retard.', en: 'The flight is delayed.' },
          { fr: 'Le train part du quai numéro trois.', en: 'The train leaves from platform three.' },
          { fr: "Votre passeport, s'il vous plaît.", en: 'Your passport, please.' },
        ],
      },
      {
        id: 'voyage-t5',
        title: 'Le tourisme',
        lines: [
          { fr: 'Nous avons visité le musée toute la matinée.', en: 'We visited the museum all morning.' },
          { fr: "C'était un voyage inoubliable.", en: 'It was an unforgettable trip.' },
          { fr: "On a fait le tour de la vieille ville à pied.", en: 'We walked around the old town.' },
          { fr: 'Je recommande vraiment cet endroit.', en: 'I really recommend this place.' },
        ],
      },
      {
        id: 'voyage-t6',
        title: 'Les imprévus du voyage',
        lines: [
          { fr: "J'ai perdu ma valise à l'aéroport.", en: 'I lost my suitcase at the airport.' },
          { fr: "J'ai raté ma correspondance.", en: 'I missed my connection.' },
          { fr: 'Le vol a été annulé à la dernière minute.', en: 'The flight was cancelled at the last minute.' },
          { fr: "Pouvez-vous m'aider à retrouver mes bagages ?", en: 'Can you help me find my luggage?' },
        ],
      },
      {
        id: 'voyage-t7',
        title: 'Louer une voiture',
        lines: [
          { fr: "Je voudrais louer une voiture pour trois jours.", en: 'I would like to rent a car for three days.' },
          { fr: "L'assurance est-elle incluse ?", en: 'Is insurance included?' },
          { fr: 'Le plein est-il fait ?', en: 'Is the tank full?' },
          { fr: 'Où dois-je rendre le véhicule ?', en: 'Where should I return the vehicle?' },
          { fr: 'Puis-je avoir un GPS avec la voiture ?', en: 'Can I have a GPS with the car?' },
        ],
      },
      {
        id: 'voyage-t8',
        title: 'Passer la douane',
        lines: [
          { fr: "Avez-vous quelque chose à déclarer ?", en: 'Do you have anything to declare?' },
          { fr: 'Non, rien à déclarer.', en: 'No, nothing to declare.' },
          { fr: 'Quel est le motif de votre voyage ?', en: 'What is the purpose of your trip?' },
          { fr: "Je suis ici pour affaires.", en: "I'm here on business." },
          { fr: 'Combien de temps comptez-vous rester ?', en: 'How long do you plan to stay?' },
        ],
      },
      {
        id: 'voyage-t9',
        title: 'Voyager en groupe ou en solo',
        lines: [
          { fr: "Je préfère voyager seul, je suis plus libre.", en: 'I prefer to travel alone, I have more freedom.' },
          { fr: "Voyager en groupe, c'est plus sécurisant.", en: 'Traveling in a group feels safer.' },
          { fr: "On a organisé le voyage entre amis.", en: 'We organized the trip among friends.' },
          { fr: "Chacun paie sa part du budget.", en: 'Everyone pays their share of the budget.' },
          { fr: "J'aime rencontrer d'autres voyageurs en chemin.", en: 'I like meeting other travelers along the way.' },
        ],
      },
      {
        id: 'voyage-t10',
        title: 'Partager ses photos de voyage',
        lines: [
          { fr: 'Regarde les photos de notre voyage !', en: 'Look at the photos from our trip!' },
          { fr: "Ce coucher de soleil était incroyable.", en: 'That sunset was incredible.' },
          { fr: "On a pris cette photo devant la cathédrale.", en: 'We took this photo in front of the cathedral.' },
          { fr: "Je t'envoie l'album dès que possible.", en: "I'll send you the album as soon as possible." },
          { fr: 'Ce voyage restera gravé dans ma mémoire.', en: 'This trip will stay etched in my memory.' },
        ],
      },
    ],
  },
  {
    id: 'loisirs',
    minLevel: 'a2',
    word: 'Les Loisirs',
    tag: '11 · LEISURE',
    glow: 'rgba(150,110,170,0.30)',
    labelFr: 'Loisirs et passions',
    labelEn: 'Leisure, Hobbies & Interests',
    topicFr: 'hobbies et sorties',
    topicEn: 'hobbies and outings',
    tracks: [
      {
        id: 'loisirs-t1',
        title: 'Goûts et préférences',
        lines: [
          { fr: "Qu'est-ce que vous aimez faire pendant votre temps libre ?", en: 'What do you like doing in your free time?' },
          { fr: "J'adore lire des romans policiers.", en: 'I love reading detective novels.' },
          { fr: "Je n'aime pas trop le sport en général.", en: "I don't really like sports in general." },
          { fr: 'Je préfère de loin la montagne à la plage.', en: 'I much prefer the mountains to the beach.' },
        ],
      },
      {
        id: 'loisirs-t2',
        title: 'Les passe-temps',
        lines: [
          { fr: 'Je joue de la guitare depuis dix ans.', en: 'I have been playing guitar for ten years.' },
          { fr: 'Je fais de la peinture le week-end.', en: 'I paint on weekends.' },
          { fr: 'Je joue aux jeux vidéo pour me détendre.', en: 'I play video games to relax.' },
          { fr: 'Le tricot me permet de me vider la tête.', en: 'Knitting helps me clear my mind.' },
        ],
      },
      {
        id: 'loisirs-t3',
        title: 'Films, livres et musique',
        lines: [
          { fr: 'Mon film préféré est une comédie française.', en: 'My favorite movie is a French comedy.' },
          { fr: "J'écoute surtout du jazz et de la chanson française.", en: 'I mostly listen to jazz and French songs.' },
          { fr: "Le dernier livre que j'ai lu m'a beaucoup marqué.", en: 'The last book I read really stayed with me.' },
          { fr: 'Vous avez vu la nouvelle série sur Netflix ?', en: 'Have you seen the new show on Netflix?' },
        ],
      },
      {
        id: 'loisirs-t4',
        title: 'Sorties culturelles',
        lines: [
          { fr: "On va au musée d'art moderne ce week-end.", en: "We're going to the modern art museum this weekend." },
          { fr: "L'exposition sur l'impressionnisme est superbe.", en: 'The exhibition on Impressionism is superb.' },
          { fr: 'On a réservé des places pour le théâtre.', en: 'We booked tickets for the theater.' },
          { fr: 'Le concert commence à vingt heures.', en: 'The concert starts at eight in the evening.' },
        ],
      },
      {
        id: 'loisirs-t5',
        title: 'Le week-end et les vacances',
        lines: [
          { fr: "Comment s'est passé votre week-end ?", en: 'How was your weekend?' },
          { fr: 'On est partis à la campagne deux jours.', en: 'We went to the countryside for two days.' },
          { fr: 'Pendant les vacances, je me repose vraiment.', en: 'During the holidays, I really rest.' },
          { fr: "On part en vacances en Italie cet été.", en: "We're going on vacation to Italy this summer." },
        ],
      },
      {
        id: 'loisirs-t6',
        title: 'Faire des projets',
        lines: [
          { fr: 'Qu\'est-ce que tu veux faire ce soir ?', en: 'What do you want to do tonight?' },
          { fr: 'On pourrait aller au cinéma.', en: 'We could go to the movies.' },
          { fr: "Ça te dit d'aller boire un verre ?", en: 'Do you feel like going for a drink?' },
          { fr: 'On se retrouve devant le café à dix-neuf heures.', en: "Let's meet in front of the café at seven." },
        ],
      },
      {
        id: 'loisirs-t7',
        title: 'Le sport en tant que loisir',
        lines: [
          { fr: 'Je joue au foot avec des amis le dimanche.', en: 'I play soccer with friends on Sundays.' },
          { fr: "On fait partie d'un club de tennis.", en: 'We are part of a tennis club.' },
          { fr: 'Je préfère les sports en plein air.', en: 'I prefer outdoor sports.' },
          { fr: "L'esprit d'équipe, c'est ce que j'aime le plus.", en: 'Team spirit is what I love most.' },
          { fr: "On s'entraîne deux fois par semaine.", en: 'We train twice a week.' },
        ],
      },
      {
        id: 'loisirs-t8',
        title: 'Les jeux de société',
        lines: [
          { fr: "On fait souvent des jeux de société en famille.", en: 'We often play board games as a family.' },
          { fr: "C'est ton tour de jouer.", en: "It's your turn to play." },
          { fr: "J'adore les jeux de cartes entre amis.", en: 'I love card games with friends.' },
          { fr: 'Ce jeu de société est vraiment prenant.', en: 'This board game is really engaging.' },
          { fr: 'On a fait une soirée jeux vidéo hier.', en: 'We had a video game night yesterday.' },
        ],
      },
      {
        id: 'loisirs-t9',
        title: 'Les rêves de voyage',
        lines: [
          { fr: "Mon rêve, c'est de visiter le Japon un jour.", en: 'My dream is to visit Japan someday.' },
          { fr: "J'aimerais faire le tour du monde.", en: 'I would like to travel around the world.' },
          { fr: "Ma destination de rêve, c'est la Nouvelle-Zélande.", en: 'My dream destination is New Zealand.' },
          { fr: "On économise pour un grand voyage l'année prochaine.", en: 'We are saving up for a big trip next year.' },
          { fr: 'Je rêve de voir les aurores boréales.', en: 'I dream of seeing the northern lights.' },
        ],
      },
      {
        id: 'loisirs-t10',
        title: 'Le bénévolat et les activités associatives',
        lines: [
          { fr: 'Je fais du bénévolat dans une association le week-end.', en: 'I volunteer at a nonprofit on weekends.' },
          { fr: "J'aide à organiser des événements pour ma commune.", en: 'I help organize events for my town.' },
          { fr: 'Donner de son temps, ça fait vraiment plaisir.', en: 'Giving your time really feels good.' },
          { fr: "Je fais partie d'un club de lecture.", en: 'I am part of a book club.' },
          { fr: 'On se retrouve une fois par mois pour discuter.', en: 'We meet once a month to discuss.' },
        ],
      },
    ],
  },
  {
    id: 'numerique',
    minLevel: 'b1',
    word: 'Le Numérique',
    tag: '12 · TECH',
    glow: 'rgba(90,120,150,0.32)',
    labelFr: 'Le numérique et les médias',
    labelEn: 'Technology & Media',
    topicFr: 'appareils et internet',
    topicEn: 'devices and internet',
    tracks: [
      {
        id: 'numerique-t1',
        title: 'Les appareils',
        lines: [
          { fr: 'Je ne me sépare jamais de mon téléphone.', en: 'I never go anywhere without my phone.' },
          { fr: 'Mon ordinateur portable commence à être vieux.', en: 'My laptop is starting to get old.' },
          { fr: "J'ai téléchargé une nouvelle application de sport.", en: 'I downloaded a new fitness app.' },
          { fr: 'La batterie se décharge trop vite.', en: 'The battery drains too fast.' },
        ],
      },
      {
        id: 'numerique-t2',
        title: 'Internet et réseaux sociaux',
        lines: [
          { fr: 'Je passe trop de temps sur les réseaux sociaux.', en: 'I spend too much time on social media.' },
          { fr: 'Je publie rarement des photos en ligne.', en: 'I rarely post photos online.' },
          { fr: 'Il faut faire attention à sa vie privée sur internet.', en: 'You have to be careful about your privacy online.' },
          { fr: 'On reste en contact grâce aux messages instantanés.', en: 'We stay in touch thanks to instant messaging.' },
        ],
      },
      {
        id: 'numerique-t3',
        title: 'Les infos',
        lines: [
          { fr: 'Comment vous informez-vous ?', en: 'How do you keep informed?' },
          { fr: 'Je lis les infos sur mon téléphone chaque matin.', en: 'I read the news on my phone every morning.' },
          { fr: 'Il faut vérifier ses sources avant de partager une info.', en: 'You need to check your sources before sharing news.' },
          { fr: 'Les fausses informations circulent vite en ligne.', en: 'Fake news spreads quickly online.' },
        ],
      },
      {
        id: 'numerique-t4',
        title: 'Les soucis techniques',
        lines: [
          { fr: "Mon téléphone ne s'allume plus.", en: "My phone won't turn on anymore." },
          { fr: "L'application plante à chaque fois que je l'ouvre.", en: 'The app crashes every time I open it.' },
          { fr: 'Je dois mettre à jour le logiciel.', en: 'I need to update the software.' },
          { fr: "Vous pouvez m'aider à réinitialiser mon mot de passe ?", en: 'Can you help me reset my password?' },
        ],
      },
      {
        id: 'numerique-t5',
        title: 'Les applications du quotidien',
        lines: [
          { fr: "J'utilise une application pour suivre mes dépenses.", en: 'I use an app to track my expenses.' },
          { fr: 'Le GPS me dit de tourner à droite.', en: 'The GPS tells me to turn right.' },
          { fr: "Je commande à manger avec une application de livraison.", en: 'I order food with a delivery app.' },
          { fr: 'Cette application de banque est très pratique.', en: 'This banking app is very handy.' },
          { fr: "J'ai une appli pour apprendre le français chaque jour.", en: 'I have an app to learn French every day.' },
        ],
      },
      {
        id: 'numerique-t6',
        title: 'Le streaming et le divertissement en ligne',
        lines: [
          { fr: "Je regarde une série en streaming presque tous les soirs.", en: 'I watch a show streaming almost every evening.' },
          { fr: "Qu'est-ce que tu regardes en ce moment ?", en: 'What are you watching right now?' },
          { fr: "J'écoute de la musique en streaming toute la journée.", en: 'I listen to music streaming all day.' },
          { fr: 'On partage le même abonnement à plusieurs.', en: 'We share the same subscription between several of us.' },
          { fr: "L'algorithme me recommande toujours les mêmes genres.", en: 'The algorithm always recommends the same genres to me.' },
        ],
      },
      {
        id: 'numerique-t7',
        title: 'La sécurité en ligne',
        lines: [
          { fr: 'Ne cliquez jamais sur un lien suspect.', en: 'Never click on a suspicious link.' },
          { fr: "J'utilise un mot de passe différent pour chaque compte.", en: 'I use a different password for each account.' },
          { fr: "J'ai activé la double authentification.", en: 'I turned on two-factor authentication.' },
          { fr: "On m'a envoyé un mail qui ressemblait à une arnaque.", en: 'I got an email that looked like a scam.' },
          { fr: 'Il faut protéger ses données personnelles.', en: 'You need to protect your personal data.' },
        ],
      },
      {
        id: 'numerique-t8',
        title: 'Les appels vidéo',
        lines: [
          { fr: 'On fait un appel vidéo tous les dimanches.', en: 'We do a video call every Sunday.' },
          { fr: "La connexion coupe un peu, tu m'entends ?", en: 'The connection is cutting out a bit, can you hear me?' },
          { fr: 'Attends, je coupe ma caméra deux minutes.', en: 'Wait, I am turning off my camera for two minutes.' },
          { fr: "C'est presque comme être ensemble.", en: "It's almost like being together." },
          { fr: "Je préfère un appel vidéo à un simple message.", en: 'I prefer a video call to a simple message.' },
        ],
      },
      {
        id: 'numerique-t9',
        title: "L'intelligence artificielle",
        lines: [
          { fr: "J'utilise une intelligence artificielle pour m'aider à écrire.", en: 'I use an AI to help me write.' },
          { fr: "L'IA peut traduire un texte en quelques secondes.", en: 'AI can translate a text in a few seconds.' },
          { fr: "Ça m'inquiète un peu pour certains emplois.", en: 'It worries me a bit for some jobs.' },
          { fr: "C'est un outil, mais il faut garder son esprit critique.", en: "It's a tool, but you need to keep your critical thinking." },
          { fr: "Cette technologie évolue extrêmement vite.", en: 'This technology is evolving extremely fast.' },
        ],
      },
      {
        id: 'numerique-t10',
        title: 'Le service client en ligne',
        lines: [
          { fr: "J'ai contacté le service client par chat.", en: 'I contacted customer service via chat.' },
          { fr: "Un conseiller va vous répondre sous peu.", en: 'An agent will get back to you shortly.' },
          { fr: "Mon problème n'est toujours pas résolu.", en: 'My problem still is not solved.' },
          { fr: "Pouvez-vous m'envoyer un e-mail de confirmation ?", en: 'Can you send me a confirmation email?' },
          { fr: "Le support technique a été très réactif.", en: 'Technical support was very responsive.' },
        ],
      },
    ],
  },
  {
    id: 'societe',
    minLevel: 'b1',
    word: 'La Société',
    tag: '13 · SOCIETY',
    glow: 'rgba(140,100,100,0.30)',
    labelFr: 'Société et opinions',
    labelEn: 'Society & Opinions',
    topicFr: 'opinions et valeurs',
    topicEn: 'opinions and values',
    tracks: [
      {
        id: 'societe-t1',
        title: 'Donner son avis',
        lines: [
          { fr: "Qu'en pensez-vous ?", en: 'What do you think about it?' },
          { fr: "Je pense que c'est une bonne idée.", en: 'I think it is a good idea.' },
          { fr: 'À mon avis, il faudrait changer les choses.', en: 'In my opinion, things should change.' },
          { fr: "Je suis tout à fait d'accord avec vous.", en: 'I completely agree with you.' },
        ],
      },
      {
        id: 'societe-t2',
        title: 'Comparer',
        lines: [
          { fr: 'Cette solution est plus efficace que la précédente.', en: 'This solution is more effective than the previous one.' },
          { fr: "C'est la meilleure option, à mon sens.", en: 'It is the best option, in my view.' },
          { fr: "La vie en ville est plus stressante qu'à la campagne.", en: 'City life is more stressful than country life.' },
          { fr: 'Les deux options se valent, en fait.', en: 'Both options are equally good, actually.' },
        ],
      },
      {
        id: 'societe-t3',
        title: 'Conseiller',
        lines: [
          { fr: "Vous devriez en parler à quelqu'un.", en: 'You should talk to someone about it.' },
          { fr: "À votre place, j'attendrais un peu.", en: 'In your place, I would wait a bit.' },
          { fr: "Je vous conseille de réserver à l'avance.", en: 'I advise you to book in advance.' },
          { fr: 'Pourquoi ne pas essayer autre chose ?', en: 'Why not try something else?' },
        ],
      },
      {
        id: 'societe-t4',
        title: 'Valeurs et croyances',
        lines: [
          { fr: "Pour moi, l'honnêteté compte plus que tout.", en: 'For me, honesty matters more than anything.' },
          { fr: "Chacun est libre de croire ce qu'il veut.", en: 'Everyone is free to believe what they want.' },
          { fr: 'Le respect des autres est une valeur essentielle.', en: 'Respect for others is an essential value.' },
          { fr: 'Nos valeurs ont beaucoup changé avec le temps.', en: 'Our values have changed a lot over time.' },
        ],
      },
      {
        id: 'societe-t5',
        title: 'Actualité et société',
        lines: [
          { fr: 'Le gouvernement a annoncé de nouvelles mesures.', en: 'The government announced new measures.' },
          { fr: "L'inflation touche tout le monde en ce moment.", en: 'Inflation is affecting everyone right now.' },
          { fr: 'Le chômage a légèrement baissé cette année.', en: 'Unemployment has slightly decreased this year.' },
          { fr: 'On parle beaucoup des inégalités sociales.', en: 'There is a lot of talk about social inequality.' },
        ],
      },
      {
        id: 'societe-t6',
        title: 'Traditions et fêtes',
        lines: [
          { fr: 'On fête Noël en famille, comme chaque année.', en: 'We celebrate Christmas with family, like every year.' },
          { fr: 'Chez nous, on garde beaucoup de traditions.', en: 'In our family, we keep a lot of traditions.' },
          { fr: "Le quatorze juillet, il y a un feu d'artifice.", en: 'On July fourteenth, there are fireworks.' },
          { fr: 'Chaque région a ses propres coutumes.', en: 'Each region has its own customs.' },
        ],
      },
      {
        id: 'societe-t7',
        title: "L'engagement citoyen",
        lines: [
          { fr: "Voter, c'est un devoir citoyen important.", en: 'Voting is an important civic duty.' },
          { fr: "Je participe à des manifestations pour des causes qui me tiennent à cœur.", en: 'I take part in protests for causes I care about.' },
          { fr: "Il faut s'impliquer pour que les choses changent.", en: 'You have to get involved for things to change.' },
          { fr: 'Je signe souvent des pétitions en ligne.', en: 'I often sign petitions online.' },
          { fr: "L'engagement associatif renforce le lien social.", en: 'Community involvement strengthens social bonds.' },
        ],
      },
      {
        id: 'societe-t8',
        title: "L'égalité et la diversité",
        lines: [
          { fr: "L'égalité des chances devrait être une priorité.", en: 'Equal opportunity should be a priority.' },
          { fr: 'La diversité enrichit vraiment une société.', en: 'Diversity really enriches a society.' },
          { fr: "Il reste encore des inégalités entre hommes et femmes.", en: 'There are still inequalities between men and women.' },
          { fr: 'Chacun mérite le même respect, peu importe ses origines.', en: 'Everyone deserves the same respect, regardless of their background.' },
          { fr: 'On progresse, mais il reste du chemin à faire.', en: 'We are making progress, but there is still a way to go.' },
        ],
      },
      {
        id: 'societe-t9',
        title: "L'éducation et l'école",
        lines: [
          { fr: "L'école devrait mieux préparer les élèves à la vie active.", en: 'School should better prepare students for working life.' },
          { fr: "Le système éducatif a beaucoup changé depuis mon enfance.", en: 'The education system has changed a lot since my childhood.' },
          { fr: "Les classes sont trop chargées, à mon avis.", en: 'Classes are too crowded, in my opinion.' },
          { fr: "L'accès à l'éducation reste inégal selon les régions.", en: 'Access to education remains unequal depending on the region.' },
          { fr: "Un bon professeur peut changer une vie.", en: 'A good teacher can change a life.' },
        ],
      },
      {
        id: 'societe-t10',
        title: 'Débattre et argumenter',
        lines: [
          { fr: "D'un côté, cette mesure crée des emplois.", en: 'On one hand, this measure creates jobs.' },
          { fr: "D'un autre côté, elle coûte cher à l'État.", en: 'On the other hand, it costs the state a lot.' },
          { fr: 'Permettez-moi de nuancer ce point.', en: 'Allow me to qualify that point.' },
          { fr: "Je comprends votre point de vue, mais je ne suis pas convaincu.", en: 'I understand your point of view, but I am not convinced.' },
          { fr: 'En conclusion, il faudrait trouver un compromis.', en: 'In conclusion, a compromise should be found.' },
        ],
      },
    ],
  },
  {
    id: 'temps',
    minLevel: 'b1',
    word: 'Le Temps',
    tag: '14 · TENSES',
    glow: 'rgba(130,130,160,0.30)',
    labelFr: 'Parler du temps',
    labelEn: 'Time Reference',
    topicFr: 'temps verbaux',
    topicEn: 'verb tenses',
    tracks: [
      {
        id: 'temps-t1',
        title: 'Raconter au passé',
        lines: [
          { fr: 'Hier, je suis allé au marché avec ma sœur.', en: 'Yesterday, I went to the market with my sister.' },
          { fr: "L'année dernière, nous avons visité le Portugal.", en: 'Last year, we visited Portugal.' },
          { fr: "Quand j'étais petit, j'habitais à la campagne.", en: 'When I was little, I lived in the countryside.' },
          { fr: 'Il pleuvait quand je suis sorti de chez moi.', en: 'It was raining when I left home.' },
        ],
      },
      {
        id: 'temps-t2',
        title: "Parler de l'avenir",
        lines: [
          { fr: "Demain, je vais rendre visite à mes parents.", en: "Tomorrow, I'm going to visit my parents." },
          { fr: "L'année prochaine, je partirai vivre à l'étranger.", en: 'Next year, I will go live abroad.' },
          { fr: "Dès que j'aurai fini, je te préviendrai.", en: 'As soon as I finish, I will let you know.' },
          { fr: "J'ai l'intention de reprendre mes études.", en: 'I intend to go back to school.' },
        ],
      },
      {
        id: 'temps-t3',
        title: 'Les habitudes',
        lines: [
          { fr: 'Je fais toujours les courses le samedi.', en: 'I always do the shopping on Saturdays.' },
          { fr: "D'habitude, je travaille de chez moi le vendredi.", en: 'I usually work from home on Fridays.' },
          { fr: 'Chaque matin, je bois un café avant de partir.', en: 'Every morning, I drink coffee before leaving.' },
          { fr: 'En général, on dîne vers vingt heures.', en: 'Generally, we have dinner around eight.' },
        ],
      },
      {
        id: 'temps-t4',
        title: 'Les hypothèses',
        lines: [
          { fr: "Si j'avais le temps, je voyagerais davantage.", en: 'If I had the time, I would travel more.' },
          { fr: "Si tu étais moi, qu'est-ce que tu ferais ?", en: 'If you were me, what would you do?' },
          { fr: "S'il faisait beau, on irait à la plage.", en: 'If the weather were nice, we would go to the beach.' },
          { fr: "Si j'avais su, je ne serais pas venu.", en: "If I had known, I wouldn't have come." },
        ],
      },
      {
        id: 'temps-t5',
        title: "Le passé composé vs l'imparfait",
        lines: [
          { fr: "J'ai visité Paris l'an dernier.", en: 'I visited Paris last year.' },
          { fr: 'Il faisait beau ce jour-là.', en: 'The weather was nice that day.' },
          { fr: "Je marchais dans la rue quand j'ai vu mon ami.", en: 'I was walking down the street when I saw my friend.' },
          { fr: "L'action ponctuelle prend le passé composé.", en: 'The one-time action takes the passé composé.' },
          { fr: "La description ou l'habitude prend l'imparfait.", en: 'The description or habit takes the imperfect.' },
        ],
      },
      {
        id: 'temps-t6',
        title: 'Le futur proche',
        lines: [
          { fr: 'Je vais partir dans cinq minutes.', en: "I'm going to leave in five minutes." },
          { fr: "On va manger au restaurant ce soir.", en: "We're going to eat at a restaurant tonight." },
          { fr: "Tu vas adorer ce film.", en: "You're going to love this movie." },
          { fr: "Il va pleuvoir, prends ton parapluie.", en: "It's going to rain, take your umbrella." },
          { fr: "Ça va aller, ne t'inquiète pas.", en: "It's going to be fine, don't worry." },
        ],
      },
      {
        id: 'temps-t7',
        title: 'Le conditionnel de politesse',
        lines: [
          { fr: "Je voudrais une baguette, s'il vous plaît.", en: 'I would like a baguette, please.' },
          { fr: "Pourriez-vous m'indiquer le chemin ?", en: 'Could you show me the way?' },
          { fr: "Auriez-vous un moment à m'accorder ?", en: 'Would you have a moment for me?' },
          { fr: "J'aimerais réserver une table pour ce soir.", en: 'I would like to book a table for tonight.' },
          { fr: "Cela vous dérangerait-il de fermer la fenêtre ?", en: 'Would it bother you to close the window?' },
        ],
      },
      {
        id: 'temps-t8',
        title: 'Le subjonctif dans la conversation',
        lines: [
          { fr: "Il faut que je parte maintenant.", en: 'I have to leave now.' },
          { fr: "Je veux que tu sois heureux.", en: 'I want you to be happy.' },
          { fr: "Bien qu'il pleuve, on sort quand même.", en: 'Even though it is raining, we are going out anyway.' },
          { fr: "J'aimerais que vous veniez avec nous.", en: 'I would like you to come with us.' },
          { fr: "Il est important que tout le monde participe.", en: 'It is important that everyone takes part.' },
        ],
      },
      {
        id: 'temps-t9',
        title: 'Les marqueurs temporels',
        lines: [
          { fr: "D'abord, on prend le petit-déjeuner.", en: 'First, we have breakfast.' },
          { fr: "Ensuite, je pars travailler.", en: 'Then, I go to work.' },
          { fr: "Pendant deux heures, j'ai attendu le bus.", en: 'For two hours, I waited for the bus.' },
          { fr: "Depuis trois ans, j'habite à Paris.", en: "I've lived in Paris for three years." },
          { fr: 'Enfin, on rentre se coucher.', en: 'Finally, we go home to bed.' },
        ],
      },
      {
        id: 'temps-t10',
        title: 'Raconter une anecdote',
        lines: [
          { fr: "Tu ne devineras jamais ce qui m'est arrivé.", en: "You'll never guess what happened to me." },
          { fr: "Alors voilà, j'étais au marché.", en: 'So here it is, I was at the market.' },
          { fr: "Tout à coup, quelqu'un a crié.", en: 'Suddenly, someone shouted.' },
          { fr: "Du coup, on est tous partis en courant.", en: 'So we all ran off.' },
          { fr: "Finalement, tout s'est bien terminé.", en: 'In the end, everything turned out fine.' },
        ],
      },
    ],
  },
  {
    id: 'politesse',
    minLevel: 'a1',
    word: 'La Politesse',
    tag: '15 · MANNERS',
    glow: 'rgba(200,170,130,0.30)',
    labelFr: 'Politesse et convenances',
    labelEn: 'Social Situations & Etiquette',
    topicFr: 'politesse au quotidien',
    topicEn: 'everyday manners',
    tracks: [
      {
        id: 'politesse-t1',
        title: 'Saluer',
        lines: [
          { fr: 'Bonjour, comment allez-vous ?', en: 'Hello, how are you?' },
          { fr: 'Salut, ça va ?', en: 'Hi, how are you doing?' },
          { fr: 'Au revoir, bonne journée !', en: 'Goodbye, have a good day!' },
          { fr: "À bientôt, prends soin de toi.", en: 'See you soon, take care.' },
        ],
      },
      {
        id: 'politesse-t2',
        title: 'Se présenter',
        lines: [
          { fr: "Je me présente, je m'appelle Léa.", en: 'Let me introduce myself, my name is Léa.' },
          { fr: 'Je vous présente mon collègue, Marc.', en: 'Let me introduce my colleague, Marc.' },
          { fr: 'Enchanté de faire votre connaissance.', en: 'Pleased to meet you.' },
          { fr: 'On se connaît déjà, je crois.', en: 'I think we already know each other.' },
        ],
      },
      {
        id: 'politesse-t3',
        title: 'Faire la conversation',
        lines: [
          { fr: "Quel temps agréable aujourd'hui, non ?", en: "Nice weather today, isn't it?" },
          { fr: 'Alors, quoi de neuf ?', en: "So, what's new?" },
          { fr: "On ne s'était pas vus depuis longtemps.", en: "We hadn't seen each other in a long time." },
          { fr: 'Vous êtes en visite ou vous habitez ici ?', en: 'Are you visiting or do you live here?' },
        ],
      },
      {
        id: 'politesse-t4',
        title: "S'excuser, remercier, demander",
        lines: [
          { fr: 'Excusez-moi de vous déranger.', en: 'Sorry to bother you.' },
          { fr: 'Je suis vraiment désolé pour le retard.', en: "I'm really sorry for the delay." },
          { fr: 'Merci beaucoup pour votre aide.', en: 'Thank you very much for your help.' },
          { fr: "Pourriez-vous m'aider, s'il vous plaît ?", en: 'Could you help me, please?' },
        ],
      },
      {
        id: 'politesse-t5',
        title: 'Au téléphone',
        lines: [
          { fr: "Allô, qui est à l'appareil ?", en: "Hello, who's calling?" },
          { fr: "C'est de la part de qui ?", en: 'Who should I say is calling?' },
          { fr: 'Je vous rappelle dans un instant.', en: "I'll call you back in a moment." },
          { fr: 'Je peux laisser un message ?', en: 'Can I leave a message?' },
        ],
      },
      {
        id: 'politesse-t6',
        title: "À l'écrit",
        lines: [
          { fr: "Bonjour Madame, je me permets de vous écrire au sujet de ma candidature.", en: 'Dear Madam, I am writing to you regarding my application.' },
          { fr: 'Cordialement,', en: 'Kind regards,' },
          { fr: "Salut ! Tu es dispo ce soir ?", en: 'Hey! Are you free tonight?' },
          { fr: "Dans l'attente de votre réponse.", en: 'Looking forward to your reply.' },
        ],
      },
      {
        id: 'politesse-t7',
        title: 'Les bonnes manières à table',
        lines: [
          { fr: "Pourriez-vous me passer le sel, s'il vous plaît ?", en: 'Could you pass me the salt, please?' },
          { fr: "Je vous en prie, servez-vous en premier.", en: 'Please, help yourself first.' },
          { fr: "C'est très gentil, merci.", en: 'That is very kind, thank you.' },
          { fr: "Puis-je débarrasser votre assiette ?", en: 'May I clear your plate?' },
          { fr: "C'était un vrai régal, merci pour ce repas.", en: 'That was a real treat, thank you for this meal.' },
        ],
      },
      {
        id: 'politesse-t8',
        title: 'Politesse dans les transports',
        lines: [
          { fr: 'Excusez-moi, est-ce que cette place est libre ?', en: 'Excuse me, is this seat free?' },
          { fr: 'Je vous en prie, asseyez-vous.', en: 'Please, sit down.' },
          { fr: 'Pardon, je descends au prochain arrêt.', en: 'Excuse me, I am getting off at the next stop.' },
          { fr: "Après vous.", en: 'After you.' },
          { fr: "Merci de votre patience.", en: 'Thank you for your patience.' },
        ],
      },
      {
        id: 'politesse-t9',
        title: 'Les registres de langue',
        lines: [
          { fr: 'On se tutoie ou on se vouvoie ?', en: 'Should we use tu or vous?' },
          { fr: "Entre collègues, on se dit plutôt vous au début.", en: 'Between colleagues, we tend to say vous at first.' },
          { fr: "Avec les amis, le tutoiement est naturel.", en: 'With friends, using tu comes naturally.' },
          { fr: "On peut se tutoyer, si vous voulez.", en: 'We can use tu with each other, if you like.' },
          { fr: 'Le vouvoiement reste la norme avec un inconnu.', en: 'Using vous remains the norm with a stranger.' },
        ],
      },
      {
        id: 'politesse-t10',
        title: 'Refuser poliment',
        lines: [
          { fr: "C'est gentil, mais je ne peux pas cette fois.", en: "That's kind, but I can't this time." },
          { fr: "Merci pour l'invitation, mais j'ai déjà un engagement.", en: 'Thank you for the invitation, but I already have a commitment.' },
          { fr: "Je préférerais ne pas, si cela ne vous dérange pas.", en: "I would rather not, if that's alright with you." },
          { fr: "Une autre fois, avec plaisir.", en: 'Another time, gladly.' },
          { fr: "Désolé, ce n'est vraiment pas possible pour moi.", en: "Sorry, it's really not possible for me." },
        ],
      },
    ],
  },
];

/** A playlist by id, or undefined if the id is unknown (a bad deep link). */
export function playlist(id: string): Playlist | undefined {
  return playlists.find((p) => p.id === id);
}
