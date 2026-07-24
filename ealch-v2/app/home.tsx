import { useCallback, useMemo, type ReactNode } from 'react';
import { LayoutAnimation, Platform, ScrollView, UIManager, View, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';
import { TX } from '@/components/Type';
import { Press, Badge } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { TabBar } from '@/components/TabBar';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { greetSlot } from '@/i18n/strings';
import { useStore } from '@/store/useStore';
import { useProgress } from '@/store/useProgress';
import { useIsPremium } from '@/store/useEntitlement';
import { composeSession, goalTarget, greetDue, greetState, introEligible, localDay, minutesToday, resumeIsFresh, streak, topWeaknesses } from '@/store/progress.logic';
import { selectItems } from '@/services/content.logic';
import { useUI } from '@/store/useUI';
import { playlists } from '@/content/playlists';
import { useContent } from '@/services/content';
import { wordOfDay, dayOfYear } from '@/content/wordOfDay';
import { pickGreeting } from '@/content/greetings';
import { openWeakRows } from '@/content/weakness';
import { tts } from '@/services';
import type { ExamFormat } from '@/content/schema';

// LayoutAnimation must be opted into on old-architecture Android; on the new
// architecture the setter is absent and the fold animates without it.
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const RING_R = 14;
const RING_C = 2 * Math.PI * RING_R; // 87.96 — the real circumference, not a hand-tuned 88

// The resolved Canada-first set. `T.examMeta` is index-aligned to this array:
// reorder one and you must reorder the other, or TCF inherits DELF's caption.
// The third chip was a generic "TCF"; the exam Ealch targets is TCF Canada.
const EXAMS = ['TEF Canada', 'TCF Canada', 'DELF B2'];
// Chip display order does not have to match EXAM_FORMATS' declared order
// (schema.ts) — this is the one place the two are joined, index-aligned to
// EXAMS/T.examMeta above, not to the enum.
const EXAM_CHIP_FORMATS: ExamFormat[] = ['tef_canada', 'tcf_canada', 'delf_b2'];

/** `pct` is progress toward the daily goal, 0–1. It used to be a fixed
 *  strokeDashoffset of 18, tuned by eye to look like the hardcoded "12/15". */
function Ring({ color, track, pct }: { color: string; track: string; pct: number }) {
  const filled = Math.max(0, Math.min(pct, 1));
  return (
    <Svg width={36} height={36} viewBox="0 0 36 36">
      <Circle cx={18} cy={18} r={RING_R} fill="none" stroke={track} strokeWidth={4} />
      <Circle
        cx={18}
        cy={18}
        r={RING_R}
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray={RING_C}
        strokeDashoffset={RING_C * (1 - filled)}
        transform="rotate(-90 18 18)"
      />
    </Svg>
  );
}

function GlowTile({ base, glow, children, onPress, style }: { base: string; glow: string; children: ReactNode; onPress: () => void; style?: object }) {
  const t = useTheme();
  return (
    <Press onPress={onPress} scale={0.98} style={[{ borderRadius: 18, borderWidth: 1, borderColor: t.line(7), overflow: 'hidden', backgroundColor: t.isDark ? base : t.card, ...t.cardShadow }, style]}>
      <LinearGradient colors={[glow, 'transparent']} start={{ x: 0.85, y: 0 }} end={{ x: 0.2, y: 0.7 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
      {children}
    </Press>
  );
}

export default function Home() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  // The Today strip crams three columns (goal / streak / review) into one row.
  // At full size that's comfortable on a typical phone; on a genuinely narrow
  // one (iPhone SE-class, ~375pt, or the sub-360pt Android devices common in
  // the PPP-Africa market this app targets) the same fixed sizes crowd or
  // wrap. 360 is the threshold: the smallest common Android width sits right
  // at it, so anything narrower gets the compact numbers/padding below.
  const { width: winWidth } = useWindowDimensions();
  const narrowStrip = winWidth < 360;
  const { userName, lang, setAppLang, freeze, pace, level, sound, browseOpen, setField } = useStore();
  const isPremium = useIsPremium();
  const sessions = useProgress((s) => s.sessions);
  const attempts = useProgress((s) => s.attempts);
  const errors = useProgress((s) => s.errors);
  const resume = useProgress((s) => s.resume);
  // The Den tile's unit count, from the corpus the Den itself renders — a unit
  // is Den-visible iff it has a track (b1+ units belong to no column). Was
  // totalUnits() over prototype arrays in curriculum.ts (CF-17): that count was
  // frozen at build time and could disagree with what the Den actually shows
  // after an OTA. A zustand selector returning a primitive re-renders only when
  // the number changes.
  const denUnits = useContent((s) => s.corpus.units.filter((u) => u.track !== undefined).length);
  const corpus = useContent((s) => s.corpus);
  const openDict = useUI((s) => s.openDict);
  const openSheet = useUI((s) => s.openSheet);
  const openVocabSheet = useUI((s) => s.openVocabSheet);
  // The fold's open/closed state persists (survives remounts) and its reveal
  // animates rather than popping in.
  const toggleBrowse = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setField('browseOpen', !browseOpen);
  };

  // Every number below is a view over the session log. Nothing is seeded, so a
  // fresh install reads 0/10 min and "Day 1 starts today" — which is the truth.
  //
  // The folds are memoized because they are not cheap (`streak` walks up to 3660
  // days; `reviewDueCount` folds up to MAX_ATTEMPTS = 20k) and home re-renders on
  // every language and browse toggle, neither of which touches the logs. `today`
  // is a stable 'YYYY-MM-DD' that turns over at the local midnight the logs are
  // bucketed by, so it is a sound key.
  const today = localDay();
  const goal = goalTarget(pace);
  const done = useMemo(() => minutesToday(sessions, today), [sessions, today]);
  const run = useMemo(() => streak(sessions, today, freeze), [sessions, today, freeze]);

  // Camille says hello when home comes into focus, tuned to how long the
  // learner has been away: 'new' the first time, 'recent' after a short gap,
  // 'away' after a while (greetState over the session log). Preloaded so it is
  // Camille's voice from the first word (tts.prime warms the device voice list
  // before speaking). The hello repeats at most once every 2 hours (greetDue
  // over the persisted lastGreetAt), however many times home is opened or the
  // app restarts inside the window — which is why this is a focus effect, not
  // a mount effect: home stays mounted under pushed drills, and a return after
  // the window must greet again. State is read via getState at fire time so
  // the callback needs no log deps and never re-fires on unrelated re-renders.
  useFocusEffect(
    useCallback(() => {
      if (!useStore.getState().sound) return;
      if (!greetDue(useStore.getState().lastGreetAt, Date.now())) return;
      const line = pickGreeting(greetState(useProgress.getState().sessions, localDay()), dayOfYear());
      if (!line) return;
      let cancelled = false;
      const timer = setTimeout(() => {
        if (cancelled) return;
        void tts.prime().then(() => {
          if (cancelled) return;
          // Stamped when the hello actually plays, not on focus, so a cancelled
          // greeting (left home during the delay) stays due for the next visit.
          useStore.getState().setField('lastGreetAt', Date.now());
          void tts.speak(line);
        });
      }, 650);
      return () => {
        cancelled = true;
        clearTimeout(timer);
        tts.stop();
      };
    }, [])
  );

  // "2 freeze" is not English. The grant is 1 today, but it will not always be.
  const freezeLine = (run.freezesLeft === 1 ? T.freezeShort : T.freezeShortPl).replace(
    '{n}',
    String(run.freezesLeft)
  );

  // The composed daily session (composeSession, the Phase 5 engine wired in at
  // last): capped reviews first, then new items to introduce in whatever budget
  // the reviews left. `due` is the same capped count reviewDueCount gave; `fresh`
  // is what makes day one work — a learner with nothing due does not meet an
  // empty home, they meet new words. Candidates are the flashcard-eligible
  // corpus at or below the learner's level; a full review day yields no fresh.
  const session = useMemo(
    () => composeSession(attempts, introEligible(selectItems(corpus, 'flashcard'), level), today),
    [attempts, corpus, level, today]
  );
  const due = session.due.length;
  const freshN = session.fresh.length;
  const caughtUp = due === 0;
  const revNum = caughtUp ? '✓' : String(due);
  const revLabel = caughtUp ? T.caughtUpShort : T.reviewShort;
  const revSub = caughtUp ? T.tomorrow : T.dueToday;

  // The hero is a view over real state, in three honest tiers. A resume only
  // survives while it is fresh (see resumeIsFresh); once it lapses, or when
  // nothing was ever started, the card recommends what to do next instead of
  // claiming a scenario the user never opened. No time-remaining pill: nothing
  // persists a playback position yet, so any "4:12 left" would be invented.
  const hero = resumeIsFresh(resume, today) && resume
    ? { eyebrow: T.resumeTag, title: resume.title, sub: T.resumeSub, cta: T.resume, route: resume.route }
    : due > 0
      ? {
          eyebrow: T.beginTag,
          title: T.reviewHeroTitle,
          // The whole session in one line: reviews first, and if the budget left
          // room for new words, say so — "5 due today · 3 new".
          sub: `${due} ${T.dueToday}` + (freshN > 0 ? ' · ' + T.freshShort.replace('{n}', String(freshN)) : ''),
          cta: T.begin,
          route: '/smartreview',
        }
      : freshN > 0
        ? { eyebrow: T.beginTag, title: T.freshHeroTitle, sub: T.freshHeroSub.replace('{n}', String(freshN)), cta: T.begin, route: '/flashcards?deck=new' }
        : { eyebrow: T.beginTag, title: T.listenHeroTitle, sub: T.listenHeroSub, cta: T.begin, route: '/player' };

  const skillGold = t.tag('gold');
  const skillPurple = t.tag('grammar');
  const skillBlue = t.tag('info');

  // The weak-spots rows are now real: the top skills the learner has actually
  // missed this week, from the error log, most-missed first. Nothing is seeded,
  // so a fresh install shows an honest empty state, never three invented flaws.
  const weaknesses = useMemo(() => topWeaknesses(errors, today, 7), [errors, today]);
  // Deterministic daily rotation, per level (Phase 6b): the same real word for
  // every learner AT THIS LEVEL on a given date, no backend. Was « la flânerie »
  // hardcoded, then one global literary pool — noise to a beginner. Keyed on
  // `today` and `level`: the word turns over at the local midnight localDay()
  // names, and again when placement moves the learner's level.
  const wod = useMemo(() => wordOfDay(level), [today, level]);
  const weakRows = useMemo(() => openWeakRows(router, openSheet), [router, openSheet]);

  // The six practice decks, one compact hub card each, in the old layout's
  // top-to-bottom order (tiles, then the drill rows the grid replaces). `base`
  // is the dark-mode tile ground; light mode ignores it (GlowTile falls back
  // to t.card) so only the glow and disc carry each deck's colour there.
  const hubDecks = [
    // '/flashhub', not '/flashcards': the card opens the themed category hub
    // (12 domains → type picker → deck); the raw whole-corpus deck remains
    // reachable via smart review and the `?deck=new` hero deep link.
    { key: 'flash', route: '/flashhub', base: '#0F1413', glow: t.accA(30), disc: t.accA(14), icon: <Icon name="card" size={17} color={t.acc} strokeWidth={1.7} />, badge: { label: T.skillReadVocab, c: skillGold.c, bg: skillGold.bg }, title: T.cardsT, sub: T.cardsS.replace('{n}', String(due)) },
    { key: 'voice', route: '/voicehub', base: '#0E1116', glow: 'rgba(96,126,160,0.30)', disc: 'rgba(96,126,160,0.16)', icon: <Icon name="speaker" size={17} color={skillBlue.c} strokeWidth={1.7} />, badge: { label: T.skillSpeak, c: t.acc, bg: t.accA(16) }, title: T.voiceT, sub: T.voiceS },
    { key: 'sentences', route: '/sentencehub', base: '#0D0B12', glow: 'rgba(139,116,190,0.28)', disc: 'rgba(139,116,190,0.16)', icon: <Icon name="pencil" size={16} color={skillPurple.c} strokeWidth={1.7} />, badge: { label: T.skillWrite, c: skillPurple.c, bg: skillPurple.bg }, title: T.sbT, sub: T.sbS },
    { key: 'roleplay', route: '/roleplayhub', base: '#14100B', glow: t.accA(24), disc: t.accA(14), icon: <Icon name="mic" size={17} color={t.acc} strokeWidth={1.7} />, badge: { label: T.skillSpeak, c: t.acc, bg: t.accA(16) }, title: T.rpT, sub: T.rpS },
    { key: 'dictee', route: '/dictationhub', base: '#16110B', glow: 'rgba(214,160,96,0.22)', disc: 'rgba(214,160,96,0.14)', icon: <TX font="serifI" role="titleSm" size={18} color={skillGold.c}>é</TX>, badge: { label: T.skillListen, c: skillBlue.c, bg: skillBlue.bg }, title: T.dicteeT, sub: T.dictRowSub },
    { key: 'themes', route: '/themes', base: '#12100C', glow: t.accA(20), disc: t.accA(12), icon: <Icon name="book" size={16} color={t.acc} strokeWidth={1.7} />, badge: { label: T.skillCourse, c: skillGold.c, bg: skillGold.bg }, title: T.byThemeT, sub: T.byThemeS },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <ScrollView contentContainerStyle={{ paddingTop: insets.top + 20, paddingHorizontal: 20, paddingBottom: 130 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 22, paddingHorizontal: 4 }}>
          <View>
            <TX font="semi" role="meta" ls={3} color={t.txSubtle}>
              {T.greets[greetSlot()]}
            </TX>
            <TX font="serif" size={32} role="display">
              {userName || T.welcomeWord}
            </TX>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View style={{ flexDirection: 'row', minHeight: 32, paddingVertical: 4, borderRadius: 16, borderWidth: 1, borderColor: t.line(14), overflow: 'hidden' }}>
              {(['fr', 'en'] as const).map((l) => {
                const on = lang === l;
                return (
                  // setAppLang, not setLang: setLang moves `lang` alone and leaves
                  // Settings' "App language" row showing the stale onboarding pick.
                  <Press
                    key={l}
                    onPress={() => setAppLang(l)}
                    accessibilityRole="button"
                    accessibilityState={{ selected: on }}
                    accessibilityLabel={T.appLangNames[l]}
                    style={{ paddingHorizontal: 13, justifyContent: 'center', backgroundColor: on ? t.acc : 'transparent' }}
                  >
                    <TX font="semi" role="meta" ls={1} color={on ? t.accInk : t.txMuted}>
                      {l.toUpperCase()}
                    </TX>
                  </Press>
                );
              })}
            </View>
            <Press onPress={() => router.push('/profile')} accessibilityRole="button" accessibilityLabel={T.tabProfile} style={{ width: 40, height: 40, borderRadius: 20, borderWidth: 1, borderColor: t.accA(55), backgroundColor: t.card2, alignItems: 'center', justifyContent: 'center' }}>
              {userName ? (
                <TX font="serif" role="title">
                  {userName.charAt(0).toUpperCase()}
                </TX>
              ) : (
                <Icon name="user" size={18} color={t.txNonText} strokeWidth={1.7} />
              )}
            </Press>
          </View>
        </View>

        {/* Today strip — goal / streak / review. Numbers and padding compact on
            narrow screens (narrowStrip) so three columns stay comfortable
            instead of crowding or wrapping; the layout shape is unchanged. */}
        <View style={{ minHeight: 66, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: t.accA(28), backgroundColor: t.card, ...t.cardShadow, flexDirection: 'row', marginBottom: 14, overflow: 'hidden' }}>
          <Press cue={null} onPress={() => router.push('/profile')} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: narrowStrip ? 7 : 10, paddingHorizontal: narrowStrip ? 10 : 14 }}>
            <Ring color={t.acc} track={t.line(10)} pct={done / goal} />
            <View style={{ flex: 1, minWidth: 0 }}>
              <TX font="bold" role="bodySm" size={narrowStrip ? 13 : undefined} numberOfLines={1}>
                {done}
                <TX role="bodySm" size={narrowStrip ? 13 : undefined} color={t.txSubtle} font="semi">/{goal} min</TX>
              </TX>
              <TX font="semi" role="eyebrow" size={narrowStrip ? 10 : undefined} color={t.txMuted} numberOfLines={1}>
                {T.goalWord}
              </TX>
            </View>
          </Press>
          <View style={{ width: 1, backgroundColor: t.line(8), marginVertical: 13 }} />
          <Press cue={null} onPress={() => router.push('/profile')} style={{ flex: 0.9, flexDirection: 'row', alignItems: 'center', gap: narrowStrip ? 6 : 9, paddingHorizontal: narrowStrip ? 10 : 14 }}>
            {run.days > 0 ? (
              <>
                <TX font="serif" size={narrowStrip ? 20 : 25} role="display" color={t.accTx}>
                  {run.days}
                </TX>
                <View style={{ flex: 1, minWidth: 0 }}>
                  <TX font="semi" role="meta" size={narrowStrip ? 11 : undefined} numberOfLines={1}>
                    {T.daysWord} <TX role="meta" color={t.accTx}>✦</TX>
                  </TX>
                  <TX font="semi" role="eyebrow" size={narrowStrip ? 10 : undefined} color={t.txMuted} numberOfLines={1}>
                    {freezeLine}
                  </TX>
                </View>
              </>
            ) : (
              // Day zero is not a failure and does not get shamed with a 0.
              <View style={{ flex: 1, minWidth: 0 }}>
                <TX font="semi" role="meta" size={narrowStrip ? 11 : undefined} numberOfLines={1}>
                  {T.dayOne}
                </TX>
                <TX font="semi" role="eyebrow" size={narrowStrip ? 10 : undefined} color={t.txMuted} numberOfLines={1}>
                  {freezeLine}
                </TX>
              </View>
            )}
          </Press>
          <View style={{ width: 1, backgroundColor: t.line(8), marginVertical: 13 }} />
          <Press cue={null} onPress={() => router.push('/smartreview')} style={{ flex: 1.1, flexDirection: 'row', alignItems: 'center', gap: narrowStrip ? 6 : 9, paddingHorizontal: narrowStrip ? 10 : 14, backgroundColor: t.accA(8) }}>
            <TX font="serif" size={narrowStrip ? 20 : 25} role="display" color={t.accTx}>
              {revNum}
            </TX>
            <View style={{ flex: 1, minWidth: 0 }}>
              <TX font="semi" role="meta" size={narrowStrip ? 11 : undefined} numberOfLines={1}>
                {revLabel}
              </TX>
              <TX font="bold" role="eyebrow" size={narrowStrip ? 10 : undefined} color={t.accTx} numberOfLines={1}>
                {revSub}
              </TX>
            </View>
          </Press>
        </View>

        {/* Hero */}
        <Press onPress={() => router.push(hero.route as never)} scale={0.99} style={{ minHeight: 400, borderRadius: 26, overflow: 'hidden', borderWidth: 1, borderColor: t.line(7), backgroundColor: t.isDark ? '#1B1712' : t.card, ...t.cardShadow }}>
          <LinearGradient colors={[t.isDark ? 'rgba(214,160,96,0.24)' : 'rgba(214,160,96,0.35)', 'transparent']} start={{ x: 0.72, y: 0 }} end={{ x: 0.3, y: 0.55 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
          <LinearGradient colors={['transparent', t.accA(22)]} start={{ x: 0.15, y: 0.4 }} end={{ x: 0.15, y: 1 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
          <View style={{ position: 'absolute', top: 20, left: 22, right: 62, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: t.acc }} />
            <TX font="semi" role="meta" ls={2.6} color={t.txSecondary} numberOfLines={1} style={{ flexShrink: 1 }}>
              {hero.eyebrow}
            </TX>
          </View>
          <View style={{ position: 'absolute', left: 22, right: 22, bottom: 22 }}>
            <TX font="serifI" size={46} role="display" numberOfLines={2} style={{ marginBottom: 8 }}>
              {hero.title}
            </TX>
            <TX role="body" color={t.txSecondary} numberOfLines={2} style={{ marginBottom: 18 }}>
              {hero.sub}
            </TX>
            {/* No "4:12 left" pill: nothing persists a playback position yet, so any
                duration here is invented. It returns when the player reports a real one. */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <View style={{ height: 46, paddingHorizontal: 22, borderRadius: 23, backgroundColor: t.acc, flexDirection: 'row', alignItems: 'center', gap: 9 }}>
                <Icon name="play" size={13} color={t.accInk} />
                <TX font="semi" role="body" color={t.accInk}>
                  {hero.cta}
                </TX>
              </View>
              {/* The vocab primer — a labeled pill, not a ⋯ overflow kebab. A
                  three-dot icon reads as share/hide/report; this opens the
                  pre-lesson vocabulary sheet, so it says so.
                  Gated on freshN, not on which hero branch is showing: a pure
                  review day (freshN === 0) has nothing new to prime, and the
                  listen fallback is only reached when freshN is already 0, so
                  this condition covers both without special-casing hero.eyebrow. */}
              {freshN > 0 ? (
                <Press
                  onPress={() => openVocabSheet(session.fresh.slice(0, 4).map((i) => ({ fr: i.fr, en: i.en })))}
                  cue="tap"
                  style={{ height: 46, paddingHorizontal: 18, borderRadius: 23, borderWidth: 1, borderColor: t.line(20), flexDirection: 'row', alignItems: 'center', gap: 8 }}
                >
                  <Icon name="book" size={15} color={t.txSecondary} strokeWidth={1.7} />
                  <TX font="semi" role="body" color={t.txSecondary}>
                    {T.vocabPrime}
                  </TX>
                </Press>
              ) : null}
            </View>
          </View>
        </Press>

        {/* Foundations — the Den keeps its own full-width tile: it is a guided
            course, not a deck, so it does not belong inside the hub grid. */}
        <SectionHead title={T.found} right="SONS · A1 · A2" />
        <GlowTile base="#1A140E" glow="rgba(214,160,96,0.28)" onPress={() => router.push('/den')} style={{ width: '100%', minHeight: 118, padding: 16 }}>
          <TileHead badge={<Badge label={T.skillCourse} color={skillGold.c} bg={skillGold.bg} />} right={`${denUnits} ${T.unitsWord}`} />
          <TX font="serifI" size={23} role="display" style={{ marginTop: 'auto' }}>
            {T.denT}
          </TX>
          <TX role="meta" color={t.txMuted} style={{ marginTop: 5 }}>
            {T.denS}
          </TX>
        </GlowTile>

        {/* Practice hub — the six decks as compact cards, two per row. Each
            card is only a themed door; the swipeable deck itself lives on the
            screen it routes to, unchanged. */}
        <SectionHead title={T.hubT} right={T.hubMeta} />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
          {hubDecks.map((d) => (
            <GlowTile key={d.key} base={d.base} glow={d.glow} onPress={() => router.push(d.route as never)} style={{ width: '47.5%', minHeight: 122, padding: 14 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: d.disc, alignItems: 'center', justifyContent: 'center' }}>
                  {d.icon}
                </View>
                <Badge label={d.badge.label} color={d.badge.c} bg={d.badge.bg} />
              </View>
              <TX font="serifI" size={20} role="titleLg" numberOfLines={1} style={{ marginTop: 'auto' }}>
                {d.title}
              </TX>
              <TX role="meta" color={t.txMuted} numberOfLines={1} style={{ marginTop: 4 }}>
                {d.sub}
              </TX>
            </GlowTile>
          ))}
        </View>

        {/* Première entry — the persistent, non-nagging home trigger (Phase 10
            paywall placement 3). One slim row, only while the user is free;
            it disappears entirely once the entitlement is real. */}
        {!isPremium ? (
          <Press
            onPress={() => router.push({ pathname: '/paywall', params: { from: 'home' } })}
            style={{ marginTop: 22, minHeight: 54, borderRadius: 16, borderWidth: 1, borderColor: t.accA(30), backgroundColor: t.accA(6), flexDirection: 'row', alignItems: 'center', gap: 13, paddingHorizontal: 16, paddingVertical: 10 }}
          >
            <Icon name="star" size={16} color={t.accTx} />
            <View style={{ flex: 1 }}>
              <TX font="semi" role="bodySm">{T.homePremT}</TX>
              <TX role="meta" color={t.txMuted} style={{ marginTop: 1 }}>
                {T.homePremS}
              </TX>
            </View>
            <Icon name="chevronRight" size={13} color={t.accTx} strokeWidth={1.6} />
          </Press>
        ) : null}

        {/* Browse fold */}
        <Press onPress={toggleBrowse} style={{ marginTop: 26, minHeight: 48, paddingVertical: 8, borderRadius: 24, borderWidth: 1, borderColor: t.line(12), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <TX font="semi" role="bodySm" color={t.txSecondary}>
            {browseOpen ? T.browseLess : T.browseOpen}
          </TX>
          <Icon name={browseOpen ? 'chevronUp' : 'chevronDown'} size={14} color={t.txNonText} strokeWidth={1.6} />
        </Press>

        {browseOpen ? (
          <View>
            {/* Word of the day — the card opens the full entry; the play button
                is a real Press that speaks the word inline without opening it. */}
            <Press onPress={() => openDict(wod)} style={{ marginTop: 22, borderRadius: 18, borderWidth: 1, borderColor: t.line(7), backgroundColor: t.card, ...t.cardShadow, padding: 14, paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', gap: 14 }}>
              <View style={{ flex: 1 }}>
                <TX font="semi" role="eyebrow" ls={2.4} color={t.txSubtle} style={{ marginBottom: 4 }}>
                  {T.wordOfDay}
                </TX>
                <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 10 }}>
                  <TX font="serif" role="titleLg" size={22}>
                    {wod.word}
                  </TX>
                  <TX role="label" color={t.txMuted}>
                    {lang === 'fr' ? wod.posFr : wod.posEn}
                  </TX>
                </View>
              </View>
              <Press onPress={() => tts.speak(wod.speak)} cue={null} style={{ width: 34, height: 34, borderRadius: 17, borderWidth: 1, borderColor: t.accA(50), alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="play" size={13} color={t.acc} />
              </Press>
            </Press>

            {/* Playlists — real sets now; SEE ALL routes to the index, and each
                card plays its first track through the player. */}
            <SectionHead title={T.playlists} right={T.seeAll} onPress={() => router.push('/playlists')} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -20 }} contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}>
              {playlists.map((p) => (
                <Press key={p.id} onPress={() => router.push(`/player?playlist=${p.id}&track=0`)} scale={0.98} style={{ width: 158 }}>
                  <View style={{ height: 198, borderRadius: 18, borderWidth: 1, borderColor: t.line(7), overflow: 'hidden', marginBottom: 10, backgroundColor: t.isDark ? '#12100E' : t.card, ...t.cardShadow }}>
                    <LinearGradient colors={[p.glow, 'transparent']} start={{ x: 0.8, y: 0 }} end={{ x: 0.2, y: 0.7 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
                    <TX font="semi" role="eyebrow" ls={2.2} color={t.txMuted} style={{ position: 'absolute', top: 14, left: 16 }}>
                      {p.tag}
                    </TX>
                    <TX font="serifI" size={27} role="display" style={{ position: 'absolute', left: 16, bottom: 14 }}>
                      {p.word}
                    </TX>
                  </View>
                  <TX font="semi" role="bodySm">
                    {lang === 'fr' ? p.labelFr : p.labelEn}
                  </TX>
                  <TX role="meta" color={t.txSubtle} style={{ marginTop: 2 }}>
                    {`${p.tracks.length} ${T.tracksWord} · ${lang === 'fr' ? p.topicFr : p.topicEn}`}
                  </TX>
                </Press>
              ))}
            </ScrollView>

            {/* Examiner */}
            <SectionHead title={T.examiner} right="TEF · TCF · DELF" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -20 }} contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}>
              {EXAMS.map((name, i) => (
                <Press
                  key={i}
                  onPress={() => router.push({ pathname: '/exam', params: { format: EXAM_CHIP_FORMATS[i] } })}
                  style={{ width: 224, minHeight: 118, borderRadius: 18, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, ...t.cardShadow, padding: 16, paddingHorizontal: 18 }}
                >
                  <TX font="semi" role="eyebrow" ls={2.2} color={t.accTx} style={{ marginBottom: 8 }}>
                    SIMULATION
                  </TX>
                  <TX font="serif" size={23} role="display" style={{ marginBottom: 6 }}>
                    {name}
                  </TX>
                  <TX role="label" color={t.txMuted}>
                    {T.examMeta[i]}
                  </TX>
                </Press>
              ))}
            </ScrollView>

            {/* Weak spots */}
            <SectionHead title={T.weak} right={T.week} />
            {weaknesses.length === 0 ? (
              // Never fabricate a weakness: with nothing logged this week, the
              // section says so plainly instead of asserting three invented ones.
              <View style={{ minHeight: 66, paddingVertical: 14, borderRadius: 16, borderWidth: 1, borderColor: t.line(7), backgroundColor: t.card, ...t.cardShadow, justifyContent: 'center', paddingHorizontal: 18 }}>
                <TX role="label" color={t.txSubtle} lhMult={1.5}>
                  {T.weakEmpty}
                </TX>
              </View>
            ) : (
              <View style={{ gap: 10 }}>
                {weaknesses.map((w) => {
                  const d = weakRows[w.skill];
                  const meta = (w.count === 1 ? T.weakSlip : T.weakSlipPl).replace('{n}', String(w.count));
                  return (
                    <Press key={w.skill} onPress={d.open} style={{ minHeight: 66, paddingVertical: 8, borderRadius: 16, borderWidth: 1, borderColor: t.line(7), backgroundColor: t.card, ...t.cardShadow, flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 18 }}>
                      <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center' }}>
                        <TX font="serif" role="titleSm" color={t.accTx}>
                          {d.glyph}
                        </TX>
                      </View>
                      <View style={{ flex: 1 }}>
                        <TX font="semi" role="body">
                          {d.title}
                        </TX>
                        <TX role="label" color={t.txSubtle} style={{ marginTop: 2 }}>
                          {meta}
                        </TX>
                      </View>
                      <Icon name="chevronRight" size={14} color={t.txNonText} strokeWidth={1.6} />
                    </Press>
                  );
                })}
              </View>
            )}
          </View>
        ) : null}
      </ScrollView>
      <TabBar />
    </View>
  );
}

function SectionHead({ title, right, onPress }: { title: string; right: string; onPress?: () => void }) {
  const t = useTheme();
  // When `onPress` is given the right caption becomes a real control with a
  // chevron; without it, it stays inert descriptive text (SONS · A1 · A2). A
  // caption that looks like a link but isn't is the broken promise this fixes.
  const caption = (
    <TX font="semi" role="meta" ls={1.8} color={t.txSubtle}>
      {right}
    </TX>
  );
  return (
    <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 30, marginBottom: 14, paddingHorizontal: 4 }}>
      <TX font="serif" size={22} role="display">
        {title}
      </TX>
      {onPress ? (
        <Press onPress={onPress} accessibilityRole="button" style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          {caption}
          <Icon name="chevronRight" size={12} color={t.txSubtle} strokeWidth={1.8} />
        </Press>
      ) : (
        caption
      )}
    </View>
  );
}

function TileHead({ badge, right }: { badge: ReactNode; right?: string }) {
  const t = useTheme();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
      {badge}
      {right ? (
        <TX font="semi" role="eyebrow" ls={1.8} color={t.txMuted} numberOfLines={1} style={{ flexShrink: 1 }}>
          {right}
        </TX>
      ) : null}
    </View>
  );
}
