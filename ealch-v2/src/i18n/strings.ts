// Interface strings ported 1:1 from the Ealch v2 prototype `T` table.
// FR & EN are fully translated; the 7-language app picker falls back to EN.
import type { Lang } from '@/store/useStore';

export type NotifLabel = { label: string; sub: string };

export type Strings = {
  greet: string; seeAll: string; playlists: string; examiner: string;
  weak: string; week: string; resume: string;
  heroTag: string; heroSub: string; left: string;
  found: string; denT: string; denS: string;
  cardsT: string; cardsS: string; cardsTag: string; unitsWord: string;
  tabListen: string; tabSpeak: string; tabProfile: string;
  practice: string; phrase: string; next: string;
  queueOn: string; queueOff: string;
  end: string; cont: string; why: string;
  micIdle: string; micRec: string; micDone: string;
  youSaid: string; liaisonChip: string;
  reportTag: string; review: string; replay: string; talk: string;
  traj: string; conf: string;
  reportSub: string;
  hours: string; convs: string; minutes: string; days7: string;
  accentT: string; weakEngine: string;
  coachStatus: string; unlimited: string; placeholder: string;
  skills: string[];
  denTag: string; denIntro: string; denCont: string;
  trackDescs: { sons: string; a1: string; a2: string };
  trackLabels: { sons: string; a1: string; a2: string };
  flipHint: string; again: string; know: string;
  deckDone: string; deckSub: string; redo: string; backFeed: string;
  frontFr: string; frontEn: string;
  vocabTag: string; vocabSub: string;
  register: string; registerBody: string; registerEnd: string;
  go: string; grammarTag: string; grammarBody: string; askCamille: string;
  weakMeta: string[]; playlistMeta: string[]; playlistLabels: string[];
  examMeta: string[]; errorIssues: string[];
  trackTitle: string; trackMeta: string;
  reminders: string; dailyAlarm: string; dailyAlarmSub: string;
  notifLabels: NotifLabel[];
  theme: string; signOut: string; now: string;
  settingsT: string; appLangT: string; appLangNote: string;
  modeT: string; modeDark: string; modeLight: string; soundT: string; soundS: string;
  testAlarm: string; customTime: string; calendarT: string;
  voiceT: string; voiceS: string; sbT: string; sbS: string; rpT: string; rpS: string;
  startQuiz: string; quizPassed: string; quizFailed: string; retry: string; qNext: string; backToDen: string;
  examplesT: string; tableT: string; errorsT: string; audioT: string; videoT: string; subsT: string;
  sayFr: string; transEn: string; orTypeT: string; checkT: string;
  correctT: string; incorrectT: string; nextCard: string; vfDoneT: string;
  learnT: string; arrangeT: string; sayItT: string; writeItT: string; wellDone: string;
  chooseLevel: string; startRp: string; rpDoneT: string; rpDoneS: string;
  bannerText: string;
  uDone: string; uLock: string;

  // --- v2 additions (today strip, browse, review, placement, dictation, downloads, billing) ---
  todayTag: string; toReviewShort: string; caughtUp: string; tomorrow: string;
  browse: string; browseClose: string; wordOfDay: string; save: string; saved: string;
  smartReviewT: string; smartReviewS: string; startReview: string; dueToday: string;
  allCaught: string; allCaughtS: string; nextDue: string;
  placementT: string; placementS: string; placementCta: string; estimate: string;
  dicteeT: string; dicteeS: string; play: string; slow: string; playsLeft: string;
  writeHeard: string; check2: string; perfectNoMistakes: string; youWrote: string; correctIs: string;
  downloadsT: string; downloadsS: string; storage: string; wifiOnly: string;
  subscription: string; currentPlan: string; monthly: string; annual: string; bestValue: string;
  upgrade: string; billing: string; paymentMethod: string; restore: string; currencyT: string; detected: string;
  skillRead: string; skillListen: string; skillSpeak: string; skillWrite: string; skillCourse: string; skillVocab: string;
  accountBilling: string; learningSec: string; appearanceSec: string; notificationsSec: string;
};

export const T: Record<Lang, Strings> = {
  fr: {
    greet: 'BONSOIR', seeAll: 'TOUT VOIR', playlists: 'Vos playlists', examiner: "L'Examinateur",
    weak: 'Vos points faibles', week: 'CETTE SEMAINE', resume: 'Reprendre',
    heroTag: 'RÉEL — SURVIE · REPRENDRE', heroSub: 'Commandez comme un vrai Parisien · avec Camille', left: '4:12 restantes',
    found: 'Les fondations', denT: 'Le coin des débutants', denS: 'Sons · A1 · A2 — le cursus complet',
    cardsT: 'Cartes mémoire', cardsS: '8 cartes · rappel du café', cardsTag: 'RAPPEL · CARTES', unitsWord: 'UNITÉS',
    tabListen: 'ÉCOUTE', tabSpeak: 'PARLE', tabProfile: 'PROFIL',
    practice: 'Pratiquer à voix haute', phrase: 'PHRASE', next: 'SUIVANTE',
    queueOn: 'Dans votre pratique ✓', queueOff: 'File de pratique',
    end: 'Terminer', cont: 'Continuer →', why: 'Pourquoi ?',
    micIdle: 'Touchez pour parler', micRec: 'On vous écoute…', micDone: 'Analysé — continuez ou réessayez',
    youSaid: 'VOUS — TRANSCRIPTION', liaisonChip: 'Liaison manquée · un‿allongé',
    reportTag: 'VOTRE RAPPORT DU SOIR', review: 'À revoir', replay: 'Rejouer', talk: 'Parler au coach',
    traj: 'B1 → B1+ trajectoire', conf: 'CONFIANCE',
    reportSub: '6 min parlées · 14 phrases · votre meilleur rythme cette semaine',
    hours: 'HEURES PARLÉES', convs: 'CONVERSATIONS', minutes: 'Minutes parlées', days7: '7 DERNIERS JOURS',
    accentT: 'Votre accent', weakEngine: 'Le moteur de faiblesses',
    coachStatus: 'votre coach · en ligne', unlimited: 'POURQUOI ? · ILLIMITÉ', placeholder: 'Posez votre question…',
    skills: ['FLUIDITÉ', 'PRÉCISION', 'RYTHME & LIAISONS'],
    denTag: 'LE COIN DES DÉBUTANTS',
    denIntro: "Un vrai cursus, du premier son jusqu'au passé composé. Aucune honte à commencer petit.",
    denCont: 'Continuer',
    trackDescs: {
      sons: "De l'alphabet à la masterclass de prononciation — les sons avant les mots.",
      a1: 'Salutations, genre, être & avoir, la vie quotidienne — les 26 unités du niveau Découverte.',
      a2: 'Verbes, passé composé, pronoms objets — le niveau Survie, en profondeur.',
    },
    trackLabels: { sons: 'PRONONCIATION · MASTERCLASS', a1: 'A1 · DÉCOUVERTE', a2: 'A2 · SURVIE' },
    flipHint: 'Touchez pour retourner', again: 'Encore', know: 'Je sais',
    deckDone: 'Paquet terminé', deckSub: 'Les cartes ratées reviendront demain, juste avant que vous les oubliiez.', redo: 'Rejouer le paquet', backFeed: 'Retour au flux',
    frontFr: 'FRANÇAIS', frontEn: 'ANGLAIS',
    vocabTag: 'AVANT DE PARLER · INJECTEUR', vocabSub: 'Utilisez chacun au moins une fois — Camille écoute.',
    register: 'REGISTRE', registerBody: 'Dites toujours', registerEnd: 'sonne comme un ordre. Les serveurs le remarquent.',
    go: "J'y vais →", grammarTag: 'GRAMMAIRE · SANS QUITTER LA CONVERSATION',
    grammarBody: "La liaison relie la consonne finale muette à la voyelle qui suit. Après un, les, vous, ils, elle est obligatoire — c'est la première chose qu'un examinateur entend.",
    askCamille: 'Demandez à Camille →',
    weakMeta: ['7 erreurs cette semaine', 'prononciation · 5 erreurs', '4 erreurs · après « il faut que »'],
    playlistMeta: ['15 pistes · voyelles nasales', '9 pistes · B1+', '12 pistes · B1', '6 pistes · avec bruit'],
    playlistLabels: ['Prononciation en profondeur', 'Argot parisien décontracté', 'Le français des affaires', 'Dégradation audio · Métro'],
    examMeta: ['Expression orale · 15 min · chrono', "L'examinateur vous interrompt", 'Compréhension · une seule écoute'],
    errorIssues: ['Liaison omise — il faut enchaîner : un‿allongé.', '« Je voudrais » est le registre attendu avec le personnel.', 'Une pause de 1,8 s — vous avez traduit dans votre tête. On va travailler ça.'],
    trackTitle: 'Les voyelles nasales', trackMeta: 'La Voix · 2 min · B1',
    reminders: 'Rappels de pratique', dailyAlarm: 'Alarme quotidienne', dailyAlarmSub: 'Votre séance vous appelle',
    notifLabels: [
      { label: 'Rappel du soir', sub: "Une notification à l'heure choisie" },
      { label: 'Rapport quotidien', sub: 'Votre rapport, chaque soir après la séance' },
      { label: 'Encouragements', sub: 'Micro-défis de confiance, sans streak' },
    ],
    theme: 'Thème', signOut: 'Se déconnecter', now: 'MAINTENANT',
    settingsT: 'Réglages', appLangT: "Langue de l'application", appLangNote: 'Interface FR & EN complète — autres langues bientôt.',
    modeT: 'Apparence', modeDark: 'SOMBRE', modeLight: 'CLAIR', soundT: 'Effets sonores', soundS: 'Sons de réussite, cartes et alarme',
    testAlarm: "Tester l'alarme", customTime: 'Heure personnalisée', calendarT: 'Votre calendrier',
    voiceT: 'Flash vocal', voiceS: 'image → voix · traduction', sbT: 'Phrases', sbS: 'apprendre · dire · écrire', rpT: 'Jeu de rôle', rpS: 'conversation IA · A1 → B2',
    startQuiz: 'Commencer le quiz', quizPassed: 'RÉUSSI', quizFailed: 'Pas encore', retry: 'Réessayer', qNext: 'Suivant', backToDen: 'Retour au cursus',
    examplesT: 'Exemples & usages', tableT: 'Tableau', errorsT: 'Erreurs communes', audioT: 'Pratique audio', videoT: 'Vidéo — la bouche en 3D', subsT: 'Sous-leçons',
    sayFr: 'Dites-le en français', transEn: 'Traduisez en anglais', orTypeT: 'ou écrivez votre réponse', checkT: 'Vérifier',
    correctT: 'Correct !', incorrectT: 'Pas tout à fait — ', nextCard: 'Carte suivante', vfDoneT: 'Session terminée',
    learnT: 'Apprenez ces mots', arrangeT: 'Arrangez la phrase', sayItT: 'Dites-la à voix haute', writeItT: 'Écrivez-la', wellDone: 'Bravo — phrase acquise',
    chooseLevel: 'Choisissez votre niveau', startRp: 'Commencer la conversation', rpDoneT: 'Scène terminée', rpDoneS: 'Camille : « Votre marchand vous adore. »',
    bannerText: 'Votre séance de {t} vous attend — Au Café, 4 min. Camille est prête.',
    uDone: 'ACQUIS', uLock: '···',

    todayTag: "AUJOURD'HUI", toReviewShort: 'à revoir', caughtUp: '✓ à jour', tomorrow: 'demain →',
    browse: 'Parcourir', browseClose: 'Réduire', wordOfDay: 'MOT DU JOUR', save: 'Enregistrer', saved: 'Enregistré ✓',
    smartReviewT: 'Révision intelligente', smartReviewS: 'Votre file du jour · mots, sons, grammaire', startReview: 'Commencer la révision', dueToday: 'à réviser',
    allCaught: 'Tout est à jour', allCaughtS: 'Revenez demain pour la prochaine série.', nextDue: 'PROCHAINEMENT',
    placementT: 'Test de niveau', placementS: 'Quelques questions — estimation en direct.', placementCta: 'Passer le test', estimate: 'ESTIMATION',
    dicteeT: 'La Dictée', dicteeS: "Entraînez l'oreille et l'orthographe : écrivez exactement ce que vous entendez.", play: 'Écouter', slow: '0,75×', playsLeft: 'écoutes',
    writeHeard: 'Écrivez ce que vous entendez', check2: 'Vérifier', perfectNoMistakes: 'Parfait — aucune faute', youWrote: 'Vous avez écrit', correctIs: 'La bonne réponse',
    downloadsT: 'Téléchargements', downloadsS: 'Écoutez hors connexion', storage: 'Stockage', wifiOnly: 'Wi-Fi uniquement',
    subscription: 'Abonnement', currentPlan: 'FORMULE ACTUELLE', monthly: 'Mensuel', annual: 'Annuel', bestValue: 'meilleure offre',
    upgrade: 'Passer à Première', billing: 'Facturation', paymentMethod: 'Moyen de paiement', restore: 'Restaurer les achats', currencyT: 'Devise', detected: 'Détectée selon votre région.',
    skillRead: 'LIRE', skillListen: 'ÉCOUTE', skillSpeak: 'PARLE', skillWrite: 'ÉCRIRE', skillCourse: 'COURS', skillVocab: 'VOCAB',
    accountBilling: 'Compte & facturation', learningSec: 'Apprentissage', appearanceSec: 'Apparence', notificationsSec: 'Notifications',
  },
  en: {
    greet: 'GOOD EVENING', seeAll: 'SEE ALL', playlists: 'Your playlists', examiner: 'The Examiner',
    weak: 'Your weak spots', week: 'THIS WEEK', resume: 'Resume',
    heroTag: 'REAL-WORLD — SURVIVAL · RESUME', heroSub: 'Order like a local · with Camille', left: '4:12 left',
    found: 'Foundations', denT: "Beginners' Den", denS: 'Sounds · A1 · A2 — the full curriculum',
    cardsT: 'Flashcards', cardsS: '8 cards · café recall', cardsTag: 'RECALL · FLASHCARDS', unitsWord: 'UNITS',
    tabListen: 'LISTEN', tabSpeak: 'SPEAK', tabProfile: 'PROFILE',
    practice: 'Practice out loud', phrase: 'PHRASE', next: 'NEXT',
    queueOn: 'In your practice ✓', queueOff: 'Practice queue',
    end: 'End', cont: 'Continue →', why: 'Why?',
    micIdle: 'Tap to speak', micRec: 'Listening…', micDone: 'Analysed — continue or retry',
    youSaid: 'YOU — TRANSCRIPT', liaisonChip: 'Missed liaison · un‿allongé',
    reportTag: 'YOUR EVENING REPORT', review: 'To review', replay: 'Replay', talk: 'Talk to the coach',
    traj: 'B1 → B1+ trajectory', conf: 'CONFIDENCE',
    reportSub: '6 min spoken · 14 phrases · your best rhythm this week',
    hours: 'HOURS SPOKEN', convs: 'CONVERSATIONS', minutes: 'Minutes spoken', days7: 'LAST 7 DAYS',
    accentT: 'Your accent', weakEngine: 'The weakness engine',
    coachStatus: 'your coach · online', unlimited: 'WHY? · UNLIMITED', placeholder: 'Ask your question…',
    skills: ['FLUENCY', 'ACCURACY', 'RHYTHM & LIAISONS'],
    denTag: "BEGINNERS' DEN",
    denIntro: 'A real curriculum, from your first sound to the past tense. No shame in starting small.',
    denCont: 'Continue',
    trackDescs: {
      sons: 'From the alphabet to the pronunciation masterclass — sounds before words.',
      a1: 'Greetings, gender, être & avoir, daily life — the 26 units of level Découverte.',
      a2: 'Verbs, the past tense, object pronouns — level Survie, in depth.',
    },
    trackLabels: { sons: 'PRONUNCIATION · MASTERCLASS', a1: 'A1 · DISCOVERY', a2: 'A2 · SURVIVAL' },
    flipHint: 'Tap to flip', again: 'Again', know: 'Got it',
    deckDone: 'Deck complete', deckSub: "Missed cards return tomorrow — right before you'd forget them.", redo: 'Replay deck', backFeed: 'Back to feed',
    frontFr: 'FRENCH', frontEn: 'ENGLISH',
    vocabTag: 'BEFORE YOU SPEAK · INJECTOR', vocabSub: 'Use each at least once — Camille is listening.',
    register: 'REGISTER', registerBody: 'Always say', registerEnd: 'sounds like a demand. Waiters notice.',
    go: "Let's go →", grammarTag: 'GRAMMAR · WITHOUT LEAVING THE CONVERSATION',
    grammarBody: "A liaison links a word's silent final consonant to the vowel that follows. After un, les, vous, ils it is not optional — dropping it is what examiners hear first.",
    askCamille: 'Ask Camille why →',
    weakMeta: ['7 errors this week', 'pronunciation · 5 errors', '4 errors · after « il faut que »'],
    playlistMeta: ['15 tracks · nasal vowels', '9 tracks · B1+', '12 tracks · B1', '6 tracks · with noise'],
    playlistLabels: ['Pronunciation Deep-Dives', 'Casual Parisian Slang', 'French for Business', 'Audio Degradation · Métro'],
    examMeta: ['Speaking · 15 min · timed', 'The examiner interrupts you', 'Listening · single play'],
    errorIssues: ['Liaison dropped — it should flow as un‿allongé.', '« Je voudrais » is the expected register with staff.', 'A 1.8s pause — you translated in your head. We will drill this.'],
    trackTitle: 'The nasal vowels', trackMeta: 'La Voix · 2 min · B1',
    reminders: 'Practice reminders', dailyAlarm: 'Daily alarm', dailyAlarmSub: 'Your session calls you',
    notifLabels: [
      { label: 'Evening reminder', sub: 'One notification at your chosen hour' },
      { label: 'Daily report', sub: 'Your report, each evening after the session' },
      { label: 'Confidence nudges', sub: 'Micro-challenges — no streaks' },
    ],
    theme: 'Theme', signOut: 'Sign out', now: 'NOW',
    settingsT: 'Settings', appLangT: 'App language', appLangNote: 'FR & EN interface complete — more languages soon.',
    modeT: 'Appearance', modeDark: 'DARK', modeLight: 'LIGHT', soundT: 'Sound effects', soundS: 'Success chimes, cards & alarm',
    testAlarm: 'Test the alarm', customTime: 'Custom time', calendarT: 'Your calendar',
    voiceT: 'Voice Flash', voiceS: 'image → voice · translation', sbT: 'Sentences', sbS: 'learn · say · write', rpT: 'Role Play', rpS: 'AI conversation · A1 → B2',
    startQuiz: 'Start the quiz', quizPassed: 'PASSED', quizFailed: 'Not yet', retry: 'Retry', qNext: 'Next', backToDen: 'Back to curriculum',
    examplesT: 'Examples & use cases', tableT: 'Table', errorsT: 'Common errors', audioT: 'Audio practice', videoT: 'Video — the mouth in 3D', subsT: 'Sub-lessons',
    sayFr: 'Say it in French', transEn: 'Translate to English', orTypeT: 'or type your answer', checkT: 'Check',
    correctT: 'Correct!', incorrectT: 'Not quite — ', nextCard: 'Next card', vfDoneT: 'Session complete',
    learnT: 'Learn these words', arrangeT: 'Arrange the sentence', sayItT: 'Say it out loud', writeItT: 'Write it', wellDone: 'Bravo — sentence mastered',
    chooseLevel: 'Choose your level', startRp: 'Start the conversation', rpDoneT: 'Scene complete', rpDoneS: 'Camille: "Your market vendor adores you."',
    bannerText: 'Your {t} session is waiting — Au Café, 4 min. Camille is ready.',
    uDone: 'DONE', uLock: '···',

    todayTag: 'TODAY', toReviewShort: 'to review', caughtUp: '✓ caught up', tomorrow: 'tomorrow →',
    browse: 'Browse', browseClose: 'Close', wordOfDay: 'WORD OF THE DAY', save: 'Save', saved: 'Saved ✓',
    smartReviewT: 'Smart Review', smartReviewS: "Today's queue · words, sounds, grammar", startReview: 'Start review', dueToday: 'due today',
    allCaught: 'All caught up', allCaughtS: 'Come back tomorrow for the next set.', nextDue: 'NEXT DUE',
    placementT: 'Placement test', placementS: 'A few questions — live estimate.', placementCta: 'Take the test', estimate: 'ESTIMATE',
    dicteeT: 'La Dictée', dicteeS: 'Train your ear and spelling: write exactly what you hear.', play: 'Play', slow: '0.75×', playsLeft: 'plays',
    writeHeard: 'Write what you hear', check2: 'Check', perfectNoMistakes: 'Perfect — no mistakes', youWrote: 'You wrote', correctIs: 'The correct answer',
    downloadsT: 'Downloads', downloadsS: 'Listen offline', storage: 'Storage', wifiOnly: 'Wi-Fi only',
    subscription: 'Subscription', currentPlan: 'CURRENT PLAN', monthly: 'Monthly', annual: 'Annual', bestValue: 'best value',
    upgrade: 'Upgrade to Première', billing: 'Billing', paymentMethod: 'Payment method', restore: 'Restore purchases', currencyT: 'Currency', detected: 'Detected from your region.',
    skillRead: 'READ', skillListen: 'LISTEN', skillSpeak: 'SPEAK', skillWrite: 'WRITE', skillCourse: 'COURSE', skillVocab: 'VOCAB',
    accountBilling: 'Account & Billing', learningSec: 'Learning', appearanceSec: 'Appearance', notificationsSec: 'Notifications',
  },
};
