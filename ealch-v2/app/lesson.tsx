import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View } from 'react-native';
import { useRouter, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { FocusHeader, Press } from '@/components/ui';
import { LessonPager } from '@/components/LessonPager';
import { SheetLink, SheetSurface } from '@/components/ReferenceSheet';
import { LessonKeyIntro } from '@/components/LessonKeyIntro';
import { MascotAvatar } from '@/components/MascotAvatar';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useProgress, useSessionLog } from '@/store/useProgress';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';
import { lessonSkill } from '@/content/curriculum';
import { sound, audio } from '@/services';
import { content } from '@/services/content';
import { quizQuestions, unitBand, type Lesson, type LessonSection, type QuizQuestion } from '@/content/schema';
import { buildQuizConfig } from '@/content/quizRounds.logic';
import { actSectionsSoFar, checkpointFor, resumePlan, tranche, warmBackQuestions } from '@/content/acts.logic';
import { ResumeRecapCard, WarmBackCard } from '@/components/ActCheckpoint';
import { contentSections as contentSectionsOf, quizSection as quizSectionOf } from '@/content/lessonPager.logic';
import { audioIndex, resolveByText } from '@/content/lessonAudio.logic';
import { FREE_BANDS } from '@/store/entitlement.logic';
import { useFeature } from '@/store/useEntitlement';
import { track as trackEvent } from '@/services/analytics';

// Callers written before the corpus used short keys; map them to the real ids so
// existing links (home's weak-spots row, etc.) keep working until they're updated.
const LEGACY: Record<string, string> = {
  sons3: 'sons.03.l1',
  a1_4: 'a1.04.l1',
  a2_1: 'a2.01.l1',
};

export default function LessonScreen() {
  const t = useTheme();
  const T = useT();
  useReadingBrightness();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ key?: string; at?: string }>();

  const raw = Array.isArray(params.key) ? params.key[0] : params.key;
  const id = raw ? LEGACY[raw] ?? raw : '';
  // Fall back to the first available lesson if the id is unknown, so a bad link
  // shows real content rather than crashing.
  const L: Lesson | null = content.lesson(id) ?? content.units('sons').flatMap((u) => content.lessonsOf(u.id))[0] ?? null;

  // The level-gate CHOKEPOINT (Phase 10). The Den's row gate is UX; this is
  // enforcement — every route into a lesson (den, resume, placement start,
  // deep link) lands here, so a lesson past A1 without 'levels.all' redirects
  // to the paywall instead of rendering.
  const levelsAll = useFeature('levels.all');
  const bandLocked =
    !!L && !levelsAll && !(FREE_BANDS as readonly string[]).includes(unitBand(L.unitId) ?? 'a1');
  useEffect(() => {
    if (bandLocked) {
      trackEvent('gate_blocked', { feature: 'levels.all', from: 'lesson' });
      router.replace({ pathname: '/paywall', params: { from: 'gate:levels' } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bandLocked]);

  const logSession = useSessionLog();
  const setResume = useProgress((s) => s.setResume);
  const clearResume = useProgress((s) => s.clearResume);
  const logError = useProgress((s) => s.logError);
  const logAttempt = useProgress((s) => s.logAttempt);
  const markMissionDone = useProgress((s) => s.markMissionDone);
  // Read once at mount, not subscribed: setResume fires on every page change,
  // and a live subscription would recompute the away-gap mid-lesson and could
  // flip the warm-back on while the learner is reading.
  const resumeByMode = useRef(useProgress.getState().resumeByMode).current;

  // The one-time "how lessons work" tour (LessonKeyIntro): auto-shows before
  // a user's first-ever lesson, then never again on its own. `showKeyOverride`
  // is the lesson header's "?" reopening it later — independent of the
  // persisted flag, so revisiting it never un-marks it as seen.
  const lessonKeySeen = useStore((s) => s.lessonKeySeen);
  const setLessonKeySeen = useStore((s) => s.setLessonKeySeen);
  const [showKeyOverride, setShowKeyOverride] = useState(false);
  const showKey = !lessonKeySeen || showKeyOverride;

  const [playingId, setPlayingId] = useState<string | null>(null);
  // itemIds self-rated this visit — purely a UI dim/highlight cue, never read
  // back for logic. Re-grading is allowed and expected (that's how repetition
  // works elsewhere in this app); this only stops a re-tap looking ignored.
  const [gradedIds, setGradedIds] = useState<ReadonlySet<string>>(new Set());
  // The quiz completes INSIDE the pager now (the quiz page's question deck);
  // this flips once per visit and unlocks the finish button.
  const [quizDone, setQuizDone] = useState(false);
  const completedRef = useRef(false);
  // The FULL-sections index of the section page the learner is currently on;
  // leaving it (to any other page) is what marks that mission done.
  const lastFullIx = useRef<number | null>(null);
  // "Restart the lesson" remounts the pager (fresh cover, fresh quiz) without
  // leaving the screen — the nonce is the remount key.
  const [runNonce, setRunNonce] = useState(0);
  // The reference-sheet surface: null when closed, a sheet id when open, and
  // '' when opened from the persistent header link (which lands on the index).
  const [sheetId, setSheetId] = useState<string | null>(null);

  // Moving to the next lesson goes through router.replace on THIS screen, so
  // the component instance survives the navigation — per-lesson state must
  // reset by hand when the lesson id changes.
  useEffect(() => {
    setQuizDone(false);
    setGradedIds(new Set());
    setPlayingId(null);
    completedRef.current = false;
    lastFullIx.current = null;
    setRunNonce(0);
  }, [L?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // The lesson that follows this one, across unit boundaries within the same
  // band: sons.01.l1 hands off to sons.02.l1 (Les voyelles), and so on. Null
  // past the end (or for bands the Den has no track for) — the result card
  // then falls back to a plain finish.
  const nextL = useMemo(() => {
    if (!L) return null;
    const band = unitBand(L.unitId);
    if (band !== 'sons' && band !== 'a1' && band !== 'a2') return null;
    const all = content.units(band).flatMap((u) => content.lessonsOf(u.id));
    const ix = all.findIndex((x) => x.id === L.id);
    return ix >= 0 && ix + 1 < all.length ? all[ix + 1] : null;
  }, [L?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Deep-link landing (Phase 2.E consumer): an anchor in `?at=` names the exact
  // section a review flow wants this visit to open on. Resolved synchronously so
  // it is available on the pager's very first layout — a section index over the
  // non-quiz sections, or null when the anchor is stale, foreign, or absent (in
  // which case the lesson simply opens on its cover). The same value doubles as
  // the highlight, so the landing spot stays findable for the visit.
  const atParam = Array.isArray(params.at) ? params.at[0] : params.at;
  // The missions page's quiz row: the quiz page has no section anchor, so it
  // rides a literal `at=quiz` instead (see LessonPager.initialQuiz).
  const wantsQuiz = atParam === 'quiz';
  const deepLinkIx = useMemo(() => {
    const atRaw = wantsQuiz ? undefined : atParam;
    if (!atRaw || !L) return null;
    const resolved = content.resolveAnchorStr(atRaw);
    if (!resolved || resolved.lesson.id !== L.id) return null;
    const secs = contentSectionsOf(L);
    const ix = secs.findIndex((sec) => (sec as LessonSection) === resolved.section);
    return ix !== -1 ? ix : null;
  }, [L?.id, atParam, wantsQuiz]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => audio.stop(), []);

  // The unmount stop above is not enough: pushing another route (Settings, the
  // paywall) keeps this screen mounted underneath, and the narration would
  // keep talking over it. The voice belongs to this screen — losing focus
  // hard-stops it, for any route out.
  useFocusEffect(
    useCallback(() => {
      return () => audio.stop();
    }, [])
  );

  // Mark this lesson resumable the moment it opens, so a mid-lesson exit leaves
  // the home hero offering it by its real title. The completion handlers below
  // clear it; unmount deliberately does not (leaving = not finishing). Store the
  // caller's key so the route round-trips through the same LEGACY resolution.
  // onLessonIndexChange (below) re-fires this with the current section's
  // anchor as the learner swipes, so the position stays live too.
  useEffect(() => {
    if (L) setResume('lesson', { route: `/lesson?key=${raw ?? id}`, title: L.title });
  }, [L?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!L) {
    return (
      <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.back()} onSettings={() => router.push('/settings')} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30, gap: 18 }}>
          <MascotAvatar size={80} rounded={false} state="thinking" />
          <TX role="body" color={t.txMuted} center>{T.lessonSoon}</TX>
        </View>
      </View>
    );
  }

  // Redirecting to the paywall (effect above) — render nothing in the gap so a
  // gated lesson never flashes its content on the way out.
  if (bandLocked) {
    return <View style={{ flex: 1, backgroundColor: t.bg }} />;
  }

  if (showKey) {
    return (
      <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
        <LessonKeyIntro
          onDone={() => {
            setLessonKeySeen(true);
            setShowKeyOverride(false);
          }}
        />
      </View>
    );
  }

  // Both of these come from lessonPager.logic rather than being re-filtered
  // here. The inline copies said exactly what the helpers say, but EVERY index
  // mapping below (progress writes, deep-link anchors, resume) round-trips
  // between the full section list and this filtered one and is only correct
  // while the two agree — and this same file already imported the helper as
  // `contentSectionsOf` and used it a few lines down, so the rule had two live
  // definitions in one screen. Changing the filter in one place and not the
  // other would silently mark the wrong mission complete.
  const contentSections = contentSectionsOf(L);
  const quizSection = quizSectionOf(L);
  // quizQuestions() flattens both quiz shapes (flat `questions`, or v2 `rounds`
  // of eight) into one list. The deck below renders CLOSED questions only —
  // those with options and a numeric answer — so the open v2 formats (typeIn,
  // speak, errorSpot, tapSilent) are filtered out rather than rendered as
  // broken option lists. The round-aware engine that plays every format is
  // the next piece of work; until it lands, a v2 quiz degrades to its mcq and
  // listenChoose questions instead of crashing.
  // The round-based quiz, when the lesson declares rounds. This is what makes
  // every question FORMAT reachable: the flat deck below renders mcq only, so
  // a v2 lesson's tapSilent / errorSpot / typeIn / speak questions were being
  // filtered out and silently never asked. Null for a pre-v2 lesson, which
  // keeps the flat deck exactly as it was.
  const quizCfg = useMemo(() => {
    if (!quizSection?.rounds?.length) return null;
    return buildQuizConfig(quizSection.rounds, {
      errorTriggers: L.errorTriggers,
      drills: L.drills,
      roundFailThreshold: quizSection.roundFailThreshold,
      passMark: quizSection.passMark,
    });
  }, [L.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // How long since this lesson was last left, from the resume slot's stamped
  // day. Used only to decide whether a warm-back is warranted, so day
  // granularity is enough and no new state is needed.
  const awayMs = useMemo(() => {
    const at = resumeByMode.lesson?.at;
    if (!at) return 0;
    const then = Date.parse(at);
    return Number.isFinite(then) ? Math.max(0, Date.now() - then) : 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [L?.id]);

  // Where a returning learner lands: two screens back, on a one-screen recap
  // of the act so far, and after more than three days a short warm-back over
  // the act they last COMPLETED. Only for lessons that declare acts.
  const resume = useMemo(() => {
    if (!L.acts?.length || deepLinkIx == null) return null;
    const fullIx = L.sections.indexOf(contentSectionsOf(L)[deepLinkIx]);
    if (fullIx < 0) return null;
    return resumePlan(L, fullIx, awayMs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [L?.id, deepLinkIx, awayMs]);

  // The warm-back and recap are shown once per visit, before the lesson.
  const [preface, setPreface] = useState<'warmBack' | 'recap' | null>(null);
  useEffect(() => {
    if (!resume) return setPreface(null);
    setPreface(resume.warmBack ? 'warmBack' : resume.showRecap ? 'recap' : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [L?.id]);

  // One resolved checkpoint per act: its milestone, its progress through the
  // lesson, and the corpus items that act releases to spaced repetition.
  // Empty for a pre-v2 lesson, which then renders no checkpoint pages.
  const checkpoints = useMemo(
    () =>
      (L.acts ?? []).map((a) => {
        const last = a.sections[a.sections.length - 1];
        return last ? checkpointFor(L, last) : null;
      }),
    [L.id] // eslint-disable-line react-hooks/exhaustive-deps
  );

  // Reaching a checkpoint releases that act's cards into review. This is the
  // architecture's "cards arrive as they are taught" rule: an hour-long lesson
  // must not dump sixty new items into the SRS the moment it ends.
  //
  // Idempotent by act: a learner who swipes back and forth across a checkpoint
  // releases its tranche once, not once per crossing.
  const releasedActs = useRef<Set<number>>(new Set());
  useEffect(() => {
    releasedActs.current = new Set();
  }, [L?.id]);

  const releaseTranche = (actIndex: number) => {
    if (releasedActs.current.has(actIndex)) return;
    releasedActs.current.add(actIndex);
    const ids = tranche(L, actIndex);
    if (!ids.length) return;
    // Logged as a recognise-modality attempt per item: the SRS keys on
    // (itemId, modality) and this is the learner's first exposure, which is
    // exactly what schedules the card for its first review.
    for (const id of ids) {
      const it = content.item(id);
      if (!it) continue;
      logAttempt({
        activity: 'lesson',
        itemId: id,
        expected: it.fr,
        heard: '',
        score: 1,
        verdict: 'good',
        correct: true,
        modality: 'recognise',
        anchor: content.anchorFor(L, id) ?? undefined,
      });
    }
    // Deliberately not tracked as an analytics event: AnalyticsEvent is the
    // monetisation funnel, and the release is already durably recorded as
    // attempts in the progress log, which is where the SRS reads it from.
  };

  // A wrong answer's "see this again": jump to the section that taught it.
  // `initialIndex` is an index over contentSections (the pager's own list), so
  // the section id is resolved against that rather than L.sections.
  const jumpToRef = (sectionId: string) => {
    const ix = contentSections.findIndex((sec) => (sec as { id?: string }).id === sectionId);
    if (ix < 0) return;
    sound.play('tap');
    router.setParams({ at: `${L.id}#s${L.sections.indexOf(contentSections[ix])}.0` });
  };

  const quiz = quizQuestions(quizSection ?? {}).filter(
    (q): q is QuizQuestion & { opts: string[]; correct: number } =>
      Array.isArray(q.opts) && q.opts.length > 1 && typeof q.correct === 'number'
  );

  // Keeps the lesson's resume slot pointed at wherever the pager currently is,
  // not just where it opened. `sectionIx` is an index into `contentSections`
  // (what LessonPager was handed); resolveAnchor/anchorForItem key sections
  // against the lesson's FULL `sections` array, so it's translated back via
  // object identity before formatting — the same translation deepLinkIx above
  // already does in reverse. Null (cover/image/quiz pages) is a no-op: those
  // pages have no honest anchor to resume into, so the last real section wins.
  const onLessonIndexChange = (sectionIx: number | null) => {
    const fullIx = sectionIx == null ? null : L.sections.indexOf(contentSections[sectionIx]);
    // Leaving a section page = that mission is done (missions hub, spec
    // 2026-07-30). Free navigation marks only what was actually visited;
    // entering at mission 7 never back-fills 1-6.
    if (lastFullIx.current != null && lastFullIx.current !== fullIx) {
      markMissionDone(L.id, L.version, lastFullIx.current);
    }
    lastFullIx.current = fullIx != null && fullIx >= 0 ? fullIx : null;
    if (fullIx == null || fullIx < 0) return;
    const anchor = `${L.id}#s${fullIx}.0`;
    setResume('lesson', { route: `/lesson?key=${raw ?? id}&at=${encodeURIComponent(anchor)}`, title: L.title });
  };

  // Every authored audio spec in this lesson, keyed by the French it voices.
  // Built once per lesson: the walk is over a whole lesson body, and `play`
  // fires on every tap.
  const audioIx = useMemo(() => (L ? audioIndex(L) : new Map()), [L]);

  const play = (pid: string, text: string, audioRef?: string | null, slow = false) => {
    sound.play('flip');
    setPlayingId(pid);
    // What the lesson AUTHORED for this string: its recording set, its speeds,
    // its play budget. Every recordingId resolves to null until the studio
    // delivers (CLIP_MANIFEST is empty), so today this still plays TTS on the
    // French — the wiring is what makes delivery a manifest edit rather than a
    // content edit. An explicit audioRef from the caller still wins: that is a
    // real corpus item's pre-rendered clip, which is already on disk.
    const r = resolveByText(text, audioIx, { slow, lessonAudio: L?.audio });
    const done = () => setPlayingId((p) => (p === pid ? null : p));
    audio.speakItem(
      { fr: r.text, audioRef: audioRef ?? r.audioRef },
      { rate: r.rate, lang: 'fr-FR', onDone: done, onError: done }
    );
  };

  // Long-press anywhere French: the 0.65 comprehension pass.
  const playSlow = (pid: string, text: string, audioRef?: string | null) => play(pid, text, audioRef, true);

  // Self-rated recall on a practice item — the flashcards.tsx pattern (no mic,
  // no typed answer, the learner's own "I knew it" / "Again"). `anchorFor`
  // re-derives the item's position in THIS lesson's sections every time (never
  // stored), so it can never point at a stale block even if `L` gets
  // re-authored between visits.
  const gradeItem = (itemId: string, correct: boolean) => {
    const it = content.item(itemId);
    if (!it) return;
    sound.play(correct ? 'success' : 'tap');
    setGradedIds((g) => new Set(g).add(itemId));
    logAttempt({
      activity: 'lesson',
      itemId,
      expected: it.fr,
      heard: '',
      score: correct ? 1 : 0,
      verdict: correct ? 'good' : 'off',
      correct,
      modality: 'recognise',
      anchor: content.anchorFor(L, itemId) ?? undefined,
    });
  };

  // A wrong answer in a skill-mapped lesson is a real, named weak spot — the
  // one producer available while the corpus carries no tags and speech
  // recognition is stubbed. Unmapped lessons record nothing. (The quiz deck
  // plays its own right/wrong sounds.)
  const onQuizAnswer = (_qIndex: number, correct: boolean) => {
    if (!correct) {
      const skill = lessonSkill[L.id];
      if (skill) logError({ skill, source: 'lesson' });
    }
  };

  // Fires once, when every question has an answer. Pass or fail, reaching the
  // end of the quiz is finishing the lesson: the streak records showing up,
  // and the hero stops offering to resume what was just completed. A retry
  // inside the deck re-shuffles for fun but never re-logs the session.
  const onQuizComplete = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    logSession('lesson');
    clearResume('lesson');
    setQuizDone(true);
    // The quiz mission's check on the missions hub — the quiz page itself
    // never fires onIndexChange (no section anchor), so completion marks it.
    const quizIx = L.sections.findIndex((s) => s.type === 'quiz');
    if (quizIx >= 0) markMissionDone(L.id, L.version, quizIx);
  };

  const finish = () => {
    // Finishing counts the page being left, exactly like a swipe away would.
    if (lastFullIx.current != null) markMissionDone(L.id, L.version, lastFullIx.current);
    sound.play('tap');
    if (quiz.length === 0) {
      // No quiz on this lesson: sitting the content is the completion.
      logSession('lesson');
      clearResume('lesson');
    }
    router.back();
  };

  const restartLesson = () => {
    sound.play('flip');
    setQuizDone(false);
    setGradedIds(new Set());
    // completedRef stays true on purpose: the session was already logged this
    // visit, and a re-read is study, not a second completion.
    setRunNonce((n) => n + 1);
  };

  const goNextLesson = () => {
    sound.play('tap');
    // Replace, not push: finishing lesson after lesson must not stack a back
    // trail of completed lessons. The gate effect re-runs for the new id, so a
    // locked band still lands on the paywall.
    router.replace({ pathname: '/lesson', params: { key: nextL!.id } });
  };

  // Coming back to a lesson in progress. Shown once, before the pager, so the
  // learner re-enters knowing where they are rather than landing mid-rule.
  if (preface && resume) {
    const act = resume.warmBack?.act ?? resume.act;
    return (
      <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.back()} onSettings={() => router.push('/settings')} title={L.tag} />
        {preface === 'warmBack' && resume.warmBack ? (
          <WarmBackCard
            act={resume.warmBack.act}
            questions={warmBackQuestions(L, resume.warmBack.act, resume.warmBack.questions)}
            onDone={() => setPreface(resume.showRecap ? 'recap' : null)}
          />
        ) : (
          <ResumeRecapCard
            act={act ?? null}
            sectionsSoFar={actSectionsSoFar(L, (L.sections[L.sections.indexOf(contentSectionsOf(L)[deepLinkIx ?? 0])] as { id?: string })?.id ?? '')}
            onContinue={() => setPreface(null)}
          />
        )}
      </View>
    );
  }

  // The reference sheets, over the lesson. Rendered as a full replacement
  // rather than a modal: a sheet is a document to scan, and the learner
  // arrives with a specific question they want room to answer.
  if (sheetId !== null && L.sheets?.length) {
    return (
      <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
        <SheetSurface
          sheets={L.sheets}
          initialSheetId={sheetId || undefined}
          onClose={() => setSheetId(null)}
          onPlay={play}
          playingId={playingId}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader
          onClose={() => router.back()}
          onSettings={() => router.push('/settings')}
          title={L.tag}
          extra={
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              {/* The persistent reference link: one tap to the sheets from
                  any screen of the lesson, which is what stops material
                  pulled out of the flow from being lost. */}
              <SheetLink count={L.sheets?.length ?? 0} onPress={() => setSheetId('')} />
              <Press
                cue={null}
                onPress={() => setShowKeyOverride(true)}
                accessibilityRole="button"
                accessibilityLabel={T.lkHelp}
                hitSlop={8}
                style={{ width: 32, height: 32, borderRadius: 16, borderWidth: 1, borderColor: t.line(14), alignItems: 'center', justifyContent: 'center' }}
              >
                <TX font="bold" role="label" color={t.txSecondary}>?</TX>
              </Press>
            </View>
          }
        />
      </View>

      <LessonPager
        key={`${L.id}-${runNonce}`}
        title={L.title}
        intro={L.intro}
        sections={contentSections}
        // The label counts every mission, including the quiz, so the pager and
        // the missions hub agree on the denominator (see LessonPager's prop).
        missionTotal={L.sections.length}
        onPlay={play}
        playingId={playingId}
        onGrade={gradeItem}
        graded={gradedIds}
        quiz={quiz}
        onQuizAnswer={onQuizAnswer}
        onQuizComplete={onQuizComplete}
        quizDone={quizDone}
        onFinish={finish}
        finishLabel={T.lessonDone}
        onRestartLesson={restartLesson}
        onNextLesson={nextL ? goNextLesson : undefined}
        nextTitle={nextL?.title}
        initialIndex={deepLinkIx}
        initialQuiz={wantsQuiz}
        highlightIndex={deepLinkIx}
        onIndexChange={onLessonIndexChange}
        bottomInset={insets.bottom}
        terms={L.terms}
        onOpenSheet={L.sheets?.length ? (id) => setSheetId(id || L.sheets![0].id) : undefined}
        quizCfg={quizCfg}
        drills={L.drills}
        onJumpToRef={jumpToRef}
        acts={L.acts}
        checkpoints={checkpoints}
        onCheckpointReached={releaseTranche}
        // Stopping at a checkpoint leaves the lesson WITHOUT clearing the
        // resume slot, so the home hero still offers to come back to it. That
        // is the difference between stopping and finishing.
        onStopHere={() => {
          sound.play('tap');
          router.back();
        }}
      />
    </View>
  );
}
