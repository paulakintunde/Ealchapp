import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BackHandler, View } from 'react-native';
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
import { parseCardParam } from '@/content/subMission.logic';
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
  const params = useLocalSearchParams<{ key?: string; at?: string; card?: string }>();

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
  // Which mission the currently-open sheet was opened FROM, as an index over
  // contentSections. Needed because the sheet is an early return: while it is
  // open the pager is unmounted, so "go forward one" cannot be a call into it
  // and has to be expressed as the position the pager should remount at.
  const sheetFromIx = useRef<number | null>(null);

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

  // The card INSIDE the anchored mission, when a resume or deep link named
  // one. Its own param rather than a third segment on `at`: the anchor's `.k`
  // slot already means "item index within a practice section", and
  // resolveAnchor rejects a non-zero k for every other section type.
  const cardParam = useMemo(() => parseCardParam(params.card), [params.card]);

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

  // Everything from here to the first early return is hook territory, and it
  // MUST stay above those returns. These four used to sit below them, which
  // made the hook count vary with `!L` / `bandLocked` / `showKey` — and
  // `showKeyOverride` flips at runtime from the header's "?", so reopening the
  // tour mid-lesson changed the count between two renders of a mounted
  // component and threw "rendered fewer hooks than expected". Anything added
  // below must be a plain const or a function, never a hook.
  //
  // Both of these come from lessonPager.logic rather than being re-filtered
  // here. The inline copies said exactly what the helpers say, but EVERY index
  // mapping below (progress writes, deep-link anchors, resume) round-trips
  // between the full section list and this filtered one and is only correct
  // while the two agree — and this same file already imported the helper as
  // `contentSectionsOf` and used it a few lines down, so the rule had two live
  // definitions in one screen. Changing the filter in one place and not the
  // other would silently mark the wrong mission complete.
  //
  // Null-lesson safe because the early return below still catches `!L` before
  // any of these values are read for render.
  const contentSections = L ? contentSectionsOf(L) : [];
  const quizSection = L ? quizSectionOf(L) : null;

  // quizQuestions() flattens both quiz shapes (flat `questions`, or v2 `rounds`
  // of eight) into one list. The deck below renders CLOSED questions only —
  // those with options and a numeric answer — so the open v2 formats (typeIn,
  // speak, errorSpot, tapSilent) are filtered out rather than rendered as
  // broken option lists.
  // The round-based quiz, when the lesson declares rounds. This is what makes
  // every question FORMAT reachable: the flat deck below renders mcq only, so
  // a v2 lesson's tapSilent / errorSpot / typeIn / speak questions were being
  // filtered out and silently never asked. Null for a pre-v2 lesson, which
  // keeps the flat deck exactly as it was.
  const quizCfg = useMemo(() => {
    if (!L || !quizSection?.rounds?.length) return null;
    return buildQuizConfig(quizSection.rounds, {
      errorTriggers: L.errorTriggers,
      drills: L.drills,
      roundFailThreshold: quizSection.roundFailThreshold,
      passMark: quizSection.passMark,
    });
  }, [L?.id]); // eslint-disable-line react-hooks/exhaustive-deps

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
    if (!L?.acts?.length || deepLinkIx == null) return null;
    const fullIx = L.sections.indexOf(contentSectionsOf(L)[deepLinkIx]);
    if (fullIx < 0) return null;
    return resumePlan(L, fullIx, awayMs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [L?.id, deepLinkIx, awayMs]);

  // The card to open the landing mission on — but ONLY when the learner is
  // actually being returned to the mission they left.
  //
  // resumePlan deliberately lands a returning learner TWO SECTIONS BACK ("
  // dropping someone exactly where they left off mid-explanation is
  // disorienting", acts.logic.ts). When it has backed up, the card is from a
  // different mission entirely and applying it would open some unrelated deck
  // at card 3. Even on the same mission the two rules disagree: being sent
  // back a step and then dropped mid-drill is the exact disorientation the
  // lookback exists to prevent.
  //
  // So the card survives only on an EXACT resume — a lesson with no acts, or
  // the first two missions, where resumePlan suppresses the lookback itself.
  // Everywhere else the lookback wins and the deck opens at card 1.
  // Compared in FULL-list terms: resumePlan works over lesson.sections, while
  // deepLinkIx indexes contentSections (the quiz removed). Comparing the two
  // raw numbers would be a silent off-by-one for every mission past the quiz.
  const backedUp = useMemo(() => {
    if (!resume || deepLinkIx == null || !L) return false;
    const landedFullIx = L.sections.indexOf(contentSectionsOf(L)[deepLinkIx]);
    return landedFullIx >= 0 && resume.sectionIx !== landedFullIx;
  }, [resume, deepLinkIx, L?.id]); // eslint-disable-line react-hooks/exhaustive-deps
  const deepLinkSub = backedUp ? null : cardParam;

  // The warm-back and recap are shown once per visit, before the lesson.
  const [preface, setPreface] = useState<'warmBack' | 'recap' | null>(null);
  useEffect(() => {
    if (!resume) return setPreface(null);
    setPreface(resume.warmBack ? 'warmBack' : resume.showRecap ? 'recap' : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [L?.id]);

  // Finishing an act releases that act's cards into review. This is the
  // architecture's "cards arrive as they are taught" rule: an hour-long lesson
  // must not dump sixty new items into the SRS the moment it ends.
  //
  // Idempotent by act: a learner who swipes back and forth across a checkpoint
  // releases its tranche once, not once per crossing. releaseTranche itself is
  // a plain function and stays down with the other handlers; only the ref and
  // its reset are hooks, so only they belong up here.
  const releasedActs = useRef<Set<number>>(new Set());
  useEffect(() => {
    releasedActs.current = new Set();
  }, [L?.id]);

  // Every authored audio spec in this lesson, keyed by the French it voices.
  // Built once per lesson: the walk is over a whole lesson body, and `play`
  // fires on every tap.
  const audioIx = useMemo(() => (L ? audioIndex(L) : new Map()), [L]);

  // Android system back. None of the surfaces below are routes — the sheet,
  // the preface and the key tour are all local state that REPLACES the lesson
  // body in place, so expo-router's stack only ever holds `/lesson`. Without
  // this, the hardware back button popped the whole screen: tapping "See all
  // 16 endings" and pressing back ejected the learner from the lesson instead
  // of returning them to the grid they came from.
  //
  // Ordered innermost-first so each press peels one layer, matching what the
  // on-screen back arrow does. Returning true swallows the event; falling
  // through to false lets the router pop the lesson, which is correct once
  // nothing is layered over it.
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (sheetId !== null) {
        // Mirrors SheetSurface's own asymmetry: a sheet opened FROM the grid
        // (a real id) closes straight back to the lesson, while one opened
        // from the header link ('') steps back through the index first. That
        // intermediate step lives in SheetSurface's local state, so the most
        // this handler can do is close — which is what its Back arrow does at
        // the index level anyway.
        setSheetId(null);
        return true;
      }
      if (preface) {
        setPreface(null);
        return true;
      }
      // Only the manual reopen is dismissable. The first-run tour is a gate:
      // backing out of it would drop the learner into a lesson whose controls
      // they have not been shown yet, so it falls through to leaving instead.
      if (showKeyOverride) {
        setShowKeyOverride(false);
        return true;
      }
      return false;
    });
    return () => sub.remove();
  }, [sheetId, preface, showKeyOverride]);

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

  // Leaving a sheet forwards: land on the mission AFTER the one that opened it.
  //
  // The sheet is reached from a mission that previews part of its content (the
  // silent-letter grid shows eight of sixteen rows), so a learner who has read
  // the full table has finished that material. Returning them to the preview
  // was the only exit the sheet had, which is why this exists.
  //
  // Navigation is by anchor, not by a call into the pager: this screen renders
  // the sheet INSTEAD of the pager, so while the sheet is up there is no pager
  // to command. Setting `at` means the pager reads it as `initialIndex` when it
  // remounts, which is the same route jumpToRef and every review deep-link
  // already take.
  const continueFromSheet = () => {
    const from = sheetFromIx.current;
    sheetFromIx.current = null;
    setSheetId(null);
    if (from == null) return;
    // Clamp: a sheet opened from the last teaching mission has nothing after
    // it, so the learner stays where they were rather than being thrown at a
    // page that does not exist.
    const nextIx = Math.min(from + 1, contentSections.length - 1);
    const target = contentSections[nextIx];
    if (!target) return;
    sound.play('tap');
    router.setParams({ at: `${L.id}#s${L.sections.indexOf(target)}.0` });
  };

  // A pager section index, as the mission NUMBER the rest of the product uses.
  //
  // The pager is handed `contentSections` (the quiz removed, because it renders
  // as its own page), but every other surface — the missions hub, progress
  // writes, resume anchors — counts in FULL-list positions where the quiz is a
  // mission like any other. The two agree only up to the quiz: sons.06 has its
  // quiz at section 20 of 21, so its roundup is mission 21 on the hub and was
  // labelled "MISSION 20 / 21" in the pager.
  //
  // Resolved by object identity against the full list, which is the same
  // translation onLessonIndexChange and deepLinkIx already do — never by
  // arithmetic on the two lengths, so a lesson with no quiz, or one whose quiz
  // is last, needs no special case.
  const missionNumberOf = (sectionIx: number) => {
    const sec = contentSections[sectionIx];
    const fullIx = sec ? L.sections.indexOf(sec) : -1;
    return (fullIx >= 0 ? fullIx : sectionIx) + 1;
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
    // Moving to a different mission drops the old mission's card, or the next
    // resume would carry a position from the section before it.
    lastSub.current = null;
    if (fullIx == null || fullIx < 0) return;
    writeResume(fullIx, null);
  };

  // Where inside the current mission the learner is, 1-based, or null on a
  // mission with no sub-position. Held in a ref rather than state: it changes
  // on every swipe of a deck and nothing on this screen RENDERS from it — it
  // only needs to be readable when a resume is written.
  const lastSub = useRef<number | null>(null);

  const writeResume = (fullIx: number, sub: number | null) => {
    const anchor = `${L.id}#s${fullIx}.0`;
    const card = sub != null && sub > 1 ? `&card=${sub}` : '';
    setResume('lesson', {
      route: `/lesson?key=${raw ?? id}&at=${encodeURIComponent(anchor)}${card}`,
      title: L.title,
    });
  };

  // A swipe inside a mission moves the resume position without changing the
  // mission, so this is a second, independent write — see LessonPager's
  // onSubIndexChange. Card 1 writes no param at all, which is what clears a
  // stale card when the learner swipes back to the start of a deck.
  const onLessonSubIndexChange = (sub: number | null) => {
    lastSub.current = sub;
    const fullIx = lastFullIx.current;
    if (fullIx == null || fullIx < 0) return;
    writeResume(fullIx, sub);
  };

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
          // Close, and land on the NEXT mission rather than the one the sheet
          // was opened from. Expressed as a deep-link anchor, exactly as
          // jumpToRef does: the pager remounts when this branch closes and
          // reads `initialIndex` on its first layout, so setting the anchor IS
          // the navigation. (Anything imperative would be called while the
          // pager is unmounted and silently do nothing.)
          onContinue={continueFromSheet}
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
        // ...and on the NUMERATOR. The pager's own list has the quiz removed,
        // so a section past the quiz's slot is off by one there; this screen is
        // the only place that can see both lists at once.
        missionNumberOf={missionNumberOf}
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
        onSubIndexChange={onLessonSubIndexChange}
        initialSub={deepLinkSub}
        bottomInset={insets.bottom}
        terms={L.terms}
        // Remember which mission the sheet was opened from, so closing it can
        // offer "continue" into the one after — see continueFromSheet. The
        // pager reports its own current section through onIndexChange, which
        // lastFullIx tracks in FULL-list terms; this needs the contentSections
        // index the pager itself uses, so it is translated back here.
        onOpenSheet={
          L.sheets?.length
            ? (id) => {
                const fullIx = lastFullIx.current;
                const ix = fullIx == null ? -1 : contentSections.indexOf(L.sections[fullIx]);
                sheetFromIx.current = ix >= 0 ? ix : null;
                setSheetId(id || L.sheets![0].id);
              }
            : undefined
        }
        quizCfg={quizCfg}
        drills={L.drills}
        onJumpToRef={jumpToRef}
        acts={L.acts}
        onCheckpointReached={releaseTranche}
      />
    </View>
  );
}
