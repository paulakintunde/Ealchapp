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
  /** Section head over the secondary "Continue" chip row on home — the other
   *  fresh per-mode resume slots, when there's more than the one the hero shows. */
  continueRow: string;
  reviewHeroTitle: string; listenHeroTitle: string; listenHeroSub: string;
  freshHeroTitle: string; freshHeroSub: string; freshShort: string;
  found: string; denT: string; denS: string;
  cardsT: string; cardsS: string; cardsTag: string; unitsWord: string;
  // Theme parcours (Par thème): browser, detail and themed drill headers.
  themesTag: string; themesTitle: string; themesSub: string; allLevels: string;
  themeWeekTag: string; themeTag: string; wordsWord: string;
  stepNames: { decouvrir: string; construire: string; prononcer: string; ecouter: string; scene: string };
  stepSubs: { decouvrir: string; construire: string; prononcer: string; ecouter: string; scene: string };
  stepOf: string; lockedTag: string; inProgressTag: string; finaleTag: string; doneTag: string; newTag: string;
  noContent: string; levelWord: string; parcoursHead: string; parcoursSub: string; themeContinue: string;
  byThemeT: string; byThemeS: string;
  hubT: string; hubMeta: string;
  flashHubTag: string; flashHubPick: string; ctSoon: string; ctCardsN: string; ctDicteeN: string; ctPhrasesN: string; lvlAll: string; previewT: string;
  subThemesT: string; byTypeT: string; byTypeS: string;
  instrVocabFr: string; instrVocabEn: string; instrGapfill: string; instrConjugation: string; instrError: string; instrGrammar: string; instrRegister: string;
  ctVocabFrEn: string; ctVocabEnFr: string; ctGapfill: string; ctConjugation: string; ctError: string; ctGrammar: string; ctRegister: string;
  ctVocabFrEnS: string; ctVocabEnFrS: string; ctGapfillS: string; ctConjugationS: string; ctErrorS: string; ctGrammarS: string; ctRegisterS: string;
  tabListen: string; tabSpeak: string; tabProfile: string; tabCoach: string;
  /** Spoken names for the FR/EN toggle — 'FR' and 'EN' alone are two bare letters to a screen reader. */
  appLangNames: { fr: string; en: string };
  practice: string; phrase: string; next: string;
  queueOn: string; queueOff: string;
  end: string; cont: string; why: string;
  micIdle: string; micRec: string; micDone: string;
  micHeard: string; micNoSpeech: string; micDenied: string; micUnavail: string;
  micNoSpeechHint: string; micCantHear: string;
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
  drillNames: { flashcards: string; voiceflash: string; dictation: string; sentence: string; roleplay: string; placement: string };
  hours: string; convs: string; minutes: string; days7: string;
  accentT: string; weakEngine: string;
  coachStatus: string; unlimited: string; placeholder: string;
  chatGreet: string; coachIdle: string; coachOnline: string; coachOffline: string; coachTip: string;
  skills: string[];
  denTag: string; denIntro: string; denCont: string;
  // Den lesson overview + missions pages (overview flow, 2026-07-30)
  ovStart: string; ovSeeAll: string; ovSeeList: string; ovMissionsWord: string;
  /** The letter-grid footer link into the reference sheet, and the sheet's own
   *  way back out. Takes {n} — the full row count, not the previewed subset. */
  gridSeeAll: string; gridSeeAllHint: string; gridDefaultNote: string; termsMore: string; sceneStart: string; sceneChooseFirst: string; swipeToContinue: string; allGroupsSeen: string; trapHint: string; trapHintA11y: string; sheetBackToLesson: string; sheetContinue: string;
  // Deck and drill chrome. These were hard-coded French inside the components,
  // which made them untranslatable — a learner on the English UI met
  // "Touchez pour révéler" on a card whose every other word was English, and a
  // learner on the French UI met exactly the same string, so the toggle did
  // nothing for them either.
  checkAnswerFirst: string; tapToReveal: string; tapToFlip: string; answerToContinue: string; sceneEnd: string;
  nextGroup: string; reviewDone: string; answerAllToContinue: string;
  /** Reference-sheet chrome. Sheet TITLES are authored content and stay in the
   *  language the lesson was written in; only the frame around them is UI.
   *  sheetLinkA11y takes {n}. */
  sheetIndexTitle: string; sheetLinkA11y: string; backWord: string;
  ovStatRequired: string; ovStatGates: string; ovStatMilestones: string; ovStatBadge: string;
  ovPrereqNone: string; ovPrereqSome: string; ovMin: string; ovDiff: string;
  /** Header over the sibling-lesson rows. Only drawn by a unit with more than
   *  one lesson, which today means a1.30 (review + exam) and a2.10 (l1 + l2). */
  ovAlsoHere: string;
  moSub: string; moSubNoBadge: string; moListen: string; moXp: string;
  trackDescs: { sons: string; a1: string; a2: string };
  trackLabels: { sons: string; a1: string; a2: string };
  flipHint: string; again: string; know: string;
  flipCardA11y: string; playAudioA11y: string; micA11y: string;
  deckDone: string; deckSub: string; redo: string; backFeed: string;
  deckEmptyT: string; deckEmptyS: string;
  frontFr: string; frontEn: string;
  vocabTag: string; vocabSub: string; vocabPrimerTitle: string;
  register: string; registerBody: string; registerEnd: string;
  go: string; grammarTag: string; grammarBody: string; askCoach: string;
  errorIssues: string[];
  /** The copyright/non-affiliation guardrail (Gate H) — shown wherever exam
   *  content renders, per EALCH-MASTER-BUILD.md's Phase 8 requirement that
   *  the disclaimer be visible, not just present as an i18n key. */
  examDisclaimer: string;
  examNone: string; examSubmit: string; examModelAnswer: string; examGrading: string;
  examUngraded: string; examPracticeEstimate: string; examReviewLesson: string; examSeriesDone: string;
  /** Said WHILE the grader is working. A written or spoken answer is marked by
   *  a model, which takes seconds per answer, and a dimmed button alone reads
   *  as a frozen app on a paper with more than one open task. */
  examGradingNote: string;
  /** Épreuve names, keyed by ExamSkill. Note PE is *expression écrite* and PO
   *  is *expression orale*: the skill codes are production-first, the labels
   *  a candidate reads are not. */
  examSkillNames: { CO: string; CE: string; PE: string; PO: string };
  /** Mode examen vs mode entraînement — see EXAM_MODES in content/schema.ts. */
  examModeExam: string; examModeExamSub: string;
  examModePractice: string; examModePracticeSub: string;
  examUnscored: string; examUnscoredWhy: string;
  /** The paper screen. */
  examPaperTitle: string; examSitting: string; examSittingSub: string;
  examSectionOne: string; examSectionOneSub: string;
  examStatusAvailable: string; examStatusInProgress: string; examStatusDone: string;
  examQuestionCount: string; examMinutes: string; examResume: string; examStart: string;
  /** The section runner. */
  examTimeUp: string; examTimeUpBody: string; examConfirmSubmit: string; examConfirmSubmitBody: string;
  examAnswered: string; examWords: string; examLeaveSection: string; examLeaveBody: string;
  examNoReveal: string; examStay: string; examLeave: string;
  /** Compréhension orale playback. `examPlaysLeft` carries a {n} placeholder.
   *  `examSilenceNotice` is shown ONCE at the top of a listening paper: the
   *  silences in this épreuve are part of the format, and a candidate who reads
   *  them as a broken player starts tapping instead of reading the questions. */
  examReadWindow: string; examPlaying: string; examPlaysLeft: string; examAudioSpent: string;
  examSilenceNotice: string;
  examReplay: string; examTranscript: string;
  examAudioFailed: string; examAudioFailedBody: string;
  /** The preflight, BEFORE the clock starts. `examAudioOfflineBody` carries
   *  {n} (documents that would not play) and {total}. */
  examAudioOffline: string; examAudioOfflineBody: string; examAudioStartAnyway: string;
  examAudioCheckingL: string;
  /** Expression orale capture. */
  examStartPrep: string; examStartRecording: string; examPrepPhase: string; examPrepBody: string;
  /** The live microphone state during a spoken answer: a voice is being
   *  heard, a pause is running, or the answer is closed. */
  examMicHearing: string; examMicPaused: string; examMicStopped: string; examWordsSoFar: string;
  examRecording: string; examStopRecording: string;
  examMicFailed: string; examMicFailedBody: string; examDeliveryCaveat: string;
  /** A listening plate that has not been rendered yet, or would not load. */
  examImageUnavailable: string;
  /** The recorded interlocutor (po_interaction). */
  examStartInteraction: string; examPrepInteractionBody: string;
  examYourTurn: string; examExaminerSpeaking: string;
  examCoverage: string; examNotAsked: string; examInterlocutorMissing: string;
  examStartDebate: string; examDebateMissing: string; examPrepDebateBody: string;
  /** Le Rapport. */
  examReport: string; examEstimate: string; examLowestGoverns: string;
  examParallelNotEquated: string; examNoOverall: string; examNothingSat: string;
  examMissingSkills: string; examWhatNext: string; examNoPrepLesson: string;
  examNotSat: string; examNoScoring: string; examBelowScale: string; examNoAnswer: string;
  /** The marking a candidate came for. The AI grader has always produced
   *  criterion-level feedback and every open task has always carried a model
   *  answer; both were written to the device and shown to nobody. */
  examMarking: string; examMarkingSub: string; examGradedAt: string; examTargetBand: string;
  examShowModel: string; examHideModel: string; examModelTitle: string; examModelNote: string;
  /** DELF B2 reports a diploma, not a level: a mark per épreuve, a total, and
   *  the floor every épreuve has to clear. See utils/delf.logic.ts. */
  delfResult: string; delfResultPass: string; delfResultFail: string;
  delfFloor: string; delfBelowFloor: string;
  delfFailedTotal: string; delfFailedFloor: string;
  /** The format card and hub. */
  examBlank: string; examEpreuves: string;
  /** Singular and plural. French and English agree on the rule here (1 is
   *  singular, 0 and 2+ are plural), which is why one pair serves both. */
  examPapersCountOne: string; examPapersCount: string;
  examFullPaper: string; examFullPaperSub: string; examBySection: string; examBySectionSub: string;
  examNoPapersYet: string; examInProgress: string;
  trackTitle: string; trackMeta: string;
  reminders: string; dailyAlarm: string; dailyAlarmSub: string;
  notifLabels: NotifLabel[];
  theme: string; signOut: string; now: string;
  settingsT: string; appLangT: string; appLangNote: string;
  modeT: string; modeDark: string; modeLight: string; soundT: string; soundS: string; brightT: string; brightS: string;
  avatarT: string;
  testAlarm: string; customTime: string; calendarT: string;
  voiceT: string; voiceS: string; sbT: string; sbS: string; rpT: string; rpS: string;
  roleplayHubTag: string; rpScenesN: string;
  startQuiz: string; quizPassed: string; quizFailed: string; retry: string; qNext: string; backToDen: string;
  lessonDone: string; lessonSoon: string; builderTag: string; sbSkipSay: string; sbNextSentence: string;
  practiceGotIt: string; practiceMissed: string;
  lessonNext: string; lessonPrev: string; lessonOverview: string; lessonSwipeHint: string;
  lessonTapLetter: string; lessonMemo: string; lessonReplay: string; lessonNarration: string;
  lessonListen: string; lessonListening: string;
  lkWelcomeT: string; lkWelcomeS: string;
  lkCountersT: string; lkCountersS: string;
  lkListenT: string; lkListenS: string;
  lkWaveT: string; lkWaveS: string;
  lkTapT: string; lkTapS: string; lkTapRowLabel: string;
  lkNavT: string; lkNavS: string;
  lkSkip: string; lkStart: string; lkHelp: string;
  lessonTapOpen: string; lessonSwipe: string; quizWord: string; quizHint: string; quizAnswerAll: string;
  lessonNextUp: string; lessonRestart: string;
  flashQuestion: string; flashAnswer: string; flashReveal: string;
  denLearned: string;
  denLearnedPct: string;
  denMastered: string;
  examplesT: string; tableT: string; errorsT: string; audioT: string; videoT: string; subsT: string;
  sayFr: string; transEn: string; orTypeT: string; checkT: string;
  correctT: string; incorrectT: string; nextCard: string; vfDoneT: string;
  vfSelfT: string; vfGot: string; vfMissed: string;
  vfEmptyT: string; vfEmptyS: string;
  /* The `practice` section at skill 'write': the learner is shown the English
     and types the French. `wrNote` states the one thing the surface cannot
     test, so nobody reads a green tick as approval of an accent. */
  wrPrompt: string; wrPh: string; wrAnswer: string; wrReveal: string; wrNote: string;
  learnT: string; arrangeT: string; sayItT: string; writeItT: string; wellDone: string;
  chooseLevel: string; startRp: string; rpDoneT: string; rpDoneS: string; rpYourLine: string; rpTag: string; rpReport: string; rpNotHeard: string;
  rpYourTurn: string; rpRespond: string; rpModel: string;
  rpSpeak: string; rpShowMe: string; rpListening: string; rpAlsoWorks: string; rpSceneDone: string; rpUnheardShort: string;
  rpMicBlocked: string;
  /** listening.hideLines: shown in place of a line the learner has not earned back yet. */
  lsHidden: string;
  narrTag: string; narrCta: string; narrRepeat: string; narrYourTurn: string; narrCheck: string;
  narrSkip: string; narrDoneT: string; narrDoneS: string;
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
  plWhatMean: string; plCheckNote: string; plResult: string;
  plResA0: string; plResA1: string; plResA2: string;
  plStartUnit: string; plStartCta: string; plRetake: string;
  plScore: string; plNoBank: string;
  dicteeT: string; dicteeS: string; play: string; slow: string; playsLeft: string;
  writeHeard: string; check2: string; perfectNoMistakes: string; youWrote: string; correctIs: string;
  downloadsT: string; downloadsS: string; storage: string; wifiOnly: string;
  // --- Phase 10 paywall & gating ---
  // Every line here is backed by a real gate or a real purchase path; copy that
  // names a feature the app does not gate is the defect (the Phase 0 rule).
  // Two standing traps (see pricing.ts): never sell "offline" (it is free for
  // everyone), and the annual discount is a SHARE (saveFmt), never months.
  subscription: string; currentPlan: string;
  pwTag: string; pwTitle: string; pwLead: string;
  pwFeatLevels: string; pwFeatLevelsS: string;
  pwFeatCoach: string; pwFeatCoachS: string;
  pwFeatRoleplay: string; pwFeatRoleplayS: string;
  monthlyL: string; annualL: string; perMoShort: string; billedYear: string;
  saveFmt: string; bestValue: string; pwTrialFmt: string;
  pwCta: string; pwCtaGuest: string;
  pwUnavailableT: string; pwUnavailableS: string;
  pwSuccessT: string; pwSuccessS: string;
  restoreT: string; restoreDone: string; restoreNone: string; restoreFail: string;
  pwTermsAuto: string;
  currencyT: string; detected: string; chosenByYou: string; storePricesNote: string;
  gateLevelsT: string; gateLevelsS: string;
  gateRoleplayT: string; gateRoleplayS: string;
  coachCapT: string; coachCapS: string; coachCapCta: string;
  premLockTag: string;
  planPremiereMo: string; planPremiereYr: string;
  renewsFmt: string; endsFmt: string;
  billingIssueT: string; billingIssueS: string;
  managedVia: string; seePlans: string;
  homePremT: string; homePremS: string;
  placePwT: string; placePwS: string; placePwCta: string;
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
  obAvatarT: string; obAvatarS: string;
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
  speakBlock: string; speakBlockDone: string; speakStationDone: string;
  speakMapT: string; speakWorld: string; speakBackMap: string;
  /** Playlist speak mode: a playlist is not a station, so it finishes and
   *  returns differently from the trail. */
  speakSetDone: string; speakBackPlaylist: string;
  speakRetry: string; speakSkip: string; speakTryN: string;
  speakFocusOn: string; speakFocusWordsT: string;
  speakNextStation: string; speakNextWorld: string;
  speakWorldMeanings: string[];
  speakWordPracticeT: string; speakWordAllDone: string;
  speakBackToLine: string; speakNextWord: string; speakWordTap: string;
  chatRetry: string;
  chatSuggs: { label: string; msg: string }[];
  planFree: string; planFreeDesc: string;
  offlineTag: string; dlCats: string[]; dlSubs: string[]; freeSpace: string;
  wifiOnlySub: string; availableT: string; offlineSync: string;
  offlineReadyT: string; offlineReadyS: string; contentVersionL: string; contentCountsFmt: string;
  checkUpdates: string; updatingL: string; upToDateL: string; updatedL: string;
  cachedUpdateL: string; audioSoonL: string;
  /** Where the playlists on screen actually came from: the binary, or an
   *  update. The distinction only became visible once the app started reading
   *  corpus playlists at all. */
  plFromBundleFmt: string; plFromUpdateFmt: string;
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
    heroTag: 'RÉEL — SURVIE · REPRENDRE', heroSub: 'Commandez comme un vrai Parisien · avec {name}',
    resumeTag: 'REPRENDRE', beginTag: 'POUR COMMENCER', resumeSub: 'Reprenez où vous en étiez', begin: 'Commencer', vocabPrime: 'Le vocabulaire',
    continueRow: 'À reprendre',
    reviewHeroTitle: 'À réviser', listenHeroTitle: "À l'écoute", listenHeroSub: 'De vraies phrases, une vraie voix',
    freshHeroTitle: 'Des mots nouveaux', freshHeroSub: '{n} mots choisis pour aujourd’hui', freshShort: '{n} nouveaux',
    found: 'Les fondations', denT: 'Le cours de remise à niveau', denS: 'Sons · A1 · A2 — le cursus complet',
    cardsT: 'Cartes mémoire', cardsS: '{n} cartes · à réviser', cardsTag: 'RAPPEL · CARTES', unitsWord: 'UNITÉS',
    themesTag: 'PRATIQUE · PAR THÈME', themesTitle: 'Choisissez votre scène.',
    themesSub: 'Des situations réelles, en cinq étapes. {name} vous attend à la fin.', allLevels: 'Tous',
    themeWeekTag: 'THÈME DE LA SEMAINE', themeTag: 'THÈME', wordsWord: 'mots',
    stepNames: { decouvrir: 'Découvrir', construire: 'Construire', prononcer: 'Prononcer', ecouter: 'Écouter', scene: 'La scène' },
    stepSubs: { decouvrir: 'Cartes, les mots de la scène', construire: 'Phrases, assembler et demander', prononcer: 'Flash vocal, dites-le à voix haute', ecouter: 'La dictée, écoutez et écrivez', scene: 'Jeu de rôle, la scène finale' },
    stepOf: 'ÉTAPE {a} / {b}', lockedTag: 'VERROUILLÉ', inProgressTag: 'EN COURS', finaleTag: 'FINALE', doneTag: 'TERMINÉ', newTag: 'NOUVEAU',
    noContent: 'Pas encore de contenu', levelWord: 'NIVEAU', parcoursHead: 'LE PARCOURS · {n} ÉTAPES',
    parcoursSub: 'Chaque étape se débloque une fois la précédente entièrement réussie.', themeContinue: 'Continuer',
    byThemeT: 'Par thème', byThemeS: 'Scènes réelles, cinq étapes chacune',
    hubT: "L'entraînement", hubMeta: 'DIRE · LIRE · ÉCRIRE',
    flashHubTag: 'CARTES · PAR THÈME', flashHubPick: 'Choisissez un jeu de cartes', ctSoon: 'À venir', ctCardsN: '{n} cartes', ctDicteeN: '{n} dictées', ctPhrasesN: '{n} phrases', lvlAll: 'Tous', previewT: 'Aperçu',
    subThemesT: 'Les sous-thèmes', byTypeT: 'Par type de carte', byTypeS: 'Vocabulaire, conjugaison, fautes et plus',
    instrVocabFr: "Dites-le en anglais, puis retournez", instrVocabEn: 'Dites-le en français, puis retournez', instrGapfill: 'Complétez le trou, puis retournez', instrConjugation: 'Conjuguez à voix haute, puis retournez', instrError: 'Corrigez la faute, puis retournez', instrGrammar: 'Énoncez la règle, puis retournez', instrRegister: "Donnez l'équivalent, puis retournez",
    ctVocabFrEn: 'Vocabulaire FR → EN', ctVocabEnFr: 'Vocabulaire EN → FR', ctGapfill: 'Texte à trous', ctConjugation: 'Conjugaison', ctError: 'Chasse à la faute', ctGrammar: 'Règles de grammaire', ctRegister: 'Synonymes et registres',
    ctVocabFrEnS: "Le français d'abord, produisez l'anglais", ctVocabEnFrS: "L'anglais d'abord, produisez le français", ctGapfillS: 'Complétez la phrase à trous', ctConjugationS: 'Verbe, temps, pronom', ctErrorS: 'Trouvez et corrigez la faute', ctGrammarS: 'Déclencheur, règle, exemples', ctRegisterS: 'Familier, courant, soutenu',
    tabListen: 'ÉCOUTE', tabSpeak: 'PARLE', tabProfile: 'PROFIL', tabCoach: 'COACH',
    appLangNames: { fr: 'Français', en: 'Anglais' },
    practice: 'Pratiquer à voix haute', phrase: 'PHRASE', next: 'SUIVANTE',
    queueOn: 'Dans votre pratique ✓', queueOff: 'File de pratique',
    end: 'Terminer', cont: 'Continuer →', why: 'Pourquoi ?',
    micIdle: 'Touchez pour parler', micRec: 'Dites-le à voix haute…', micDone: 'Comparez avec la réponse modèle, puis réessayez ou continuez',
    micHeard: 'ENTENDU', micNoSpeech: 'Je n’ai rien entendu. Réessayez',
    micNoSpeechHint: 'Toujours rien. Parlez juste après avoir touché le micro, en tenant le téléphone plus près',
    micCantHear: 'Le micro ne vous entend pas pour le moment. Vous pouvez continuer et revenir plus tard',
    micDenied: 'Accès au micro refusé. Activez-le dans les réglages de votre téléphone',
    micUnavail: 'Micro indisponible sur cette version. Comparez vous-même',
    micGood: 'Bien dit', micClose: 'Presque. Réessayez', micOff: 'Pas tout à fait',
    youSaid: 'UNE RÉPONSE MODÈLE — À DIRE À VOIX HAUTE', liaisonChip: 'Attention à la liaison · un‿allongé',
    speakYouSaid: 'VOUS AVEZ DIT', speakModelWas: '{name} a dit',
    reportTag: 'VOTRE RAPPORT', review: 'À revoir', replay: 'Rejouer', talk: 'Parler au coach',
    traj: 'B1 → B1+ trajectoire', conf: 'CONFIANCE',
    reportSub: 'Bâti sur vos tentatives réelles, pas sur des exemples.',
    reportEmptyT: "Rien à signaler pour l'instant",
    reportEmptyS: "Terminez un exercice et votre rapport apparaît ici, bâti sur ce que vous avez vraiment dit et écrit.",
    accuracyLabel: 'PRÉCISION', byDrillT: 'Par exercice',
    statPractice: 'PRATIQUE', statWords: 'MOTS VUS',
    reviewNone: "Rien à revoir pour l'instant. Vous les réussissez.",
    attemptsLabel: '{n} tentatives', practiceWeak: 'Réviser ces mots',
    drillNames: { flashcards: 'Cartes', voiceflash: 'Flash vocal', dictation: 'Dictée', sentence: 'Constructeur', roleplay: 'Jeu de rôle', placement: 'Niveau' },
    hours: 'HEURES PARLÉES', convs: 'CONVERSATIONS', minutes: 'Minutes parlées', days7: '7 DERNIERS JOURS',
    accentT: 'Votre accent', weakEngine: 'Le moteur de faiblesses',
    coachStatus: 'votre coach · en ligne', unlimited: 'POURQUOI ? · ILLIMITÉ', placeholder: 'Posez votre question…',
    chatGreet: 'Bonjour ! Posez-moi vos questions sur le français, en français ou en anglais.',
    coachIdle: 'votre coach de français', coachOnline: 'en ligne', coachOffline: 'hors ligne · conseils enregistrés', coachTip: 'Conseil enregistré (hors ligne)',
    skills: ['FLUIDITÉ', 'PRÉCISION', 'RYTHME & LIAISONS'],
    denTag: 'LE COURS DE REMISE À NIVEAU',
    denIntro: "Un vrai cursus, du premier son jusqu'au passé composé. Idéal pour se remettre à niveau.",
    denCont: 'Continuer',
    ovStart: 'Commencer la leçon', ovSeeAll: 'Voir les {n} missions', ovSeeList: 'voir la liste', ovMissionsWord: 'missions',
    checkAnswerFirst: 'Répondez pour continuer', tapToReveal: 'Touchez pour révéler', tapToFlip: 'Touchez pour retourner', answerToContinue: 'Répondez pour continuer', sceneEnd: 'Terminer la scène',
    nextGroup: 'Groupe suivant', reviewDone: 'Révision terminée', answerAllToContinue: 'Répondez à toutes les questions pour continuer',
    gridDefaultNote: 'Sauf mention contraire, la finale est muette.', termsMore: '+{n}', sceneStart: 'Écouter la scène', sceneChooseFirst: 'Choisissez une réponse pour continuer', swipeToContinue: 'Balayez pour continuer.', trapHint: 'Un piège à la fois. Touchez la carte pour la retourner.', trapHintA11y: 'Balayez pour le piège suivant', allGroupsSeen: 'Tous les groupes vus. Balayez pour continuer.',
    gridSeeAll: 'Voir les {n} finales', gridSeeAllHint: 'Ouvre la fiche de référence', sheetBackToLesson: 'Retour à la leçon',
    sheetContinue: 'Continuer',
    sheetIndexTitle: 'Référence', sheetLinkA11y: 'Fiches de référence, {n} disponibles', backWord: 'Retour',
    ovStatRequired: 'requises', ovStatGates: 'portes', ovStatMilestones: 'jalons', ovStatBadge: 'badge',
    ovPrereqNone: 'Prérequis : aucun. Cette leçon part de zéro.', ovPrereqSome: 'Prérequis : {t}',
    ovAlsoHere: 'AUSSI DANS CETTE UNITÉ',
    ovMin: '{n} min', ovDiff: 'Difficulté',
    moSub: '{n} missions, un badge à la fin. Chaque mission a sa propre mécanique.',
    moSubNoBadge: '{n} missions. Chaque mission a sa propre mécanique.',
    moListen: "Écouter l'intro", moXp: '{n} XP',
    trackDescs: {
      sons: "De l'alphabet à la masterclass de prononciation : les sons avant les mots.",
      a1: 'Salutations, genre, être & avoir, la vie quotidienne : les 26 unités du niveau Découverte.',
      a2: 'Verbes, passé composé, pronoms objets : le niveau Survie, en profondeur.',
    },
    trackLabels: { sons: 'PRONONCIATION · MASTERCLASS', a1: 'A1 · DÉCOUVERTE', a2: 'A2 · SURVIE' },
    flipHint: 'Touchez pour retourner', again: 'Encore', know: 'Je sais',
    flipCardA11y: 'Retourner la carte', playAudioA11y: 'Écouter la prononciation', micA11y: 'Parler dans le micro',
    deckDone: 'Paquet terminé', deckSub: 'Les cartes ratées reviendront demain, juste avant que vous les oubliiez.', redo: 'Rejouer le paquet', backFeed: 'Retour au flux',
    deckEmptyT: 'Rien à réviser ici', deckEmptyS: "Ce thème n'a pas encore de cartes à ce niveau. Essayez un autre thème ou revenez plus tard.",
    frontFr: 'FRANÇAIS', frontEn: 'ANGLAIS',
    vocabTag: 'AVANT DE PARLER · INJECTEUR', vocabSub: 'Utilisez chacun au moins une fois, à voix haute et avec assurance.',
    vocabPrimerTitle: 'Le vocabulaire du jour',
    register: 'REGISTRE', registerBody: 'Dites toujours', registerEnd: 'sonne comme un ordre. Les serveurs le remarquent.',
    go: "J'y vais →", grammarTag: 'GRAMMAIRE · SANS QUITTER LA CONVERSATION',
    grammarBody: "La liaison relie la consonne finale muette à la voyelle qui suit. Après un, les, vous, ils, elle est obligatoire, et c'est la première chose qu'un examinateur entend.",
    askCoach: 'Demandez à {name} →',
    // Index-aligned to EXAMS in app/home.tsx: TEF Canada · TCF Canada · DELF B2.
    examDisclaimer: "Exercices originaux inspirés du format officiel. Non publiés ni approuvés par France Éducation international, le CCI Paris Île-de-France ni aucun organisme examinateur. Résultats donnés à titre indicatif, non équivalents à un score officiel.",
    examNone: 'Aucun examen blanc disponible pour le moment. Revenez après votre prochaine mise à jour.',
    examSubmit: 'Valider', examModelAnswer: 'RÉPONSE MODÈLE', examGrading: 'Correction en cours…',
    examGradingNote: "Chaque réponse écrite ou orale est corrigée une par une, ce qui prend quelques secondes. Gardez cet écran ouvert.",
    examUngraded: "La correction n'a pas abouti. Cette épreuve compte comme non corrigée.",
    examPracticeEstimate: "Estimation d'entraînement, pas un score officiel",
    examReviewLesson: 'Revoir la leçon →', examSeriesDone: 'Épreuve terminée',
    examSkillNames: { CO: 'Compréhension orale', CE: 'Compréhension écrite', PE: 'Expression écrite', PO: 'Expression orale' },
    examModeExam: 'Mode examen', examModeExamSub: 'Chronomètre strict, une seule écoute, aucun retour en arrière. Noté.',
    examModePractice: 'Mode entraînement', examModePracticeSub: 'Pause possible, réécoute autorisée, transcription visible. Non noté.',
    examUnscored: 'Non noté',
    examUnscoredWhy: "Cette tentative a été faite en mode entraînement. Elle ne compte pas dans l'estimation.",
    examPaperTitle: 'Examen', examSitting: 'Passer les 4 épreuves',
    examSittingSub: "D'affilée, sous un seul chronomètre, comme le jour de l'examen.",
    examSectionOne: 'Une épreuve à la fois',
    examSectionOneSub: 'Reprenez où vous voulez. Chaque épreuve garde son propre chronomètre.',
    examStatusAvailable: 'À faire', examStatusInProgress: 'En cours', examStatusDone: 'Terminée',
    examQuestionCount: 'questions', examMinutes: 'min', examResume: 'Reprendre', examStart: 'Commencer',
    examTimeUp: 'Temps écoulé',
    examTimeUpBody: 'Vos réponses ont été enregistrées telles quelles.',
    examConfirmSubmit: 'Terminer cette épreuve ?',
    examConfirmSubmitBody: 'Vous ne pourrez plus revenir sur vos réponses.',
    examAnswered: 'répondues', examWords: 'mots',
    examLeaveSection: 'Quitter cette épreuve ?',
    examLeaveBody: 'Le chronomètre continue de tourner. Vos réponses sont conservées.',
    examNoReveal: 'Les corrections sont données à la fin, dans Le Rapport.',
    examStay: 'Rester', examLeave: 'Quitter',
    examReadWindow: "Lisez les questions. L'audio va commencer.",
    examPlaying: 'Lecture en cours', examPlaysLeft: 'Encore {n} écoute. Lisez les questions en attendant.', examAudioSpent: 'Écoute terminée',
    examSilenceNotice:
      'L’audio se déclenche tout seul, et il commence par un silence : '
      + 'ce temps est prévu pour que vous lisiez les questions. '
      + 'D’autres silences suivent, entre les écoutes et entre les documents. '
      + 'Ils font partie de l’épreuve. Rien n’est en panne : lisez, et attendez la voix.',
    examReplay: 'Réécouter', examTranscript: 'Transcription',
    examAudioFailed: 'Audio indisponible',
    examAudioFailedBody: "Aucun son n'a pu être joué pour ce document. Il ne sera pas compté dans votre estimation.",
    examAudioOffline: 'Audio indisponible hors connexion',
    examAudioOfflineBody:
      'Sur les {total} documents de cette épreuve, {n} ne sont pas encore téléchargés '
      + 'et la connexion ne répond pas. En mode examen, chaque document ne passe qu’une fois : '
      + 'ceux qui manquent ne pourront pas être écoutés et leurs questions ne seront pas comptées. '
      + 'Reconnectez-vous, ou commencez en sachant ce qui manque.',
    examAudioStartAnyway: 'Commencer quand même',
    examAudioCheckingL: 'Vérification de l’audio…',
    examStartPrep: 'Commencer la préparation', examStartRecording: "Commencer à parler",
    examPrepPhase: 'Préparation', examPrepBody: "Lisez le document. L'enregistrement démarrera tout seul.",
    examMicHearing: 'On vous entend', examMicPaused: 'En pause, continuez quand vous voulez',
    examMicStopped: 'Enregistrement terminé', examWordsSoFar: '{n} mots',
    examRecording: 'Enregistrement', examStopRecording: "J'ai terminé",
    examMicFailed: 'Micro indisponible',
    examMicFailedBody: "Aucun enregistrement n'a pu être fait. Cette tâche ne sera pas comptée dans votre estimation.",
    examDeliveryCaveat: "Ces mesures décrivent votre débit, pas votre prononciation : personne n'a écouté l'enregistrement.",
    examImageUnavailable: 'Image indisponible. Voici sa description :',
    examStartInteraction: 'Commencer l’entretien',
    examPrepInteractionBody: 'Lisez le document et préparez vos questions. L’entretien commencera tout seul.',
    examYourTurn: 'À vous', examExaminerSpeaking: 'L’examinateur répond',
    examCoverage: 'Informations obtenues', examNotAsked: 'Non demandé',
    examInterlocutorMissing: 'Cette tâche est incomplète : aucun interlocuteur enregistré.',
    examStartDebate: 'Commencer le débat',
    examDebateMissing: 'Cette tâche est incomplète : aucune objection enregistrée.',
    examPrepDebateBody: 'Relisez vos notes. L’examinateur contestera votre position.',
    examReport: 'Le Rapport', examEstimate: 'ESTIMATION',
    examLowestGoverns: 'Votre niveau est fixé par votre épreuve la plus faible.',
    examParallelNotEquated: "Épreuves blanches parallèles, non calibrées. Nous ne disposons pas des tables de conversion officielles : chaque estimation est un intervalle, jamais un score.",
    examNoOverall: "Estimation globale indisponible",
    examNothingSat: "Rien à estimer pour l'instant",
    examMissingSkills: 'Il manque', examWhatNext: 'À revoir',
    examNoPrepLesson: "Aucune leçon de préparation à ce niveau pour l'instant.",
    examNotSat: 'Non passée', examNoScoring: 'Non barémée',
    examBelowScale: 'Sous le NCLC 4', examNoAnswer: 'Rien rendu',
    examMarking: 'La correction',
    examMarkingSub: 'Ce que le correcteur a relevé, critère par critère.',
    examGradedAt: 'Noté {band}', examTargetBand: 'Objectif {band}',
    examShowModel: 'Voir une réponse modèle', examHideModel: 'Masquer la réponse modèle',
    examModelTitle: 'Une réponse modèle',
    examModelNote: "Une réponse qui tient au niveau visé. Ce n'est ni la seule ni un corrigé officiel.",
    delfResult: 'Résultat', delfResultPass: 'Admis', delfResultFail: 'Non admis',
    delfFloor: 'Il faut 50/100 au total et au moins 5/25 à chaque épreuve.',
    delfBelowFloor: 'Sous le minimum',
    delfFailedTotal: 'Le total est inférieur à 50/100.',
    delfFailedFloor: 'Une épreuve au moins est sous le minimum de 5/25.',
    examBlank: 'EXAMEN BLANC', examEpreuves: 'épreuves', examPapersCountOne: 'examen blanc', examPapersCount: 'examens blancs',
    examFullPaper: 'Examen complet', examFullPaperSub: 'Les 4 épreuves, dans l’ordre du jour J.',
    examBySection: 'Par épreuve', examBySectionSub: 'Travaillez une compétence à la fois.',
    examNoPapersYet: 'Aucun examen disponible pour l’instant.', examInProgress: 'en cours',
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
    avatarT: 'Avatar',
    testAlarm: "Tester l'alarme", customTime: 'Heure personnalisée', calendarT: 'Votre calendrier',
    voiceT: 'Flash vocal', voiceS: 'image → voix · traduction', sbT: 'Phrases', sbS: 'apprendre · dire · écrire', rpT: 'Jeu de rôle', rpS: 'conversation IA · A1 → B2',
    roleplayHubTag: 'JEU DE RÔLE · PAR THÈME', rpScenesN: '{n} scènes',
    startQuiz: 'Commencer le quiz', quizPassed: 'RÉUSSI', quizFailed: 'Pas encore', retry: 'Réessayer', qNext: 'Suivant', backToDen: 'Retour au cursus',
    lessonDone: 'Terminer la leçon', lessonSoon: 'Leçon bientôt disponible', builderTag: 'CONSTRUCTEUR', sbSkipSay: 'Passer', sbNextSentence: 'Phrase suivante',
    practiceGotIt: 'Je savais', practiceMissed: 'Raté',
    lessonNext: 'Suivant', lessonPrev: 'Précédent', lessonOverview: 'Aperçu', lessonSwipeHint: 'Glissez pour commencer',
    lessonTapLetter: 'Touchez une lettre pour ouvrir sa carte', lessonMemo: 'À RETENIR', lessonReplay: 'Réécouter la narration', lessonNarration: 'Narration',
    lessonListen: 'Écouter', lessonListening: 'Écoute…',
    lkWelcomeT: 'Glissez pour naviguer',
    lkWelcomeS: "Les leçons sont un jeu de cartes, pas un long défilement. Glissez à gauche ou à droite pour changer de section — essayez maintenant.",
    lkCountersT: 'Deux chiffres, deux compteurs',
    lkCountersS: "Le chiffre de gauche compte les sections. Celui de droite compte chaque page que vous pouvez glisser, quiz compris — d'où la différence.",
    lkListenT: 'Touchez pour écouter',
    lkListenS: "Cette puce apparaît quand une section peut être écoutée. Touchez pour écouter, touchez à nouveau pour réécouter — rien ne se joue tout seul.",
    lkWaveT: 'Barres animées = lecture en cours',
    lkWaveS: "Là où vous voyez ceci près d'un bouton, il s'anime uniquement pendant que cet audio précis joue.",
    lkTapT: 'Les lignes avec une flèche s\'ouvrent',
    lkTapS: "Une ligne comme celle-ci contient plus — touchez-la pour une carte plus grande avec le détail complet. Sans flèche, c'est juste une référence.",
    lkTapRowLabel: 'ami — friend',
    lkNavT: 'Les boutons font pareil que le balayage',
    lkNavS: "Précédent et Suivant en bas vous déplacent aussi. Un oubli ? Touchez le ? en haut de n'importe quelle leçon pour revoir ceci.",
    lkSkip: 'Passer', lkStart: 'Commencer la leçon', lkHelp: 'Comment fonctionnent les leçons',
    lessonTapOpen: 'Touchez pour ouvrir', lessonSwipe: 'Glissez', quizWord: 'QUIZ', quizHint: 'Une question par carte, glissez pour avancer', quizAnswerAll: 'Répondez à toutes les questions pour voir votre résultat',
    lessonNextUp: 'Leçon suivante', lessonRestart: 'Recommencer la leçon',
    flashQuestion: 'QUESTION', flashAnswer: 'RÉPONSE', flashReveal: 'Touchez pour révéler',
    denLearned: '{n} / {m} appris',
    denLearnedPct: '{p} % appris',
    denMastered: '{k} maîtrisés',
    examplesT: 'Exemples & usages', tableT: 'Tableau', errorsT: 'Erreurs communes', audioT: 'Pratique audio', videoT: 'Vidéo — la bouche en 3D', subsT: 'Sous-leçons',
    sayFr: 'Dites-le en français', transEn: 'Traduisez en anglais', orTypeT: 'ou écrivez votre réponse', checkT: 'Vérifier',
    correctT: 'Correct !', incorrectT: 'Pas tout à fait : ', nextCard: 'Carte suivante', vfDoneT: 'Session terminée',
    vfEmptyT: 'Rien à prononcer ici', vfEmptyS: "Ce thème n'a pas encore de mots pour Voice Flash. Essayez un autre thème ou revenez plus tard.",
    vfSelfT: 'LA RÉPONSE — ALORS ?', vfGot: "Je l'ai bien dit", vfMissed: 'Pas tout à fait',
    wrPrompt: 'Écrivez-le en français', wrPh: 'Votre réponse…', wrAnswer: 'LA RÉPONSE',
    wrReveal: 'Afficher la réponse', wrNote: 'Les accents ne sont pas notés ici.',
    learnT: 'Apprenez ces mots', arrangeT: 'Arrangez la phrase', sayItT: 'Dites-la à voix haute', writeItT: 'Écrivez-la', wellDone: 'Bravo, phrase acquise',
    chooseLevel: 'Choisissez votre niveau', startRp: 'Commencer la conversation', rpDoneT: 'Scène terminée', rpDoneS: '{name} : « Votre marchand vous adore. »', rpYourLine: 'VOTRE RÉPLIQUE — À DIRE À VOIX HAUTE', rpTag: 'JEU DE RÔLE', rpReport: 'Le rapport →', rpNotHeard: 'Pas entendu, votre réplique est affichée.',
    rpYourTurn: 'À VOUS', rpRespond: 'Répondez en français, puis vérifiez', rpModel: 'Réponse modèle',
    rpSpeak: 'Parler', rpShowMe: 'Voir les réponses', rpListening: 'Écoute…', rpAlsoWorks: 'Marche aussi', rpSceneDone: 'Conversation terminée', rpUnheardShort: 'Pas entendu', lsHidden: 'Caché',
    rpMicBlocked: 'La correction orale n’a pas pu démarrer. Il manque peut-être le pack vocal français à votre téléphone. Ce n’est pas vous : continuez, les réponses sont affichées.',
    narrTag: 'LEÇON NARRÉE', narrCta: 'Narré', narrRepeat: 'Répétez après {name}', narrYourTurn: 'À vous, dites-le', narrCheck: 'Répondez à la question de {name}',
    narrSkip: 'Passer', narrDoneT: 'Leçon terminée', narrDoneS: 'Vous avez traversé les sept étapes avec {name}.',
    bannerText: 'Votre séance de {t} vous attend : Au Café, 4 min avec {name}.',
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
    placementT: 'Vérification de niveau', placementS: 'Quelques questions de vocabulaire, une estimation claire.', placementCta: 'Faire la vérification', estimate: 'ESTIMATION',
    plWhatMean: 'Que veut dire ce mot ?',
    plCheckNote: 'Une vérification rapide, pas un examen : une estimation claire pour choisir votre point de départ.',
    plResult: 'VOTRE ESTIMATION',
    plResA0: 'On commence au début : les fondations d’abord, à votre rythme.',
    plResA1: 'Les bases sont là. On consolide le A1 et on avance.',
    plResA2: 'Vocabulaire de base solide. On attaque le A2.',
    plStartUnit: 'Votre point de départ', plStartCta: 'Commencer ici', plRetake: 'Refaire la vérification',
    plScore: '{n} sur {m} bonnes réponses',
    plNoBank: 'Pas encore assez de contenu pour une vérification. Réessayez après une mise à jour.',
    dicteeT: 'La Dictée', dicteeS: "Entraînez l'oreille et l'orthographe : écrivez exactement ce que vous entendez.", play: 'Écouter', slow: '0,75×', playsLeft: 'écoutes',
    writeHeard: 'Écrivez ce que vous entendez', check2: 'Vérifier', perfectNoMistakes: 'Parfait, aucune faute', youWrote: 'Vous avez écrit', correctIs: 'La bonne réponse',
    downloadsT: 'Téléchargements', downloadsS: 'Écoutez hors connexion', storage: 'Stockage', wifiOnly: 'Wi-Fi uniquement',
    subscription: 'Abonnement', currentPlan: 'FORMULE ACTUELLE',
    pwTag: 'EALCH PREMIÈRE', pwTitle: 'Débloquez tout le parcours',
    pwLead: 'A2 et au-delà, coach illimité et jeux de rôle illimités. Sons et A1 restent gratuits pour toujours.',
    pwFeatLevels: 'Tous les niveaux', pwFeatLevelsS: 'A2 et au-delà, aussi loin que vous irez',
    pwFeatCoach: 'Coach illimité', pwFeatCoachS: 'Posez vos questions au-delà de la limite quotidienne gratuite',
    pwFeatRoleplay: 'Jeux de rôle illimités', pwFeatRoleplayS: 'Toutes les scènes, tous les jours. En gratuit : un scénario par jour',
    monthlyL: 'Mensuel', annualL: 'Annuel', perMoShort: '/mois', billedYear: 'facturé {p} une fois par an',
    saveFmt: 'Économisez {p}', bestValue: 'MEILLEURE OFFRE', pwTrialFmt: 'Commence par un essai gratuit de {t}',
    pwCta: 'Continuer', pwCtaGuest: 'Connectez-vous pour vous abonner',
    pwUnavailableT: 'Les achats ne sont pas disponibles dans cette version',
    pwUnavailableS: 'Cette version ne peut pas encore encaisser de paiement. Rien ne vous a été facturé.',
    pwSuccessT: 'Bienvenue dans Première', pwSuccessS: 'Tout est débloqué. Profitez-en.',
    restoreT: 'Restaurer les achats', restoreDone: 'Achats restaurés', restoreNone: 'Aucun achat à restaurer sur ce compte',
    restoreFail: 'Impossible de joindre la boutique. Réessayez',
    pwTermsAuto: "Renouvellement automatique jusqu'à annulation. Gérez ou annulez à tout moment dans les réglages de votre boutique.",
    currencyT: 'Devise', detected: 'Détectée depuis votre région', chosenByYou: 'Choisie par vous',
    storePricesNote: 'Les prix affichés par votre boutique sont ceux qui vous seront facturés',
    gateLevelsT: "A2 et au-delà, c'est Première", gateLevelsS: 'Sons et A1 sont gratuits pour toujours. La suite du parcours demande Première.',
    gateRoleplayT: "C'était votre scène gratuite du jour", gateRoleplayS: 'La pratique gratuite couvre un scénario par jour. Première retire la limite, ou revenez demain.',
    coachCapT: 'Limite quotidienne du coach atteinte', coachCapS: 'Vos tours gratuits reviennent demain', coachCapCta: 'Illimité avec Première',
    premLockTag: 'PREMIÈRE',
    planPremiereMo: 'Première — Mensuel', planPremiereYr: 'Première — Annuel',
    renewsFmt: 'Renouvellement le {d}', endsFmt: 'Se termine le {d}',
    billingIssueT: 'Problème de paiement',
    billingIssueS: 'Votre dernier renouvellement a échoué. Mettez à jour votre moyen de paiement dans votre boutique pour garder Première.',
    managedVia: 'Géré par {s}', seePlans: 'Voir les formules',
    homePremT: 'Ealch Première', homePremS: 'Tous les niveaux, coach et jeux de rôle illimités',
    placePwT: 'Prêt pour le parcours complet', placePwS: 'Votre plan dépasse A1. Première débloque tous les niveaux qu\'il demande.', placePwCta: 'Voir Première',
    skillRead: 'LIRE', skillListen: 'ÉCOUTE', skillSpeak: 'PARLE', skillWrite: 'ÉCRIRE', skillCourse: 'COURS', skillVocab: 'VOCAB', skillReadVocab: 'LIRE · VOCAB',
    accountBilling: 'Compte & facturation', learningSec: 'Apprentissage', appearanceSec: 'Apparence', notificationsSec: 'Notifications',

    obSteps: ['01 — VOTRE COMPTE', '02 — VOTRE PRÉNOM', '03 — VOTRE THÈME', '04 — VOTRE OBJECTIF', '05 — VOTRE EXPÉRIENCE', '06 — VOTRE RYTHME', '07 — VOTRE ACCENT', '08 — VOS RAPPELS', '09 — ÉCHAUFFEMENT', '10 — VOTRE AVATAR', '11 — VOTRE NIVEAU'],
    obTagline: 'Parlez avec élégance.',
    obIntro: 'Vous avez fait la grammaire. Passez à la parole. Parlez à voix haute dès le premier jour, et faites-vous comprendre.',
    createAccount: 'Créer un compte', alreadyAccount: 'Vous avez déjà un compte ?', signInLink: 'Se connecter',
    obCreateT: 'Créez votre compte.', passwordPh: 'Mot de passe', continueT: 'Continuer', orT: 'OU',
    withApple: 'Continuer avec Apple', withGoogle: 'Continuer avec Google',
    obThemeT: 'Choisissez votre\ncouleur signature.', obThemeS: "Un fil vibrant dans l'obscurité. Modifiable à tout moment dans votre profil.",
    obGoalT: 'Pourquoi le français ?', obExpT: 'Combien de français\nvit déjà en vous ?', obPaceT: 'Minutes par jour ?',
    obAccentT: 'Quel français\npour {name} ?',
    obRemindT: 'Quand devons-nous\nvous appeler pour pratiquer ?', obRemindS: "Une alarme quotidienne rend la série invisible, et l'habitude réelle.",
    enableReminders: 'Activer les rappels', alarmChips: ['matin', 'midi', 'soir', 'nuit'],
    paceSubs: ['une pause café', 'le trajet du matin', 'sérieux', 'immersion'],
    expTitles: ['Grand débutant', "Souvenirs d'école", 'Conversationnel', 'Avancé'],
    expSubs: ['je pars de zéro', 'le français scolaire, presque oublié', 'je tiens une conversation simple', "peaufiner l'accent et le registre"],
    obCalibT: 'Lisez ceci à voix haute.', obCalibS: 'Dix secondes suffisent. Lisez à voix haute et sentez le rythme, les liaisons et les voyelles nasales.',
    obCalibRec: 'Continuez à lire : rythme, liaisons, voyelles nasales', obCalibTap: 'Touchez le micro et lisez',
    obAvatarT: 'Choisissez votre\navatar.', obAvatarS: 'Modifiable à tout moment dans les réglages.',
    obDecouverte: 'Découverte : le commencement.', obSeuil: 'Seuil : le passage.',
    obResultA1: 'Une page blanche. Votre parcours commence au Cours de remise à niveau : les sons d\'abord, puis les mots. {name} vous accompagnera en douceur.',
    obResultB1: "Des fondations solides. D'après votre expérience, le flux de ce soir commence par les liaisons et les voyelles nasales.",
    enterEalch: 'Entrer dans Ealch',
    welcomeBack: 'BON RETOUR', helloAgain: 'Re-bonjour.', forgotPw: 'Mot de passe oublié ?', signInBtn: 'Se connecter', newHere: 'Nouveau ici ?',

    soonT: 'bientôt',
    obNameT: 'Comment {name}\ndoit vous appeler ?',
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
    freezeIdle: '1 gel, utilisé automatiquement.',
    streakWord: 'jours de suite',
    levelNames: { A1: 'DÉCOUVERTE', B1: 'SEUIL' },
    dayLetters: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
    weekdayNames: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    goalWord: 'objectif', daysWord: 'jours', dayOne: "Le jour 1 commence aujourd'hui",
    caughtUpShort: 'à jour', reviewShort: 'à réviser',
    dictRowSub: 'Écoutez et écrivez, accents compris',
    browseOpen: 'Parcourir — playlists, examens, points faibles', browseLess: 'Masquer',
    nounFem: 'nom féminin',
    denBanT: 'Pas sûr de votre niveau ?', denBanS: 'Vérification rapide, environ 2 minutes',
    subLessonsWord: 'sous-leçons',
    lessonNow: 'EN COURS', tapHear: 'Touchez pour entendre',
    playerPlaylist: 'PRONONCIATION EN PROFONDEUR',
    playerListen: 'Écoute', playerNow: 'EN LECTURE', playerEmpty: 'Rien à écouter pour le moment.', restart: 'Recommencer',
    rpLevelNote: 'La complexité de la conversation s’adapte au niveau choisi.',
    repeatWord: 'Répétez',
    speakScene: 'RÉEL — AU CAFÉ', speakRepeat: 'Répétez la phrase de {name}', vfTitle: 'FLASH VOCAL',
    speakBlock: 'Bloc {a} / {b}', speakBlockDone: 'Bloc terminé !', speakStationDone: 'Station terminée !',
    speakMapT: 'Le sentier de la parole', speakWorld: 'Monde {n}', speakBackMap: 'Retour au sentier',
    speakSetDone: 'Playlist terminée !', speakBackPlaylist: 'Retour à la playlist',
    speakRetry: 'Réessayer', speakSkip: 'Passer cette phrase', speakTryN: 'Essai {n}',
    speakFocusOn: 'À travailler', speakFocusWordsT: 'Mots à travailler',
    speakNextStation: 'Station suivante', speakNextWorld: 'Monde suivant : {w}',
    speakWordPracticeT: 'Travaillez chaque mot', speakWordAllDone: 'Tous les mots sont maîtrisés !',
    speakBackToLine: 'Retour à la phrase', speakNextWord: 'Mot suivant',
    speakWordTap: 'Touchez un mot pour le travailler',
    speakWorldMeanings: [
      'Les sons du français, un par un',
      'Les phrases du quotidien',
      'Se débrouiller partout',
      'Des conversations qui coulent',
      'La nuance et le détail',
      'La maîtrise, avec élégance',
    ],
    chatRetry: 'Réessayez dans un instant.',
    chatSuggs: [
      { label: 'Pourquoi « je voudrais » ?', msg: 'Pourquoi « je voudrais » et pas « je veux » ?' },
      { label: 'Expliquer la liaison', msg: 'Explique-moi les liaisons, simplement.' },
      { label: 'Le plan de demain ?', msg: 'Quel est le plan de demain ?' },
    ],
    planFree: 'Essentiel — Gratuit',
    planFreeDesc: 'Feed quotidien · 1 scénario par jour · Le Cours de remise à niveau',
    offlineTag: 'HORS LIGNE',
    dlCats: ['Playlists', 'Leçons', 'Audio du coach'],
    dlSubs: ['12 leçons · 210 Mo', 'playlist · 160 Mo', '24 leçons · 340 Mo'],
    freeSpace: 'Espace libre',
    wifiOnlySub: 'Pause des téléchargements en données mobiles',
    availableT: 'DISPONIBLE',
    offlineSync: 'Les progrès hors ligne se synchronisent au retour du réseau.',
    offlineReadyT: 'Tout fonctionne hors ligne',
    // Voir la note sur la version anglaise : le binaire contient toutes les
    // leçons mais 10 417 des 48 978 phrases du corpus.
    offlineReadyS: "Toutes les leçons sont intégrées à l'app et fonctionnent sans réseau. Le vocabulaire supplémentaire arrive tout seul une fois en ligne.",
    contentVersionL: 'Version du contenu', contentCountsFmt: '{u} unités · {l} leçons · {i} phrases',
    checkUpdates: 'Rechercher des mises à jour', updatingL: 'Vérification…', upToDateL: 'À jour', updatedL: 'Contenu mis à jour.',
    plFromBundleFmt: '{n} playlists · fournies avec l’app', plFromUpdateFmt: '{n} playlists · reçues par mise à jour',
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
    heroTag: 'REAL-WORLD — SURVIVAL · RESUME', heroSub: 'Order like a local · with {name}',
    resumeTag: 'CONTINUE', beginTag: 'START HERE', resumeSub: 'Pick up where you left off', begin: 'Begin', vocabPrime: 'Vocab first',
    continueRow: 'Pick up again',
    reviewHeroTitle: 'À réviser', listenHeroTitle: "À l'écoute", listenHeroSub: 'Real phrases, in a real voice',
    freshHeroTitle: 'New words', freshHeroSub: '{n} words picked for today', freshShort: '{n} new',
    found: 'Foundations', denT: 'Refresher Course', denS: 'Sounds · A1 · A2 — the full curriculum',
    cardsT: 'Flashcards', cardsS: '{n} cards · due now', cardsTag: 'RECALL · FLASHCARDS', unitsWord: 'UNITS',
    themesTag: 'PRACTICE · BY THEME', themesTitle: 'Choose your scene.',
    themesSub: 'Real situations, five steps each. {name} waits at the end.', allLevels: 'All',
    themeWeekTag: 'THEME OF THE WEEK', themeTag: 'THEME', wordsWord: 'words',
    stepNames: { decouvrir: 'Discover', construire: 'Build', prononcer: 'Pronounce', ecouter: 'Listen', scene: 'The scene' },
    stepSubs: { decouvrir: 'Flashcards, the words of the scene', construire: 'Sentences, assemble and ask', prononcer: 'Voice flash, say it out loud', ecouter: 'Dictation, listen and write', scene: 'Role play, the final scene' },
    stepOf: 'STEP {a} / {b}', lockedTag: 'LOCKED', inProgressTag: 'IN PROGRESS', finaleTag: 'FINALE', doneTag: 'DONE', newTag: 'NEW',
    noContent: 'No content yet', levelWord: 'LEVEL', parcoursHead: 'THE PATHWAY · {n} STEPS',
    parcoursSub: 'Each step unlocks once you’ve gotten every item in the one before it right.', themeContinue: 'Continue',
    byThemeT: 'By theme', byThemeS: 'Real scenes, five steps each',
    hubT: 'Practice', hubMeta: 'SAY · READ · WRITE',
    flashHubTag: 'FLASHCARDS · BY THEME', flashHubPick: 'Pick a deck', ctSoon: 'Coming soon', ctCardsN: '{n} cards', ctDicteeN: '{n} dictations', ctPhrasesN: '{n} sentences', lvlAll: 'All', previewT: 'Preview',
    subThemesT: 'Sub-themes', byTypeT: 'By card type', byTypeS: 'Vocabulary, conjugation, errors and more',
    instrVocabFr: 'Say it in English, then flip', instrVocabEn: 'Say it in French, then flip', instrGapfill: 'Fill the blank, then flip', instrConjugation: 'Conjugate aloud, then flip', instrError: 'Fix the mistake, then flip', instrGrammar: 'State the rule, then flip', instrRegister: 'Give the equivalent, then flip',
    ctVocabFrEn: 'Vocabulary FR → EN', ctVocabEnFr: 'Vocabulary EN → FR', ctGapfill: 'Gap-fill', ctConjugation: 'Conjugation', ctError: 'Error spotting', ctGrammar: 'Grammar rules', ctRegister: 'Synonyms and register',
    ctVocabFrEnS: 'French shown, produce the English', ctVocabEnFrS: 'English shown, produce the French', ctGapfillS: 'Fill the blank in the sentence', ctConjugationS: 'Verb, tense, pronoun', ctErrorS: 'Find and fix the mistake', ctGrammarS: 'Trigger, rule, examples', ctRegisterS: 'Informal and formal equivalents',
    tabListen: 'LISTEN', tabSpeak: 'SPEAK', tabProfile: 'PROFILE', tabCoach: 'COACH',
    appLangNames: { fr: 'French', en: 'English' },
    practice: 'Practice out loud', phrase: 'PHRASE', next: 'NEXT',
    queueOn: 'In your practice ✓', queueOff: 'Practice queue',
    end: 'End', cont: 'Continue →', why: 'Why?',
    micIdle: 'Tap to speak', micRec: 'Say it out loud…', micDone: 'Compare with the model reply, then retry or continue',
    micHeard: 'HEARD', micNoSpeech: 'Didn’t catch that. Try again',
    micNoSpeechHint: 'Still nothing. Speak right after tapping the mic, and hold the phone a little closer',
    micCantHear: 'The mic can’t hear you right now. You can continue and come back to this line later',
    micDenied: 'Microphone access denied. Turn it on in your phone’s settings',
    micUnavail: 'Mic unavailable on this build. Compare it yourself',
    micGood: 'Well said', micClose: 'Close. Try again', micOff: 'Not quite',
    youSaid: 'A MODEL REPLY — SAY IT ALOUD', liaisonChip: 'Mind the liaison · un‿allongé',
    speakYouSaid: 'YOU SAID', speakModelWas: '{name} said',
    reportTag: 'YOUR REPORT', review: 'To review', replay: 'Replay', talk: 'Talk to the coach',
    traj: 'B1 → B1+ trajectory', conf: 'CONFIDENCE',
    reportSub: 'Built from your real attempts, not sample data.',
    reportEmptyT: 'Nothing to report yet',
    reportEmptyS: 'Finish a drill and your report appears here, built from what you actually said and typed.',
    accuracyLabel: 'ACCURACY', byDrillT: 'By drill',
    statPractice: 'PRACTICE', statWords: 'WORDS MET',
    reviewNone: 'Nothing to review yet. You are getting these right.',
    attemptsLabel: '{n} attempts', practiceWeak: 'Practice these words',
    drillNames: { flashcards: 'Flashcards', voiceflash: 'Voice Flash', dictation: 'Dictation', sentence: 'Builder', roleplay: 'Role Play', placement: 'Level check' },
    hours: 'HOURS SPOKEN', convs: 'CONVERSATIONS', minutes: 'Minutes spoken', days7: 'LAST 7 DAYS',
    accentT: 'Your accent', weakEngine: 'The weakness engine',
    coachStatus: 'your coach · online', unlimited: 'WHY? · UNLIMITED', placeholder: 'Ask your question…',
    chatGreet: 'Bonjour! Ask me anything about French, in French or English.',
    coachIdle: 'your French coach', coachOnline: 'online', coachOffline: 'offline · saved tips', coachTip: 'Saved tip (offline)',
    skills: ['FLUENCY', 'ACCURACY', 'RHYTHM & LIAISONS'],
    denTag: 'REFRESHER COURSE',
    denIntro: 'A real curriculum, from your first sound to the past tense, built to get you back up to speed.',
    denCont: 'Continue',
    ovStart: 'Start lesson', ovSeeAll: 'See all {n} missions', ovSeeList: 'see the list', ovMissionsWord: 'missions',
    checkAnswerFirst: 'Answer to continue', tapToReveal: 'Tap to reveal', tapToFlip: 'Tap to flip', answerToContinue: 'Answer to continue', sceneEnd: 'End the scene',
    nextGroup: 'Next group', reviewDone: 'Review complete', answerAllToContinue: 'Answer every question to continue',
    gridDefaultNote: 'Unless a row says otherwise, the ending is silent.', termsMore: '+{n}', sceneStart: 'Play the scene', sceneChooseFirst: 'Choose an answer to continue', swipeToContinue: 'Swipe to continue.', trapHint: 'One trap at a time. Tap a card to flip it.', trapHintA11y: 'Swipe for the next trap', allGroupsSeen: 'Every group seen. Swipe to continue.',
    gridSeeAll: 'See all {n} endings', gridSeeAllHint: 'Opens the reference sheet', sheetBackToLesson: 'Back to the lesson',
    sheetContinue: 'Continue',
    sheetIndexTitle: 'Reference', sheetLinkA11y: 'Reference sheets, {n} available', backWord: 'Back',
    ovStatRequired: 'required', ovStatGates: 'gates', ovStatMilestones: 'milestones', ovStatBadge: 'badge',
    ovPrereqNone: 'Prerequisites: none. This lesson starts from zero.', ovPrereqSome: 'Prerequisite: {t}',
    ovAlsoHere: 'ALSO IN THIS UNIT',
    ovMin: '{n} min', ovDiff: 'Difficulty',
    moSub: '{n} missions, one badge at the end. Each mission has its own mechanic.',
    moSubNoBadge: '{n} missions. Each mission has its own mechanic.',
    moListen: 'Listen to the intro', moXp: '{n} XP',
    trackDescs: {
      sons: 'From the alphabet to the pronunciation masterclass: sounds before words.',
      a1: 'Greetings, gender, être & avoir, daily life: the 26 units of level Découverte.',
      a2: 'Verbs, the past tense, object pronouns: level Survie, in depth.',
    },
    trackLabels: { sons: 'PRONUNCIATION · MASTERCLASS', a1: 'A1 · DISCOVERY', a2: 'A2 · SURVIVAL' },
    flipHint: 'Tap to flip', again: 'Again', know: 'Got it',
    flipCardA11y: 'Flip card', playAudioA11y: 'Play pronunciation', micA11y: 'Speak into the microphone',
    deckDone: 'Deck complete', deckSub: "Missed cards return tomorrow, right before you'd forget them.", redo: 'Replay deck', backFeed: 'Back to feed',
    deckEmptyT: 'Nothing to review here', deckEmptyS: 'This theme has no cards at this level yet. Try another theme, or check back later.',
    frontFr: 'FRENCH', frontEn: 'ENGLISH',
    vocabTag: 'BEFORE YOU SPEAK · INJECTOR', vocabSub: 'Use each at least once, out loud and with confidence.',
    vocabPrimerTitle: "Today's vocabulary",
    register: 'REGISTER', registerBody: 'Always say', registerEnd: 'sounds like a demand. Waiters notice.',
    go: "Let's go →", grammarTag: 'GRAMMAR · WITHOUT LEAVING THE CONVERSATION',
    grammarBody: "A liaison links a word's silent final consonant to the vowel that follows. After un, les, vous, ils it is not optional, and dropping it is what examiners hear first.",
    askCoach: 'Ask {name} why →',
    // Index-aligned to EXAMS in app/home.tsx: TEF Canada · TCF Canada · DELF B2.
    examDisclaimer: 'Original practice items modeled on the official format. Not published or endorsed by France Éducation international, CCI Paris Île-de-France, or any exam board. Results are practice estimates only, not equivalent to an official score.',
    examNone: 'No mock exams available yet. Check back after your next update.',
    examSubmit: 'Submit', examModelAnswer: 'MODEL ANSWER', examGrading: 'Grading…',
    examGradingNote: 'Each written or spoken answer is marked one at a time, which takes a few seconds. Keep this screen open.',
    examUngraded: 'Grading did not come back. This paper is recorded as ungraded.',
    examPracticeEstimate: 'Practice estimate, not an official score',
    examReviewLesson: 'Review the lesson →', examSeriesDone: 'Mock exam complete',
    examSkillNames: { CO: 'Listening', CE: 'Reading', PE: 'Writing', PO: 'Speaking' },
    examModeExam: 'Exam mode', examModeExamSub: 'Strict clock, single play, no going back. Scored.',
    examModePractice: 'Practice mode', examModePracticeSub: 'Pausable, replay allowed, transcript visible. Not scored.',
    examUnscored: 'Not scored',
    examUnscoredWhy: 'This attempt was taken in practice mode. It does not count toward the estimate.',
    examPaperTitle: 'Exam', examSitting: 'Sit all 4 papers',
    examSittingSub: 'Back to back, under one clock, the way the real day runs.',
    examSectionOne: 'One paper at a time',
    examSectionOneSub: 'Pick up wherever you like. Each paper keeps its own clock.',
    examStatusAvailable: 'To do', examStatusInProgress: 'In progress', examStatusDone: 'Done',
    examQuestionCount: 'questions', examMinutes: 'min', examResume: 'Resume', examStart: 'Start',
    examTimeUp: 'Time is up',
    examTimeUpBody: 'Your answers were saved exactly as they stood.',
    examConfirmSubmit: 'Finish this paper?',
    examConfirmSubmitBody: 'You will not be able to change your answers.',
    examAnswered: 'answered', examWords: 'words',
    examLeaveSection: 'Leave this paper?',
    examLeaveBody: 'The clock keeps running. Your answers are kept.',
    examNoReveal: 'Corrections come at the end, in Le Rapport.',
    examStay: 'Stay', examLeave: 'Leave',
    examReadWindow: 'Read the questions. The audio is about to start.',
    examPlaying: 'Playing', examPlaysLeft: '{n} play left. Read the questions while you wait.', examAudioSpent: 'Audio finished',
    examSilenceNotice:
      'The audio starts on its own, and it opens with a silence: '
      + 'that time is there for you to read the questions. '
      + 'More silences follow, between plays and between documents. '
      + 'They are part of the exam. Nothing is stuck: read, and wait for the voice.',
    examReplay: 'Play again', examTranscript: 'Transcript',
    examAudioFailed: 'Audio unavailable',
    examAudioFailedBody: 'No sound could be played for this document. It will not count toward your estimate.',
    examAudioOffline: 'Audio unavailable offline',
    examAudioOfflineBody:
      'Of the {total} documents in this paper, {n} are not downloaded yet '
      + 'and the connection is not responding. In exam mode each document plays once: '
      + 'the missing ones cannot be heard, and their questions will not be scored. '
      + 'Reconnect, or start knowing what is missing.',
    examAudioStartAnyway: 'Start anyway',
    examAudioCheckingL: 'Checking audio…',
    examStartPrep: 'Start preparation', examStartRecording: 'Start speaking',
    examPrepPhase: 'Preparation', examPrepBody: 'Read the document. Recording starts on its own.',
    examMicHearing: 'We can hear you', examMicPaused: 'Paused, carry on when you are ready',
    examMicStopped: 'Recording finished', examWordsSoFar: '{n} words',
    examRecording: 'Recording', examStopRecording: "I'm done",
    examMicFailed: 'Microphone unavailable',
    examMicFailedBody: 'No recording could be made. This task will not count toward your estimate.',
    examDeliveryCaveat: 'These measure your pacing, not your pronunciation: nothing listened to the recording.',
    examImageUnavailable: 'Image unavailable. Here is what it shows:',
    examStartInteraction: 'Start the interview',
    examPrepInteractionBody: 'Read the document and prepare your questions. The interview starts on its own.',
    examYourTurn: 'Your turn', examExaminerSpeaking: 'The examiner answers',
    examCoverage: 'Facts obtained', examNotAsked: 'Not asked',
    examInterlocutorMissing: 'This task is incomplete: no recorded interlocutor.',
    examStartDebate: 'Start the debate',
    examDebateMissing: 'This task is incomplete: no recorded objections.',
    examPrepDebateBody: 'Review your notes. The examiner will challenge your position.',
    examReport: 'Le Rapport', examEstimate: 'ESTIMATE',
    examLowestGoverns: 'Your level is set by your weakest paper.',
    examParallelNotEquated: 'Parallel mock papers, not calibrated. We do not hold the official conversion tables, so every estimate is a range, never a score.',
    examNoOverall: 'No overall estimate yet',
    examNothingSat: 'Nothing to estimate yet',
    examMissingSkills: 'Missing', examWhatNext: 'To review',
    examNoPrepLesson: 'No prep lesson at that level yet.',
    examNotSat: 'Not sat', examNoScoring: 'No score map',
    examBelowScale: 'Below NCLC 4', examNoAnswer: 'No answer given',
    examMarking: 'Your marking',
    examMarkingSub: 'What the marker picked up, criterion by criterion.',
    examGradedAt: 'Graded {band}', examTargetBand: 'Target {band}',
    examShowModel: 'See a model answer', examHideModel: 'Hide the model answer',
    examModelTitle: 'A model answer',
    examModelNote: 'One answer that holds at the target level. It is not the only one, and not an official key.',
    delfResult: 'Result', delfResultPass: 'Pass', delfResultFail: 'Not passed',
    delfFloor: 'You need 50/100 overall and at least 5/25 in every épreuve.',
    delfBelowFloor: 'Below the minimum',
    delfFailedTotal: 'The total is under 50/100.',
    delfFailedFloor: 'At least one épreuve is below the 5/25 minimum.',
    examBlank: 'MOCK EXAM', examEpreuves: 'papers', examPapersCountOne: 'mock exam', examPapersCount: 'mock exams',
    examFullPaper: 'Full exam', examFullPaperSub: 'All 4 papers, in the order the real day runs.',
    examBySection: 'By paper', examBySectionSub: 'Work one skill at a time.',
    examNoPapersYet: 'No exams available yet.', examInProgress: 'in progress',
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
    avatarT: 'Avatar',
    testAlarm: 'Test the alarm', customTime: 'Custom time', calendarT: 'Your calendar',
    voiceT: 'Voice Flash', voiceS: 'image → voice · translation', sbT: 'Sentences', sbS: 'learn · say · write', rpT: 'Role Play', rpS: 'AI conversation · A1 → B2',
    roleplayHubTag: 'ROLE PLAY · BY THEME', rpScenesN: '{n} scenes',
    startQuiz: 'Start the quiz', quizPassed: 'PASSED', quizFailed: 'Not yet', retry: 'Retry', qNext: 'Next', backToDen: 'Back to curriculum',
    lessonDone: 'Finish the lesson', lessonSoon: 'Lesson coming soon', builderTag: 'BUILDER', sbSkipSay: 'Skip', sbNextSentence: 'Next sentence',
    practiceGotIt: 'I knew it', practiceMissed: 'Missed it',
    lessonNext: 'Next', lessonPrev: 'Back', lessonOverview: 'Overview', lessonSwipeHint: 'Swipe to begin',
    lessonTapLetter: 'Tap a letter to open its card', lessonMemo: 'MEMORIZE', lessonReplay: 'Replay narration', lessonNarration: 'Narration',
    lessonListen: 'Listen', lessonListening: 'Listening…',
    lkWelcomeT: 'Swipe to move around',
    lkWelcomeS: 'Lessons are a deck of cards, not a scroll. Swipe left or right to move between sections — try it now.',
    lkCountersT: 'Two numbers, two counts',
    lkCountersS: "The left number counts teaching sections. The right counts every page you can swipe through, quiz included — that's why they're different.",
    lkListenT: 'Tap to hear it',
    lkListenS: 'This chip appears whenever a section has something to hear. Tap it to listen, tap again to replay — nothing plays on its own.',
    lkWaveT: 'Moving bars = playing',
    lkWaveS: 'Wherever you see this next to a button, it animates only while that exact audio is playing.',
    lkTapT: 'Rows with an arrow open up',
    lkTapS: "A row like this holds more — tap it for a bigger card with the full detail. No arrow means it's just reference text.",
    lkTapRowLabel: 'ami — friend',
    lkNavT: 'Buttons do the same as swiping',
    lkNavS: 'Prev and Next at the bottom move you around too. Forgot something? Tap the ? at the top of any lesson to see this again.',
    lkSkip: 'Skip', lkStart: 'Start the lesson', lkHelp: 'How lessons work',
    lessonTapOpen: 'Tap to open', lessonSwipe: 'Swipe', quizWord: 'QUIZ', quizHint: 'One question per card, swipe to move on', quizAnswerAll: 'Answer every question to see your result',
    lessonNextUp: 'Next lesson', lessonRestart: 'Restart the lesson',
    flashQuestion: 'QUESTION', flashAnswer: 'ANSWER', flashReveal: 'Tap to reveal',
    denLearned: '{n} / {m} learned',
    denLearnedPct: '{p}% learned',
    denMastered: '{k} mastered',
    examplesT: 'Examples & use cases', tableT: 'Table', errorsT: 'Common errors', audioT: 'Audio practice', videoT: 'Video — the mouth in 3D', subsT: 'Sub-lessons',
    sayFr: 'Say it in French', transEn: 'Translate to English', orTypeT: 'or type your answer', checkT: 'Check',
    correctT: 'Correct!', incorrectT: 'Not quite: ', nextCard: 'Next card', vfDoneT: 'Session complete',
    vfEmptyT: 'Nothing to say here', vfEmptyS: 'This theme has no Voice Flash words yet. Try another theme, or check back later.',
    vfSelfT: 'THE ANSWER — HOW DID YOU DO?', vfGot: 'I said it right', vfMissed: 'Not quite',
    wrPrompt: 'Write it in French', wrPh: 'Your answer…', wrAnswer: 'THE ANSWER',
    wrReveal: 'Show the answer', wrNote: 'Accents are not marked here.',
    learnT: 'Learn these words', arrangeT: 'Arrange the sentence', sayItT: 'Say it out loud', writeItT: 'Write it', wellDone: 'Bravo, sentence mastered',
    chooseLevel: 'Choose your level', startRp: 'Start the conversation', rpDoneT: 'Scene complete', rpDoneS: '{name}: "Your market vendor adores you."', rpYourLine: 'YOUR LINE — SAY IT ALOUD', rpTag: 'ROLE PLAY', rpReport: 'The report →', rpNotHeard: 'Not heard, your line is shown.',
    rpYourTurn: 'YOUR TURN', rpRespond: 'Respond in French, then check', rpModel: 'Model reply',
    rpSpeak: 'Speak', rpShowMe: 'Show me', rpListening: 'Listening…', rpAlsoWorks: 'Also works', rpSceneDone: 'Conversation complete', rpUnheardShort: 'Not heard', lsHidden: 'Hidden',
    rpMicBlocked: 'Speech checking could not start. Your phone may be missing the French voice pack. This is not you: carry on, the answers are shown.',
    narrTag: 'NARRATED LESSON', narrCta: 'Narrated', narrRepeat: 'Repeat after {name}', narrYourTurn: 'Your turn, say it', narrCheck: "Answer {name}'s question",
    narrSkip: 'Skip', narrDoneT: 'Lesson complete', narrDoneS: '{name} walked you through all seven stages.',
    bannerText: 'Your {t} session is waiting: Au Café, 4 min with {name}.',
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
    placementT: 'Level check', placementS: 'A few vocab questions, a clear estimate.', placementCta: 'Take the check', estimate: 'ESTIMATE',
    plWhatMean: 'What does this word mean?',
    plCheckNote: 'A quick check, not an exam: a clear estimate to pick your starting point.',
    plResult: 'YOUR ESTIMATE',
    plResA0: 'We start at the beginning: foundations first, at your pace.',
    plResA1: 'The basics are there. We firm up A1 and move on.',
    plResA2: 'Solid core vocabulary. We start at A2.',
    plStartUnit: 'Your starting point', plStartCta: 'Start here', plRetake: 'Retake the check',
    plScore: '{n} of {m} correct',
    plNoBank: 'Not enough content for a check yet. Try again after an update.',
    dicteeT: 'La Dictée', dicteeS: 'Train your ear and spelling: write exactly what you hear.', play: 'Play', slow: '0.75×', playsLeft: 'plays',
    writeHeard: 'Write what you hear', check2: 'Check', perfectNoMistakes: 'Perfect, no mistakes', youWrote: 'You wrote', correctIs: 'The correct answer',
    downloadsT: 'Downloads', downloadsS: 'Listen offline', storage: 'Storage', wifiOnly: 'Wi-Fi only',
    subscription: 'Subscription', currentPlan: 'CURRENT PLAN',
    pwTag: 'EALCH PREMIÈRE', pwTitle: 'Unlock the whole path',
    pwLead: 'A2 and beyond, unlimited coach turns and unlimited role plays. Sons and A1 stay free forever.',
    pwFeatLevels: 'Every level', pwFeatLevelsS: 'A2 and beyond, as far as you go',
    pwFeatCoach: 'Unlimited coach', pwFeatCoachS: 'Ask past the free daily limit',
    pwFeatRoleplay: 'Unlimited role plays', pwFeatRoleplayS: 'Every scene, every day. Free covers one scenario a day',
    monthlyL: 'Monthly', annualL: 'Annual', perMoShort: '/mo', billedYear: 'billed {p} once a year',
    saveFmt: 'Save {p}', bestValue: 'BEST VALUE', pwTrialFmt: 'Starts with a {t} free trial',
    pwCta: 'Continue', pwCtaGuest: 'Sign in to subscribe',
    pwUnavailableT: 'Purchases are not available in this build',
    pwUnavailableS: 'This build cannot take payment yet. Nothing was charged.',
    pwSuccessT: 'Welcome to Première', pwSuccessS: 'Everything is unlocked. Enjoy it.',
    restoreT: 'Restore purchases', restoreDone: 'Purchases restored', restoreNone: 'No purchases to restore on this account',
    restoreFail: 'Could not reach the store. Try again',
    pwTermsAuto: 'Auto-renews until cancelled. Manage or cancel anytime in your store account settings.',
    currencyT: 'Currency', detected: 'Detected from your region', chosenByYou: 'Chosen by you',
    storePricesNote: 'Prices shown by your app store are what you will be charged',
    gateLevelsT: 'A2 and beyond is Première', gateLevelsS: 'Sons and A1 are free forever. The rest of the path needs Première.',
    gateRoleplayT: 'That was your free scene for today', gateRoleplayS: 'Free practice covers one scenario a day. Première removes the cap, or come back tomorrow.',
    coachCapT: 'Daily coach limit reached', coachCapS: 'Your free turns are back tomorrow', coachCapCta: 'Unlimited with Première',
    premLockTag: 'PREMIÈRE',
    planPremiereMo: 'Première — Monthly', planPremiereYr: 'Première — Annual',
    renewsFmt: 'Renews {d}', endsFmt: 'Ends {d}',
    billingIssueT: 'Payment issue',
    billingIssueS: 'Your last renewal failed. Update your payment method in your store account to keep Première.',
    managedVia: 'Managed by {s}', seePlans: 'See plans',
    homePremT: 'Ealch Première', homePremS: 'Every level, unlimited coach and role plays',
    placePwT: 'Ready for the full path', placePwS: 'Your plan reaches past A1. Première unlocks every level it needs.', placePwCta: 'See Première',
    skillRead: 'READ', skillListen: 'LISTEN', skillSpeak: 'SPEAK', skillWrite: 'WRITE', skillCourse: 'COURSE', skillVocab: 'VOCAB', skillReadVocab: 'READ · VOCAB',
    accountBilling: 'Account & Billing', learningSec: 'Learning', appearanceSec: 'Appearance', notificationsSec: 'Notifications',

    obSteps: ['01 — YOUR ACCOUNT', '02 — YOUR NAME', '03 — YOUR THEME', '04 — YOUR GOAL', '05 — YOUR EXPERIENCE', '06 — YOUR PACE', '07 — YOUR ACCENT', '08 — YOUR REMINDERS', '09 — WARM-UP', '10 — YOUR AVATAR', '11 — YOUR LEVEL'],
    obTagline: 'Speak with elegance.',
    obIntro: "You've done the grammar. Now do the talking. Speak French out loud from day one, and be understood.",
    createAccount: 'Create an account', alreadyAccount: 'Already have an account?', signInLink: 'Sign in',
    obCreateT: 'Create your account.', passwordPh: 'Password', continueT: 'Continue', orT: 'OR',
    withApple: 'Continue with Apple', withGoogle: 'Continue with Google',
    obThemeT: 'Choose your\nsignature color.', obThemeS: 'One vibrant thread through the dark. Change it anytime in your profile.',
    obGoalT: 'Why French?', obExpT: 'How much French\nlives in you already?', obPaceT: 'Minutes per day?',
    obAccentT: 'Which French\nfor {name}?',
    obRemindT: 'When should we\ncall you to practice?', obRemindS: 'A daily alarm keeps the streak invisible, and the habit real.',
    enableReminders: 'Enable reminders', alarmChips: ['morning', 'noon', 'evening', 'night'],
    paceSubs: ['a coffee break', 'the morning commute', 'getting serious', 'immersion'],
    expTitles: ['Complete beginner', 'School memories', 'Conversational', 'Advanced'],
    expSubs: ['I am starting from zero', 'school French, mostly forgotten', 'I can hold simple conversations', 'polishing accent & register'],
    obCalibT: 'Read this aloud.', obCalibS: 'Ten seconds is enough. Read it aloud and feel the rhythm, the liaisons, the nasal vowels.',
    obCalibRec: 'Keep reading: rhythm, liaisons, nasal vowels', obCalibTap: 'Tap the mic and read',
    obAvatarT: 'Choose your\navatar.', obAvatarS: 'Change it anytime in Settings.',
    obDecouverte: 'Découverte: the beginning.', obSeuil: 'Seuil: the threshold.',
    obResultA1: 'A clean slate. Your journey starts in the Refresher Course: sounds first, then words. {name} will keep it gentle.',
    obResultB1: "Solid foundations. Based on your experience, tonight's feed starts with liaisons and nasal vowels.",
    enterEalch: 'Enter Ealch',
    welcomeBack: 'WELCOME BACK', helloAgain: 'Hello again.', forgotPw: 'Forgot password?', signInBtn: 'Sign in', newHere: 'New here?',

    soonT: 'soon',
    obNameT: 'What should\n{name} call you?',
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
    freezeIdle: '1 freeze, used automatically.',
    streakWord: 'day streak',
    levelNames: { A1: 'DÉCOUVERTE', B1: 'SEUIL' },
    dayLetters: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    weekdayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    goalWord: 'goal', daysWord: 'days', dayOne: 'Day 1 starts today',
    caughtUpShort: 'caught up', reviewShort: 'to review',
    dictRowSub: 'Hear it, type it, accents included',
    browseOpen: 'Browse — playlists, exams, weak spots', browseLess: 'Show less',
    nounFem: 'feminine noun',
    denBanT: 'Not sure where to start?', denBanS: 'Quick check, about 2 minutes',
    subLessonsWord: 'sub-lessons',
    lessonNow: 'NOW', tapHear: 'Tap to hear',
    playerPlaylist: 'PRONUNCIATION DEEP-DIVES',
    playerListen: 'Listen', playerNow: 'NOW PLAYING', playerEmpty: 'Nothing to listen to yet.', restart: 'Restart',
    rpLevelNote: 'The conversation complexity changes with the level you choose.',
    repeatWord: 'Repeat',
    speakScene: 'REAL-WORLD — AT THE CAFÉ', speakRepeat: "Repeat the line", vfTitle: 'VOICE FLASH',
    speakBlock: 'Block {a} / {b}', speakBlockDone: 'Block complete!', speakStationDone: 'Station cleared!',
    speakMapT: 'The speaking trail', speakWorld: 'World {n}', speakBackMap: 'Back to the trail',
    speakSetDone: 'Playlist complete!', speakBackPlaylist: 'Back to the playlist',
    speakRetry: 'Try again', speakSkip: 'Skip this line', speakTryN: 'Try {n}',
    speakFocusOn: 'Focus on', speakFocusWordsT: 'Words to practice',
    speakNextStation: 'Next station', speakNextWorld: 'Next world: {w}',
    speakWordPracticeT: 'Practice each word', speakWordAllDone: 'All words mastered!',
    speakBackToLine: 'Back to the line', speakNextWord: 'Next word',
    speakWordTap: 'Tap a word to practice it',
    speakWorldMeanings: [
      'The Garden of Sounds · French sounds, one by one',
      'The Village · everyday phrases',
      'The City · getting by anywhere',
      'The Metropolis · conversations that flow',
      'The Summits · nuance and detail',
      'The Star · mastery with elegance',
    ],
    chatRetry: 'Try again in a moment.',
    chatSuggs: [
      { label: 'Why « je voudrais »?', msg: 'Why « je voudrais » and not « je veux »?' },
      { label: 'Explain the liaison', msg: 'Explain liaisons again, simply.' },
      { label: "What's next?", msg: "What's tomorrow's plan?" },
    ],
    planFree: 'Essential — Free',
    planFreeDesc: 'Daily feed · 1 scenario per day · Refresher Course',
    offlineTag: 'OFFLINE',
    dlCats: ['Playlists', 'Lessons', 'Coach audio'],
    dlSubs: ['12 lessons · 210 MB', 'playlist · 160 MB', '24 lessons · 340 MB'],
    freeSpace: 'Free space',
    wifiOnlySub: 'Pause downloads on cellular',
    availableT: 'AVAILABLE',
    offlineSync: 'Progress made offline syncs when you’re back online.',
    offlineReadyT: 'Everything works offline',
    // NOT "no download needed". The binary ships the seed CUT: every unit and
    // every lesson, but 10,417 of the corpus's 48,978 phrases. The rest arrives
    // over the air. The old line claimed nothing was downloaded while the card
    // below it displayed 48,978, which is a number that only exists BECAUSE a
    // download happened. A learner reading it would expect all 48,978 on a
    // fresh offline install and get a quarter of them.
    offlineReadyS: 'Every lesson is built into the app and works with no network. Extra vocabulary arrives on its own once you are online.',
    contentVersionL: 'Content version', contentCountsFmt: '{u} units · {l} lessons · {i} phrases',
    checkUpdates: 'Check for updates', updatingL: 'Checking…', upToDateL: 'Up to date', updatedL: 'Content updated.',
    plFromBundleFmt: '{n} playlists · bundled with the app', plFromUpdateFmt: '{n} playlists · from an update',
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
