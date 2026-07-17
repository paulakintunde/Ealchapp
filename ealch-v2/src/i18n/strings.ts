// Interface strings ported 1:1 from the Ealch v2 prototype `T` table.
// FR & EN are fully translated; the 7-language app picker falls back to EN.
import type { Lang } from '@/store/useStore';

export type NotifLabel = { label: string; sub: string };

export type GreetSlot = 'morning' | 'afternoon' | 'evening' | 'late' | 'early';

/** Time-of-day bucket for the home greeting.
 *  23:00–02:00 reads as "working late", 02:00–05:00 as "early riser". */
export function greetSlot(hour: number = new Date().getHours()): GreetSlot {
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'afternoon';
  if (hour >= 18 && hour < 23) return 'evening';
  return hour >= 23 || hour < 2 ? 'late' : 'early';
}

export type Strings = {
  greets: Record<GreetSlot, string>; seeAll: string; playlists: string; examiner: string; tracksWord: string;
  weak: string; week: string; resume: string;
  weakSlip: string; weakSlipPl: string; weakEmpty: string;
  heroTag: string; heroSub: string;
  resumeTag: string; beginTag: string; resumeSub: string; begin: string; vocabPrime: string;
  reviewHeroTitle: string; listenHeroTitle: string; listenHeroSub: string;
  found: string; denT: string; denS: string;
  cardsT: string; cardsS: string; cardsTag: string; unitsWord: string;
  tabListen: string; tabSpeak: string; tabProfile: string; tabCoach: string;
  /** Spoken names for the FR/EN toggle — 'FR' and 'EN' alone are two bare letters to a screen reader. */
  appLangNames: { fr: string; en: string };
  practice: string; phrase: string; next: string;
  queueOn: string; queueOff: string;
  end: string; cont: string; why: string;
  micIdle: string; micRec: string; micDone: string;
  micHeard: string; micNoSpeech: string; micDenied: string; micUnavail: string;
  micGood: string; micClose: string; micOff: string;
  youSaid: string; liaisonChip: string;
  speakYouSaid: string; speakModelWas: string;
  reportTag: string; review: string; replay: string; talk: string;
  traj: string; conf: string;
  reportSub: string;
  reportEmptyT: string; reportEmptyS: string;
  accuracyLabel: string; byDrillT: string; reviewNone: string;
  statPractice: string; statWords: string;
  attemptsLabel: string; practiceWeak: string;
  drillNames: { flashcards: string; voiceflash: string; dictation: string; sentence: string; roleplay: string };
  hours: string; convs: string; minutes: string; days7: string;
  accentT: string; weakEngine: string;
  coachStatus: string; unlimited: string; placeholder: string;
  chatGreet: string; coachIdle: string; coachOnline: string; coachOffline: string; coachTip: string;
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
  examMeta: string[]; errorIssues: string[];
  trackTitle: string; trackMeta: string;
  reminders: string; dailyAlarm: string; dailyAlarmSub: string;
  notifLabels: NotifLabel[];
  theme: string; signOut: string; now: string;
  settingsT: string; appLangT: string; appLangNote: string;
  modeT: string; modeDark: string; modeLight: string; soundT: string; soundS: string; brightT: string; brightS: string;
  testAlarm: string; customTime: string; calendarT: string;
  voiceT: string; voiceS: string; sbT: string; sbS: string; rpT: string; rpS: string;
  startQuiz: string; quizPassed: string; quizFailed: string; retry: string; qNext: string; backToDen: string;
  lessonDone: string; lessonSoon: string; builderTag: string; sbSkipSay: string;
  denLearned: string;
  examplesT: string; tableT: string; errorsT: string; audioT: string; videoT: string; subsT: string;
  sayFr: string; transEn: string; orTypeT: string; checkT: string;
  correctT: string; incorrectT: string; nextCard: string; vfDoneT: string;
  vfSelfT: string; vfGot: string; vfMissed: string;
  learnT: string; arrangeT: string; sayItT: string; writeItT: string; wellDone: string;
  chooseLevel: string; startRp: string; rpDoneT: string; rpDoneS: string; rpYourLine: string; rpTag: string; rpReport: string; rpNotHeard: string;
  rpYourTurn: string; rpRespond: string; rpModel: string;
  bannerText: string;
  uDone: string; uLock: string; uSoon: string; denLessonsReady: string;

  // --- v2 additions (today strip, browse, review, placement, dictation, downloads, billing) ---
  todayTag: string; toReviewShort: string; caughtUp: string; tomorrow: string;
  browse: string; browseClose: string; wordOfDay: string; save: string; saved: string;
  smartReviewT: string; smartReviewS: string; startReview: string; dueToday: string;
  allCaught: string; allCaughtS: string; nextDue: string;
  srEmptyT: string; srEmptyS: string; srDueTitle: string;
  srItems: string; srTomorrow: string; srInDays: string; srLadder: string;
  srSession: string; srReveal: string; srAgain: string; srGot: string;
  srDone: string; srDoneS: string; srAgainNote: string;
  placementT: string; placementS: string; placementCta: string; estimate: string;
  dicteeT: string; dicteeS: string; play: string; slow: string; playsLeft: string;
  writeHeard: string; check2: string; perfectNoMistakes: string; youWrote: string; correctIs: string;
  downloadsT: string; downloadsS: string; storage: string; wifiOnly: string;
  // Paywall copy is deliberately absent until Phase 10 can gate a real
  // entitlement: copy that names a feature the app does not gate is the defect,
  // not the missing string. See app/settings.tsx.
  subscription: string; currentPlan: string;
  skillRead: string; skillListen: string; skillSpeak: string; skillWrite: string; skillCourse: string; skillVocab: string; skillReadVocab: string;
  accountBilling: string; learningSec: string; appearanceSec: string; notificationsSec: string;

  // --- onboarding & sign-in (English-primary, FR when device is French) ---
  obSteps: string[];
  obTagline: string; obIntro: string; createAccount: string; alreadyAccount: string; signInLink: string;
  obCreateT: string; passwordPh: string; continueT: string; orT: string; withApple: string; withGoogle: string;
  obThemeT: string; obThemeS: string; obGoalT: string; obExpT: string; obPaceT: string; obAccentT: string;
  obRemindT: string; obRemindS: string; enableReminders: string; alarmChips: string[]; paceSubs: string[];
  expTitles: string[]; expSubs: string[];
  obCalibT: string; obCalibS: string; obCalibRec: string; obCalibTap: string;
  obDecouverte: string; obSeuil: string; obResultA1: string; obResultB1: string; enterEalch: string;
  welcomeBack: string; helloAgain: string; forgotPw: string; signInBtn: string; newHere: string;

  // --- v3 additions (accounts, language truth, hardcoded-string sweep) ---
  soonT: string;
  obNameT: string; obNameS: string; namePh: string; skipT: string;
  welcomeWord: string; guestName: string;
  continueGuest: string; emailPh: string;
  errEmail: string; errPw: string; errCreds: string; errSignIn: string; errSignUp: string;
  resetSent: string; errReset: string; errAuthUnavailable: string;
  resetTag: string; resetTitle: string; resetSub: string; resetInvalid: string;
  newPwPh: string; setNewPw: string; backToSignIn: string; errResetFailed: string;
  pwShow: string; pwHide: string;

  // --- account deletion (Apple 5.1.1(v) / Play) ---
  dangerZone: string; delAccount: string; delAccountSub: string;
  delTag: string; delTitle: string; delBody: string; delBodyGuest: string;
  delList: string[];
  delConfirmWord: string; delConfirmLabel: string; delConfirmPh: string;
  delBtn: string; delBtnGuest: string; delCancel: string;
  errDelete: string; errDelNoSession: string;
  legalPre: string; legalTerms: string; legalAnd: string; legalPrivacy: string; legalPost: string;
  /** freezeLeft is the profile chip; freezeShort/freezeShortPl fit the today strip,
   *  where the chip string wraps to two lines. Both take {n}. */
  freezeLeft: string; freezeShort: string; freezeShortPl: string;
  freezeNote: string; freezeIdle: string; streakWord: string;
  levelNames: { A1: string; B1: string };
  dayLetters: string[];
  /** Full weekday names, Monday-first — substituted into freezeNote's {d}. */
  weekdayNames: string[];
  goalWord: string; daysWord: string; dayOne: string;
  caughtUpShort: string; reviewShort: string;
  dictRowSub: string; browseOpen: string; browseLess: string; nounFem: string;
  denBanT: string; denBanS: string; subLessonsWord: string;
  lessonNow: string; tapHear: string;
  playerPlaylist: string; rpLevelNote: string; repeatWord: string;
  playerListen: string; playerNow: string; playerEmpty: string; restart: string;
  speakScene: string; speakRepeat: string; vfTitle: string;
  chatRetry: string;
  chatSuggs: { label: string; msg: string }[];
  planFree: string; planFreeDesc: string;
  offlineTag: string; dlCats: string[]; dlSubs: string[]; freeSpace: string;
  wifiOnlySub: string; availableT: string; offlineSync: string;
  offlineReadyT: string; offlineReadyS: string; contentVersionL: string; contentCountsFmt: string;
  checkUpdates: string; updatingL: string; upToDateL: string; updatedL: string;
  cachedUpdateL: string; audioSoonL: string;
  dcTag: string; dcTitle: string; dcPurpose: string; dcYours: string; dcCorrect: string;
  dcOkSub: string; dcHint: string; dcPlaying: string; dcPlay: string;
  dcPlaysLeft: string; dcNoPlays: string; dcFinish: string; dcNext: string;
  dcDoneT: string; dcDoneS: string; dcRedo: string; dcHome: string; dcTypePh: string; dcVoiceNote: string;
  errorTypes: string[];
  clock12T: string; clock24T: string;
};

export const T: Record<Lang, Strings> = {
  fr: {
    greets: { morning: 'BONJOUR', afternoon: 'BON APRÈS-MIDI', evening: 'BONSOIR', late: 'VOUS TRAVAILLEZ TARD', early: 'PRATIQUE DE LÈVE-TÔT' },
    seeAll: 'TOUT VOIR', playlists: 'Vos playlists', examiner: "L'Examinateur", tracksWord: 'pistes',
    weak: 'Vos points faibles', week: 'CETTE SEMAINE', resume: 'Reprendre',
    weakSlip: '1 erreur', weakSlipPl: '{n} erreurs', weakEmpty: 'Vos points faibles apparaîtront ici au fil de la pratique.',
    heroTag: 'RÉEL — SURVIE · REPRENDRE', heroSub: 'Commandez comme un vrai Parisien · avec Camille',
    resumeTag: 'REPRENDRE', beginTag: 'POUR COMMENCER', resumeSub: 'Reprenez où vous en étiez', begin: 'Commencer', vocabPrime: 'Le vocabulaire',
    reviewHeroTitle: 'À réviser', listenHeroTitle: "À l'écoute", listenHeroSub: 'De vraies phrases, une vraie voix',
    found: 'Les fondations', denT: 'Le coin des débutants', denS: 'Sons · A1 · A2 — le cursus complet',
    cardsT: 'Cartes mémoire', cardsS: '{n} cartes · à réviser', cardsTag: 'RAPPEL · CARTES', unitsWord: 'UNITÉS',
    tabListen: 'ÉCOUTE', tabSpeak: 'PARLE', tabProfile: 'PROFIL', tabCoach: 'COACH',
    appLangNames: { fr: 'Français', en: 'Anglais' },
    practice: 'Pratiquer à voix haute', phrase: 'PHRASE', next: 'SUIVANTE',
    queueOn: 'Dans votre pratique ✓', queueOff: 'File de pratique',
    end: 'Terminer', cont: 'Continuer →', why: 'Pourquoi ?',
    micIdle: 'Touchez pour parler', micRec: 'Dites-le à voix haute…', micDone: 'Comparez avec la réponse modèle, puis réessayez ou continuez',
    micHeard: 'ENTENDU', micNoSpeech: 'Je n’ai rien entendu. Réessayez',
    micDenied: 'Accès au micro refusé. Activez-le dans les réglages de votre téléphone',
    micUnavail: 'Micro indisponible sur cette version. Comparez vous-même',
    micGood: 'Bien dit', micClose: 'Presque. Réessayez', micOff: 'Pas tout à fait',
    youSaid: 'UNE RÉPONSE MODÈLE — À DIRE À VOIX HAUTE', liaisonChip: 'Attention à la liaison · un‿allongé',
    speakYouSaid: 'VOUS AVEZ DIT', speakModelWas: 'Camille a dit',
    reportTag: 'VOTRE RAPPORT', review: 'À revoir', replay: 'Rejouer', talk: 'Parler au coach',
    traj: 'B1 → B1+ trajectoire', conf: 'CONFIANCE',
    reportSub: 'Bâti sur vos tentatives réelles, pas sur des exemples.',
    reportEmptyT: "Rien à signaler pour l'instant",
    reportEmptyS: "Terminez un exercice et votre rapport apparaît ici, bâti sur ce que vous avez vraiment dit et écrit.",
    accuracyLabel: 'PRÉCISION', byDrillT: 'Par exercice',
    statPractice: 'PRATIQUE', statWords: 'MOTS VUS',
    reviewNone: "Rien à revoir pour l'instant. Vous les réussissez.",
    attemptsLabel: '{n} tentatives', practiceWeak: 'Réviser ces mots',
    drillNames: { flashcards: 'Cartes', voiceflash: 'Flash vocal', dictation: 'Dictée', sentence: 'Constructeur', roleplay: 'Jeu de rôle' },
    hours: 'HEURES PARLÉES', convs: 'CONVERSATIONS', minutes: 'Minutes parlées', days7: '7 DERNIERS JOURS',
    accentT: 'Votre accent', weakEngine: 'Le moteur de faiblesses',
    coachStatus: 'votre coach · en ligne', unlimited: 'POURQUOI ? · ILLIMITÉ', placeholder: 'Posez votre question…',
    chatGreet: 'Bonjour ! Posez-moi vos questions sur le français, en français ou en anglais.',
    coachIdle: 'votre coach de français', coachOnline: 'en ligne', coachOffline: 'hors ligne · conseils enregistrés', coachTip: 'Conseil enregistré (hors ligne)',
    skills: ['FLUIDITÉ', 'PRÉCISION', 'RYTHME & LIAISONS'],
    denTag: 'LE COIN DES DÉBUTANTS',
    denIntro: "Un vrai cursus, du premier son jusqu'au passé composé. Aucune honte à commencer petit.",
    denCont: 'Continuer',
    trackDescs: {
      sons: "De l'alphabet à la masterclass de prononciation : les sons avant les mots.",
      a1: 'Salutations, genre, être & avoir, la vie quotidienne : les 26 unités du niveau Découverte.',
      a2: 'Verbes, passé composé, pronoms objets : le niveau Survie, en profondeur.',
    },
    trackLabels: { sons: 'PRONONCIATION · MASTERCLASS', a1: 'A1 · DÉCOUVERTE', a2: 'A2 · SURVIE' },
    flipHint: 'Touchez pour retourner', again: 'Encore', know: 'Je sais',
    deckDone: 'Paquet terminé', deckSub: 'Les cartes ratées reviendront demain, juste avant que vous les oubliiez.', redo: 'Rejouer le paquet', backFeed: 'Retour au flux',
    frontFr: 'FRANÇAIS', frontEn: 'ANGLAIS',
    vocabTag: 'AVANT DE PARLER · INJECTEUR', vocabSub: 'Utilisez chacun au moins une fois, à voix haute et avec assurance.',
    register: 'REGISTRE', registerBody: 'Dites toujours', registerEnd: 'sonne comme un ordre. Les serveurs le remarquent.',
    go: "J'y vais →", grammarTag: 'GRAMMAIRE · SANS QUITTER LA CONVERSATION',
    grammarBody: "La liaison relie la consonne finale muette à la voyelle qui suit. Après un, les, vous, ils, elle est obligatoire, et c'est la première chose qu'un examinateur entend.",
    askCamille: 'Demandez à Camille →',
    // Index-aligned to EXAMS in app/home.tsx: TEF Canada · TCF Canada · DELF B2.
    examMeta: ['Expression orale · 15 min · chrono', 'Compréhension · une seule écoute', "L'examinateur vous interrompt"],
    errorIssues: ['Liaison omise. Il faut enchaîner : un‿allongé.', '« Je voudrais » est le registre attendu avec le personnel.', 'Une pause de 1,8 s : vous avez traduit dans votre tête. On va travailler ça.'],
    trackTitle: 'Les voyelles nasales', trackMeta: 'La Voix · 2 min · B1',
    reminders: 'Rappels de pratique', dailyAlarm: 'Alarme quotidienne', dailyAlarmSub: 'Votre séance vous appelle',
    notifLabels: [
      { label: 'Rappel du soir', sub: "Une notification à l'heure choisie" },
      { label: 'Rapport quotidien', sub: 'Votre rapport, chaque soir après la séance' },
      { label: 'Encouragements', sub: 'Micro-défis de confiance, sans streak' },
    ],
    theme: 'Thème', signOut: 'Se déconnecter', now: 'MAINTENANT',
    settingsT: 'Réglages', appLangT: "Langue de l'application", appLangNote: 'Interface FR & EN complète. Autres langues bientôt.',
    modeT: 'Apparence', modeDark: 'SOMBRE', modeLight: 'CLAIR', soundT: 'Effets sonores', soundS: 'Sons de réussite, cartes et alarme', brightT: 'Éclaircir pendant la lecture', brightS: "Éclaircit un écran sombre pendant les leçons, puis le restaure",
    testAlarm: "Tester l'alarme", customTime: 'Heure personnalisée', calendarT: 'Votre calendrier',
    voiceT: 'Flash vocal', voiceS: 'image → voix · traduction', sbT: 'Phrases', sbS: 'apprendre · dire · écrire', rpT: 'Jeu de rôle', rpS: 'conversation IA · A1 → B2',
    startQuiz: 'Commencer le quiz', quizPassed: 'RÉUSSI', quizFailed: 'Pas encore', retry: 'Réessayer', qNext: 'Suivant', backToDen: 'Retour au cursus',
    lessonDone: 'Terminer la leçon', lessonSoon: 'Leçon bientôt disponible', builderTag: 'CONSTRUCTEUR', sbSkipSay: 'Passer',
    denLearned: '{n} / {m} appris',
    examplesT: 'Exemples & usages', tableT: 'Tableau', errorsT: 'Erreurs communes', audioT: 'Pratique audio', videoT: 'Vidéo — la bouche en 3D', subsT: 'Sous-leçons',
    sayFr: 'Dites-le en français', transEn: 'Traduisez en anglais', orTypeT: 'ou écrivez votre réponse', checkT: 'Vérifier',
    correctT: 'Correct !', incorrectT: 'Pas tout à fait : ', nextCard: 'Carte suivante', vfDoneT: 'Session terminée',
    vfSelfT: 'LA RÉPONSE — ALORS ?', vfGot: "Je l'ai bien dit", vfMissed: 'Pas tout à fait',
    learnT: 'Apprenez ces mots', arrangeT: 'Arrangez la phrase', sayItT: 'Dites-la à voix haute', writeItT: 'Écrivez-la', wellDone: 'Bravo, phrase acquise',
    chooseLevel: 'Choisissez votre niveau', startRp: 'Commencer la conversation', rpDoneT: 'Scène terminée', rpDoneS: 'Camille : « Votre marchand vous adore. »', rpYourLine: 'VOTRE RÉPLIQUE — À DIRE À VOIX HAUTE', rpTag: 'JEU DE RÔLE', rpReport: 'Le rapport →', rpNotHeard: 'Pas entendu, votre réplique est affichée.',
    rpYourTurn: 'À VOUS', rpRespond: 'Répondez en français, puis vérifiez', rpModel: 'Réponse modèle',
    bannerText: 'Votre séance de {t} vous attend : Au Café, 4 min. Camille est prête.',
    uDone: 'ACQUIS', uLock: '···', uSoon: 'BIENTÔT', denLessonsReady: '{n} leçons prêtes',

    todayTag: "AUJOURD'HUI", toReviewShort: 'à revoir', caughtUp: '✓ à jour', tomorrow: 'demain →',
    browse: 'Parcourir', browseClose: 'Réduire', wordOfDay: 'MOT DU JOUR', save: 'Enregistrer', saved: 'Enregistré ✓',
    smartReviewT: 'Révision intelligente', smartReviewS: 'Votre file du jour · mots, sons, grammaire', startReview: 'Commencer la révision', dueToday: 'à réviser',
    allCaught: 'Tout est à jour', allCaughtS: 'Revenez demain pour la prochaine série.', nextDue: 'PROCHAINEMENT',
    srEmptyT: "Rien à réviser pour l'instant",
    srEmptyS: 'Terminez un exercice et ses mots reviennent ici, espacés pour mieux les retenir.',
    srDueTitle: 'À réviser.', srItems: 'éléments', srTomorrow: 'demain', srInDays: 'dans {n} jours',
    // Décrit l'espacement SM-2 tel qu'il est : les intervalles sortent de vos
    // réponses (progress.logic.ts), ils ne suivent aucune suite fixe de jours.
    srLadder: "Les intervalles s'adaptent à vos réponses : ce que vous réussissez revient plus tard, ce que vous ratez revient vite.",
    srSession: 'SESSION DE RÉVISION', srReveal: 'Voir la réponse', srAgain: 'Encore', srGot: 'Je sais',
    srDone: 'Révision terminée', srDoneS: '{n} sur {m} réussis. Les ratés reviennent bientôt.',
    srAgainNote: '« Encore » le remet dans la file.',
    placementT: 'Test de niveau', placementS: 'Quelques questions, estimation en direct.', placementCta: 'Passer le test', estimate: 'ESTIMATION',
    dicteeT: 'La Dictée', dicteeS: "Entraînez l'oreille et l'orthographe : écrivez exactement ce que vous entendez.", play: 'Écouter', slow: '0,75×', playsLeft: 'écoutes',
    writeHeard: 'Écrivez ce que vous entendez', check2: 'Vérifier', perfectNoMistakes: 'Parfait, aucune faute', youWrote: 'Vous avez écrit', correctIs: 'La bonne réponse',
    downloadsT: 'Téléchargements', downloadsS: 'Écoutez hors connexion', storage: 'Stockage', wifiOnly: 'Wi-Fi uniquement',
    subscription: 'Abonnement', currentPlan: 'FORMULE ACTUELLE',
    skillRead: 'LIRE', skillListen: 'ÉCOUTE', skillSpeak: 'PARLE', skillWrite: 'ÉCRIRE', skillCourse: 'COURS', skillVocab: 'VOCAB', skillReadVocab: 'LIRE · VOCAB',
    accountBilling: 'Compte & facturation', learningSec: 'Apprentissage', appearanceSec: 'Apparence', notificationsSec: 'Notifications',

    obSteps: ['01 — VOTRE COMPTE', '02 — VOTRE PRÉNOM', '03 — VOTRE THÈME', '04 — VOTRE OBJECTIF', '05 — VOTRE EXPÉRIENCE', '06 — VOTRE RYTHME', '07 — VOTRE ACCENT', '08 — VOS RAPPELS', '09 — ÉCHAUFFEMENT', '10 — VOTRE NIVEAU'],
    obTagline: 'Parlez avec élégance.',
    obIntro: 'Vous avez fait la grammaire. Passez à la parole. Parlez à voix haute dès le premier jour, et faites-vous comprendre.',
    createAccount: 'Créer un compte', alreadyAccount: 'Vous avez déjà un compte ?', signInLink: 'Se connecter',
    obCreateT: 'Créez votre compte.', passwordPh: 'Mot de passe', continueT: 'Continuer', orT: 'OU',
    withApple: 'Continuer avec Apple', withGoogle: 'Continuer avec Google',
    obThemeT: 'Choisissez votre\ncouleur signature.', obThemeS: "Un fil vibrant dans l'obscurité. Modifiable à tout moment dans votre profil.",
    obGoalT: 'Pourquoi le français ?', obExpT: 'Combien de français\nvit déjà en vous ?', obPaceT: 'Minutes par jour ?',
    obAccentT: 'Quel français\nCamille doit-elle parler ?',
    obRemindT: 'Quand devons-nous\nvous appeler pour pratiquer ?', obRemindS: "Une alarme quotidienne rend la série invisible, et l'habitude réelle.",
    enableReminders: 'Activer les rappels', alarmChips: ['matin', 'midi', 'soir', 'nuit'],
    paceSubs: ['une pause café', 'le trajet du matin', 'sérieux', 'immersion'],
    expTitles: ['Grand débutant', "Souvenirs d'école", 'Conversationnel', 'Avancé'],
    expSubs: ['je pars de zéro', 'le français scolaire, presque oublié', 'je tiens une conversation simple', "peaufiner l'accent et le registre"],
    obCalibT: 'Lisez ceci à voix haute.', obCalibS: 'Dix secondes suffisent. Lisez à voix haute et sentez le rythme, les liaisons et les voyelles nasales.',
    obCalibRec: 'Continuez à lire : rythme, liaisons, voyelles nasales', obCalibTap: 'Touchez le micro et lisez',
    obDecouverte: 'Découverte : le commencement.', obSeuil: 'Seuil : le passage.',
    obResultA1: 'Une page blanche. Votre parcours commence au Coin des débutants : les sons d\'abord, puis les mots. Camille restera douce.',
    obResultB1: "Des fondations solides. D'après votre expérience, le flux de ce soir commence par les liaisons et les voyelles nasales.",
    enterEalch: 'Entrer dans Ealch',
    welcomeBack: 'BON RETOUR', helloAgain: 'Re-bonjour.', forgotPw: 'Mot de passe oublié ?', signInBtn: 'Se connecter', newHere: 'Nouveau ici ?',

    soonT: 'bientôt',
    obNameT: 'Comment Camille\ndoit-elle vous appeler ?',
    obNameS: 'Votre prénom suffit. Modifiable à tout moment dans votre profil.',
    namePh: 'Prénom', skipT: 'Passer',
    welcomeWord: 'Bienvenue', guestName: 'Invité',
    continueGuest: 'Continuer sans compte', emailPh: 'E-mail',
    errEmail: 'Entrez une adresse e-mail valide.',
    errPw: 'Le mot de passe doit contenir au moins 8 caractères.',
    errCreds: 'E-mail et mot de passe requis.',
    errSignIn: 'Connexion impossible. Vérifiez vos identifiants.',
    errSignUp: 'Création du compte impossible. Réessayez.',
    resetSent: 'Lien envoyé. Vérifiez votre boîte mail.',
    errReset: 'Envoi impossible. Réessayez dans un instant.',
    errAuthUnavailable: 'Connexion au serveur impossible. Vérifiez votre réseau et réessayez.',
    resetTag: 'RÉINITIALISATION',
    resetTitle: 'Nouveau mot de passe.',
    resetSub: 'Choisissez un mot de passe d’au moins 8 caractères. Vous serez connecté aussitôt.',
    resetInvalid: 'Ce lien est invalide ou a expiré. Demandez-en un nouveau depuis l’écran de connexion.',
    dangerZone: 'Zone sensible',
    delAccount: 'Supprimer mon compte',
    delAccountSub: 'Efface définitivement votre compte et vos données.',
    delTag: 'SUPPRESSION',
    delTitle: 'Supprimer votre compte.',
    delBody: 'Cette action est définitive. Votre compte et toutes les données ci-dessous seront effacés de nos serveurs et de cet appareil. Il n’y a pas de retour en arrière.',
    delBodyGuest: 'Vous utilisez Ealch sans compte : rien n’est stocké sur nos serveurs. Cette action efface toutes vos données de cet appareil. Il n’y a pas de retour en arrière.',
    delList: [
      'Votre profil et votre adresse e-mail',
      'Votre progression, votre série et vos révisions',
      'Vos sessions et vos rapports',
    ],
    delConfirmWord: 'SUPPRIMER',
    delConfirmLabel: 'Tapez {w} pour confirmer.',
    delConfirmPh: 'Tapez {w}',
    delBtn: 'Supprimer définitivement',
    delBtnGuest: 'Effacer toutes mes données',
    delCancel: 'Annuler',
    errDelete: 'Suppression impossible. Réessayez dans un instant.',
    errDelNoSession: 'Votre session a expiré. Reconnectez-vous, puis réessayez.',
    newPwPh: 'Nouveau mot de passe', setNewPw: 'Enregistrer le mot de passe', backToSignIn: 'Retour à la connexion',
    errResetFailed: 'Impossible de mettre à jour le mot de passe. Réessayez.',
    pwShow: 'Afficher le mot de passe', pwHide: 'Masquer le mot de passe',
    legalPre: "En créant un compte, vous acceptez les ",
    legalTerms: "conditions d'utilisation",
    legalAnd: ' et la ',
    legalPrivacy: 'politique de confidentialité',
    legalPost: " d'Ealch. En fournissant votre e-mail, vous consentez à recevoir les communications d'Ealch. Vous pouvez vous désabonner à tout moment.",
    freezeLeft: '✦ {n} GEL RESTANT',
    freezeShort: '{n} gel', freezeShortPl: '{n} gels',
    freezeNote: '{d} gelé ✦ Série protégée.',
    freezeIdle: '1 gel par semaine, utilisé automatiquement.',
    streakWord: 'jours de suite',
    levelNames: { A1: 'DÉCOUVERTE', B1: 'SEUIL' },
    dayLetters: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
    weekdayNames: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    goalWord: 'objectif', daysWord: 'jours', dayOne: "Le jour 1 commence aujourd'hui",
    caughtUpShort: 'à jour', reviewShort: 'à réviser',
    dictRowSub: 'Écoutez et écrivez, accents compris',
    browseOpen: 'Parcourir — playlists, examens, points faibles', browseLess: 'Masquer',
    nounFem: 'nom féminin',
    denBanT: 'Pas sûr de votre niveau ?', denBanS: 'Test de placement — 3 minutes, adaptatif',
    subLessonsWord: 'sous-leçons',
    lessonNow: 'EN COURS', tapHear: 'Touchez pour entendre',
    playerPlaylist: 'PRONONCIATION EN PROFONDEUR',
    playerListen: 'Écoute', playerNow: 'EN LECTURE', playerEmpty: 'Rien à écouter pour le moment.', restart: 'Recommencer',
    rpLevelNote: 'La complexité de la conversation s’adapte au niveau choisi.',
    repeatWord: 'Répétez',
    speakScene: 'RÉEL — AU CAFÉ', speakRepeat: 'Répétez la phrase de Camille', vfTitle: 'FLASH VOCAL',
    chatRetry: 'Réessayez dans un instant.',
    chatSuggs: [
      { label: 'Pourquoi « je voudrais » ?', msg: 'Pourquoi « je voudrais » et pas « je veux » ?' },
      { label: 'Expliquer la liaison', msg: 'Explique-moi les liaisons, simplement.' },
      { label: 'Le plan de demain ?', msg: 'Quel est le plan de demain ?' },
    ],
    planFree: 'Essentiel — Gratuit',
    planFreeDesc: 'Feed quotidien · 1 scénario par jour · Le Coin des débutants',
    offlineTag: 'HORS LIGNE',
    dlCats: ['Playlists', 'Leçons', 'Audio du coach'],
    dlSubs: ['12 leçons · 210 Mo', 'playlist · 160 Mo', '24 leçons · 340 Mo'],
    freeSpace: 'Espace libre',
    wifiOnlySub: 'Pause des téléchargements en données mobiles',
    availableT: 'DISPONIBLE',
    offlineSync: 'Les progrès hors ligne se synchronisent au retour du réseau.',
    offlineReadyT: 'Tout fonctionne hors ligne',
    offlineReadyS: "Vos leçons, exercices et vocabulaire sont intégrés à l'app. Aucun téléchargement nécessaire.",
    contentVersionL: 'Version du contenu', contentCountsFmt: '{u} unités · {l} leçons · {i} phrases',
    checkUpdates: 'Rechercher des mises à jour', updatingL: 'Vérification…', upToDateL: 'À jour', updatedL: 'Contenu mis à jour.',
    cachedUpdateL: 'Mise à jour téléchargée', audioSoonL: 'Des packs audio téléchargeables arriveront dans une prochaine mise à jour.',
    dcTag: 'DICTÉE · A2', dcTitle: 'Écoutez, écrivez.',
    dcPurpose: 'Entraînez votre oreille et votre orthographe : écoutez la phrase, puis écrivez-la exactement, accents, accords et homophones compris.',
    dcYours: 'VOTRE RÉPONSE', dcCorrect: 'CORRECT',
    dcOkSub: 'Accents et accord compris. Cette phrase reviendra dans 7 jours.',
    dcHint: 'Entrée pour vérifier · les touches ajoutent les accents',
    dcPlaying: 'Écoutez…', dcPlay: 'Écouter la phrase',
    dcPlaysLeft: 'écoutes restantes', dcNoPlays: 'plus d’écoutes, à vous d’écrire',
    dcFinish: 'Terminer', dcNext: 'Phrase suivante',
    dcDoneT: 'Dictée terminée.', dcDoneS: '{n} sur {m} sans faute. Les erreurs rejoignent votre file de révision.',
    dcRedo: 'Refaire la dictée', dcHome: 'Retour à l’accueil',
    dcTypePh: 'Écrivez ce que vous entendez…',
    dcVoiceNote: 'Voix française de l’appareil. Muette si aucune voix FR n’est installée.',
    errorTypes: ['PRONONCIATION', 'REGISTRE', 'FLUIDITÉ'],
    clock12T: '12 H', clock24T: '24 H',
  },
  en: {
    greets: { morning: 'GOOD MORNING', afternoon: 'GOOD AFTERNOON', evening: 'GOOD EVENING', late: "YOU'RE WORKING LATE", early: 'EARLY RISER PRACTICE' },
    seeAll: 'SEE ALL', playlists: 'Your playlists', examiner: 'The Examiner', tracksWord: 'tracks',
    weak: 'Your weak spots', week: 'THIS WEEK', resume: 'Resume',
    weakSlip: '1 slip', weakSlipPl: '{n} slips', weakEmpty: 'Your weak spots show up here as you practise.',
    heroTag: 'REAL-WORLD — SURVIVAL · RESUME', heroSub: 'Order like a local · with Camille',
    resumeTag: 'CONTINUE', beginTag: 'START HERE', resumeSub: 'Pick up where you left off', begin: 'Begin', vocabPrime: 'Vocab first',
    reviewHeroTitle: 'À réviser', listenHeroTitle: "À l'écoute", listenHeroSub: 'Real phrases, in a real voice',
    found: 'Foundations', denT: "Beginners' Den", denS: 'Sounds · A1 · A2 — the full curriculum',
    cardsT: 'Flashcards', cardsS: '{n} cards · due now', cardsTag: 'RECALL · FLASHCARDS', unitsWord: 'UNITS',
    tabListen: 'LISTEN', tabSpeak: 'SPEAK', tabProfile: 'PROFILE', tabCoach: 'COACH',
    appLangNames: { fr: 'French', en: 'English' },
    practice: 'Practice out loud', phrase: 'PHRASE', next: 'NEXT',
    queueOn: 'In your practice ✓', queueOff: 'Practice queue',
    end: 'End', cont: 'Continue →', why: 'Why?',
    micIdle: 'Tap to speak', micRec: 'Say it out loud…', micDone: 'Compare with the model reply, then retry or continue',
    micHeard: 'HEARD', micNoSpeech: 'Didn’t catch that. Try again',
    micDenied: 'Microphone access denied. Turn it on in your phone’s settings',
    micUnavail: 'Mic unavailable on this build. Compare it yourself',
    micGood: 'Well said', micClose: 'Close. Try again', micOff: 'Not quite',
    youSaid: 'A MODEL REPLY — SAY IT ALOUD', liaisonChip: 'Mind the liaison · un‿allongé',
    speakYouSaid: 'YOU SAID', speakModelWas: 'Camille said',
    reportTag: 'YOUR REPORT', review: 'To review', replay: 'Replay', talk: 'Talk to the coach',
    traj: 'B1 → B1+ trajectory', conf: 'CONFIDENCE',
    reportSub: 'Built from your real attempts, not sample data.',
    reportEmptyT: 'Nothing to report yet',
    reportEmptyS: 'Finish a drill and your report appears here, built from what you actually said and typed.',
    accuracyLabel: 'ACCURACY', byDrillT: 'By drill',
    statPractice: 'PRACTICE', statWords: 'WORDS MET',
    reviewNone: 'Nothing to review yet. You are getting these right.',
    attemptsLabel: '{n} attempts', practiceWeak: 'Practice these words',
    drillNames: { flashcards: 'Flashcards', voiceflash: 'Voice Flash', dictation: 'Dictation', sentence: 'Builder', roleplay: 'Role Play' },
    hours: 'HOURS SPOKEN', convs: 'CONVERSATIONS', minutes: 'Minutes spoken', days7: 'LAST 7 DAYS',
    accentT: 'Your accent', weakEngine: 'The weakness engine',
    coachStatus: 'your coach · online', unlimited: 'WHY? · UNLIMITED', placeholder: 'Ask your question…',
    chatGreet: 'Bonjour! Ask me anything about French, in French or English.',
    coachIdle: 'your French coach', coachOnline: 'online', coachOffline: 'offline · saved tips', coachTip: 'Saved tip (offline)',
    skills: ['FLUENCY', 'ACCURACY', 'RHYTHM & LIAISONS'],
    denTag: "BEGINNERS' DEN",
    denIntro: 'A real curriculum, from your first sound to the past tense. No shame in starting small.',
    denCont: 'Continue',
    trackDescs: {
      sons: 'From the alphabet to the pronunciation masterclass: sounds before words.',
      a1: 'Greetings, gender, être & avoir, daily life: the 26 units of level Découverte.',
      a2: 'Verbs, the past tense, object pronouns: level Survie, in depth.',
    },
    trackLabels: { sons: 'PRONUNCIATION · MASTERCLASS', a1: 'A1 · DISCOVERY', a2: 'A2 · SURVIVAL' },
    flipHint: 'Tap to flip', again: 'Again', know: 'Got it',
    deckDone: 'Deck complete', deckSub: "Missed cards return tomorrow, right before you'd forget them.", redo: 'Replay deck', backFeed: 'Back to feed',
    frontFr: 'FRENCH', frontEn: 'ENGLISH',
    vocabTag: 'BEFORE YOU SPEAK · INJECTOR', vocabSub: 'Use each at least once, out loud and with confidence.',
    register: 'REGISTER', registerBody: 'Always say', registerEnd: 'sounds like a demand. Waiters notice.',
    go: "Let's go →", grammarTag: 'GRAMMAR · WITHOUT LEAVING THE CONVERSATION',
    grammarBody: "A liaison links a word's silent final consonant to the vowel that follows. After un, les, vous, ils it is not optional, and dropping it is what examiners hear first.",
    askCamille: 'Ask Camille why →',
    // Index-aligned to EXAMS in app/home.tsx: TEF Canada · TCF Canada · DELF B2.
    examMeta: ['Speaking · 15 min · timed', 'Listening · single play', 'The examiner interrupts you'],
    errorIssues: ['Liaison dropped. It should flow as un‿allongé.', '« Je voudrais » is the expected register with staff.', 'A 1.8s pause: you translated in your head. We will drill this.'],
    trackTitle: 'The nasal vowels', trackMeta: 'La Voix · 2 min · B1',
    reminders: 'Practice reminders', dailyAlarm: 'Daily alarm', dailyAlarmSub: 'Your session calls you',
    notifLabels: [
      { label: 'Evening reminder', sub: 'One notification at your chosen hour' },
      { label: 'Daily report', sub: 'Your report, each evening after the session' },
      { label: 'Confidence nudges', sub: 'Micro-challenges, no streaks' },
    ],
    theme: 'Theme', signOut: 'Sign out', now: 'NOW',
    settingsT: 'Settings', appLangT: 'App language', appLangNote: 'FR & EN interface complete. More languages soon.',
    modeT: 'Appearance', modeDark: 'DARK', modeLight: 'LIGHT', soundT: 'Sound effects', soundS: 'Success chimes, cards & alarm', brightT: 'Boost brightness while reading', brightS: 'Lifts a dim screen during lessons, then puts it back',
    testAlarm: 'Test the alarm', customTime: 'Custom time', calendarT: 'Your calendar',
    voiceT: 'Voice Flash', voiceS: 'image → voice · translation', sbT: 'Sentences', sbS: 'learn · say · write', rpT: 'Role Play', rpS: 'AI conversation · A1 → B2',
    startQuiz: 'Start the quiz', quizPassed: 'PASSED', quizFailed: 'Not yet', retry: 'Retry', qNext: 'Next', backToDen: 'Back to curriculum',
    lessonDone: 'Finish the lesson', lessonSoon: 'Lesson coming soon', builderTag: 'BUILDER', sbSkipSay: 'Skip',
    denLearned: '{n} / {m} learned',
    examplesT: 'Examples & use cases', tableT: 'Table', errorsT: 'Common errors', audioT: 'Audio practice', videoT: 'Video — the mouth in 3D', subsT: 'Sub-lessons',
    sayFr: 'Say it in French', transEn: 'Translate to English', orTypeT: 'or type your answer', checkT: 'Check',
    correctT: 'Correct!', incorrectT: 'Not quite: ', nextCard: 'Next card', vfDoneT: 'Session complete',
    vfSelfT: 'THE ANSWER — HOW DID YOU DO?', vfGot: 'I said it right', vfMissed: 'Not quite',
    learnT: 'Learn these words', arrangeT: 'Arrange the sentence', sayItT: 'Say it out loud', writeItT: 'Write it', wellDone: 'Bravo, sentence mastered',
    chooseLevel: 'Choose your level', startRp: 'Start the conversation', rpDoneT: 'Scene complete', rpDoneS: 'Camille: "Your market vendor adores you."', rpYourLine: 'YOUR LINE — SAY IT ALOUD', rpTag: 'ROLE PLAY', rpReport: 'The report →', rpNotHeard: 'Not heard, your line is shown.',
    rpYourTurn: 'YOUR TURN', rpRespond: 'Respond in French, then check', rpModel: 'Model reply',
    bannerText: 'Your {t} session is waiting: Au Café, 4 min. Camille is ready.',
    uDone: 'DONE', uLock: '···', uSoon: 'SOON', denLessonsReady: '{n} lessons ready',

    todayTag: 'TODAY', toReviewShort: 'to review', caughtUp: '✓ caught up', tomorrow: 'tomorrow →',
    browse: 'Browse', browseClose: 'Close', wordOfDay: 'WORD OF THE DAY', save: 'Save', saved: 'Saved ✓',
    smartReviewT: 'Smart Review', smartReviewS: "Today's queue · words, sounds, grammar", startReview: 'Start review', dueToday: 'due today',
    allCaught: 'All caught up', allCaughtS: 'Come back tomorrow for the next set.', nextDue: 'NEXT DUE',
    srEmptyT: 'Nothing to review yet',
    srEmptyS: 'Finish a drill and its words come back here, spaced out so they stick.',
    srDueTitle: 'Due today.', srItems: 'items', srTomorrow: 'tomorrow', srInDays: 'in {n} days',
    // Describes SM-2 spacing as it actually is: intervals fall out of your own
    // answers (progress.logic.ts), they do not follow a fixed day sequence.
    srLadder: 'Intervals are tailored to your answers: what you get right comes back later, what you miss comes back soon.',
    srSession: 'REVIEW SESSION', srReveal: 'Reveal answer', srAgain: 'Again', srGot: 'Got it',
    srDone: 'Review complete', srDoneS: '{n} of {m} right. The misses come back soon.',
    srAgainNote: '“Again” puts it back in the queue.',
    placementT: 'Placement test', placementS: 'A few questions, live estimate.', placementCta: 'Take the test', estimate: 'ESTIMATE',
    dicteeT: 'La Dictée', dicteeS: 'Train your ear and spelling: write exactly what you hear.', play: 'Play', slow: '0.75×', playsLeft: 'plays',
    writeHeard: 'Write what you hear', check2: 'Check', perfectNoMistakes: 'Perfect, no mistakes', youWrote: 'You wrote', correctIs: 'The correct answer',
    downloadsT: 'Downloads', downloadsS: 'Listen offline', storage: 'Storage', wifiOnly: 'Wi-Fi only',
    subscription: 'Subscription', currentPlan: 'CURRENT PLAN',
    skillRead: 'READ', skillListen: 'LISTEN', skillSpeak: 'SPEAK', skillWrite: 'WRITE', skillCourse: 'COURSE', skillVocab: 'VOCAB', skillReadVocab: 'READ · VOCAB',
    accountBilling: 'Account & Billing', learningSec: 'Learning', appearanceSec: 'Appearance', notificationsSec: 'Notifications',

    obSteps: ['01 — YOUR ACCOUNT', '02 — YOUR NAME', '03 — YOUR THEME', '04 — YOUR GOAL', '05 — YOUR EXPERIENCE', '06 — YOUR PACE', '07 — YOUR ACCENT', '08 — YOUR REMINDERS', '09 — WARM-UP', '10 — YOUR LEVEL'],
    obTagline: 'Speak with elegance.',
    obIntro: "You've done the grammar. Now do the talking. Speak French out loud from day one, and be understood.",
    createAccount: 'Create an account', alreadyAccount: 'Already have an account?', signInLink: 'Sign in',
    obCreateT: 'Create your account.', passwordPh: 'Password', continueT: 'Continue', orT: 'OR',
    withApple: 'Continue with Apple', withGoogle: 'Continue with Google',
    obThemeT: 'Choose your\nsignature color.', obThemeS: 'One vibrant thread through the dark. Change it anytime in your profile.',
    obGoalT: 'Why French?', obExpT: 'How much French\nlives in you already?', obPaceT: 'Minutes per day?',
    obAccentT: 'Which French\nshould Camille speak?',
    obRemindT: 'When should we\ncall you to practice?', obRemindS: 'A daily alarm keeps the streak invisible, and the habit real.',
    enableReminders: 'Enable reminders', alarmChips: ['morning', 'noon', 'evening', 'night'],
    paceSubs: ['a coffee break', 'the morning commute', 'getting serious', 'immersion'],
    expTitles: ['Complete beginner', 'School memories', 'Conversational', 'Advanced'],
    expSubs: ['I am starting from zero', 'school French, mostly forgotten', 'I can hold simple conversations', 'polishing accent & register'],
    obCalibT: 'Read this aloud.', obCalibS: 'Ten seconds is enough. Read it aloud and feel the rhythm, the liaisons, the nasal vowels.',
    obCalibRec: 'Keep reading: rhythm, liaisons, nasal vowels', obCalibTap: 'Tap the mic and read',
    obDecouverte: 'Découverte: the beginning.', obSeuil: 'Seuil: the threshold.',
    obResultA1: "A clean slate. Your journey starts in the Beginners' Den: sounds first, then words. Camille will keep it gentle.",
    obResultB1: "Solid foundations. Based on your experience, tonight's feed starts with liaisons and nasal vowels.",
    enterEalch: 'Enter Ealch',
    welcomeBack: 'WELCOME BACK', helloAgain: 'Hello again.', forgotPw: 'Forgot password?', signInBtn: 'Sign in', newHere: 'New here?',

    soonT: 'soon',
    obNameT: 'What should\nCamille call you?',
    obNameS: 'Just your first name. You can change it anytime in your profile.',
    namePh: 'First name', skipT: 'Skip',
    welcomeWord: 'Welcome', guestName: 'Guest',
    continueGuest: 'Continue without an account', emailPh: 'Email',
    errEmail: 'Enter a valid email address.',
    errPw: 'Password must be at least 8 characters.',
    errCreds: 'Email and password are required.',
    errSignIn: 'Could not sign in. Check your credentials.',
    errSignUp: 'Could not create the account. Try again.',
    resetSent: 'Reset link sent. Check your inbox.',
    errReset: 'Could not send the reset email. Try again shortly.',
    errAuthUnavailable: 'Cannot reach the server. Check your connection and try again.',
    resetTag: 'PASSWORD RESET',
    resetTitle: 'Set a new password.',
    resetSub: 'Choose a password of at least 8 characters. You’ll be signed in straight away.',
    resetInvalid: 'This link is invalid or has expired. Request a new one from the sign-in screen.',
    dangerZone: 'Danger zone',
    delAccount: 'Delete my account',
    delAccountSub: 'Permanently erase your account and your data.',
    delTag: 'DELETION',
    delTitle: 'Delete your account.',
    delBody: 'This is permanent. Your account and everything below will be erased from our servers and from this device. There is no way to undo it.',
    delBodyGuest: 'You are using Ealch without an account, so nothing is stored on our servers. This erases all of your data from this device. There is no way to undo it.',
    delList: [
      'Your profile and email address',
      'Your progress, streak and reviews',
      'Your sessions and reports',
    ],
    delConfirmWord: 'DELETE',
    delConfirmLabel: 'Type {w} to confirm.',
    delConfirmPh: 'Type {w}',
    delBtn: 'Permanently delete',
    delBtnGuest: 'Erase all my data',
    delCancel: 'Cancel',
    errDelete: 'Could not delete the account. Try again shortly.',
    errDelNoSession: 'Your session has expired. Sign in again, then retry.',
    newPwPh: 'New password', setNewPw: 'Save password', backToSignIn: 'Back to sign in',
    errResetFailed: 'Could not update the password. Try again.',
    pwShow: 'Show password', pwHide: 'Hide password',
    legalPre: "By signing up you agree to Ealch's ",
    legalTerms: 'Terms of Use',
    legalAnd: ' and ',
    legalPrivacy: 'Privacy Policy',
    legalPost: '. By providing your email, you consent to receive communications from Ealch. You can opt out anytime.',
    freezeLeft: '✦ {n} FREEZE LEFT',
    freezeShort: '{n} freeze', freezeShortPl: '{n} freezes',
    freezeNote: '{d} was frozen ✦ Streak protected.',
    freezeIdle: '1 freeze per week, used automatically.',
    streakWord: 'day streak',
    levelNames: { A1: 'DÉCOUVERTE', B1: 'SEUIL' },
    dayLetters: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    weekdayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    goalWord: 'goal', daysWord: 'days', dayOne: 'Day 1 starts today',
    caughtUpShort: 'caught up', reviewShort: 'to review',
    dictRowSub: 'Hear it, type it, accents included',
    browseOpen: 'Browse — playlists, exams, weak spots', browseLess: 'Show less',
    nounFem: 'feminine noun',
    denBanT: 'Not sure where to start?', denBanS: 'Placement test — 3 minutes, adaptive',
    subLessonsWord: 'sub-lessons',
    lessonNow: 'NOW', tapHear: 'Tap to hear',
    playerPlaylist: 'PRONUNCIATION DEEP-DIVES',
    playerListen: 'Listen', playerNow: 'NOW PLAYING', playerEmpty: 'Nothing to listen to yet.', restart: 'Restart',
    rpLevelNote: 'The conversation complexity changes with the level you choose.',
    repeatWord: 'Repeat',
    speakScene: 'REAL-WORLD — AT THE CAFÉ', speakRepeat: "Repeat Camille's line", vfTitle: 'VOICE FLASH',
    chatRetry: 'Try again in a moment.',
    chatSuggs: [
      { label: 'Why « je voudrais »?', msg: 'Why « je voudrais » and not « je veux »?' },
      { label: 'Explain the liaison', msg: 'Explain liaisons again, simply.' },
      { label: "What's next?", msg: "What's tomorrow's plan?" },
    ],
    planFree: 'Essential — Free',
    planFreeDesc: "Daily feed · 1 scenario per day · Beginners' Den",
    offlineTag: 'OFFLINE',
    dlCats: ['Playlists', 'Lessons', 'Coach audio'],
    dlSubs: ['12 lessons · 210 MB', 'playlist · 160 MB', '24 lessons · 340 MB'],
    freeSpace: 'Free space',
    wifiOnlySub: 'Pause downloads on cellular',
    availableT: 'AVAILABLE',
    offlineSync: 'Progress made offline syncs when you’re back online.',
    offlineReadyT: 'Everything works offline',
    offlineReadyS: 'Your lessons, drills and vocabulary are built into the app. No download needed.',
    contentVersionL: 'Content version', contentCountsFmt: '{u} units · {l} lessons · {i} phrases',
    checkUpdates: 'Check for updates', updatingL: 'Checking…', upToDateL: 'Up to date', updatedL: 'Content updated.',
    cachedUpdateL: 'Downloaded update', audioSoonL: 'Downloadable audio packs arrive in a future update.',
    dcTag: 'DICTATION · A2', dcTitle: 'Listen, write.',
    dcPurpose: 'Train your ear and your spelling: write exactly what you hear, accents, agreement and homophones included.',
    dcYours: 'YOUR ANSWER', dcCorrect: 'CORRECT',
    dcOkSub: 'Accents and agreement all correct. This sentence returns in 7 days.',
    dcHint: 'Press Enter to check · tap keys to add accents',
    dcPlaying: 'Playing…', dcPlay: 'Play the sentence',
    dcPlaysLeft: 'plays left', dcNoPlays: 'no plays left, now write it',
    dcFinish: 'Finish', dcNext: 'Next sentence',
    dcDoneT: 'Dictation done.', dcDoneS: '{n} of {m} with no mistakes. Misses joined your review queue.',
    dcRedo: 'Do it again', dcHome: 'Back home',
    dcTypePh: 'Type what you hear…',
    dcVoiceNote: 'Uses your device’s French voice. Silent on setups with no FR voice.',
    errorTypes: ['PRONUNCIATION', 'REGISTER', 'FLUENCY'],
    clock12T: '12 H', clock24T: '24 H',
  },
};
