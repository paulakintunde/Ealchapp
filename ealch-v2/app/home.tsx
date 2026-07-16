import { useState, type ReactNode } from 'react';
import { ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
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
import { goalTarget, localDay, minutesToday, resumeIsFresh, reviewDueCount, streak, topWeaknesses, type WeakSkill } from '@/store/progress.logic';
import { useUI } from '@/store/useUI';
import { playlists } from '@/content/playlists';

const RING_R = 14;
const RING_C = 2 * Math.PI * RING_R; // 87.96 — the real circumference, not a hand-tuned 88

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
  const { userName, lang, setAppLang, freeze, pace } = useStore();
  const sessions = useProgress((s) => s.sessions);
  const attempts = useProgress((s) => s.attempts);
  const errors = useProgress((s) => s.errors);
  const resume = useProgress((s) => s.resume);
  const openDict = useUI((s) => s.openDict);
  const openSheet = useUI((s) => s.openSheet);
  const [browse, setBrowse] = useState(false);

  // Every number below is a view over the session log. Nothing is seeded, so a
  // fresh install reads 0/10 min and "Day 1 starts today" — which is the truth.
  const today = localDay();
  const goal = goalTarget(pace);
  const done = minutesToday(sessions, today);
  const run = streak(sessions, today, freeze);

  // "2 freeze" is not English. The grant is 1 today, but it will not always be.
  const freezeLine = (run.freezesLeft === 1 ? T.freezeShort : T.freezeShortPl).replace(
    '{n}',
    String(run.freezesLeft)
  );

  // The review count is now real: how many items the scheduler says are due
  // today, folded from the attempt log (progress.logic.ts). Zero due is caught
  // up — and on a fresh install nothing has ever been attempted, so it reads
  // caught up, which is the truth, not a seeded "23".
  const due = reviewDueCount(attempts, today);
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
      ? { eyebrow: T.beginTag, title: T.reviewHeroTitle, sub: `${due} ${T.dueToday}`, cta: T.begin, route: '/smartreview' }
      : { eyebrow: T.beginTag, title: T.listenHeroTitle, sub: T.listenHeroSub, cta: T.begin, route: '/player' };

  const skillGold = t.tag('gold');
  const skillPurple = t.tag('grammar');
  const skillBlue = t.tag('info');

  const exams = ['TEF Canada', 'DELF B2', 'TCF'];

  // The weak-spots rows are now real: the top skills the learner has actually
  // missed this week, from the error log, most-missed first. Nothing is seeded,
  // so a fresh install shows an honest empty state, never three invented flaws.
  const weaknesses = topWeaknesses(errors, today, 7);
  // Serif capitals, not IPA: ‿ (U+203F) and a combining tilde fall outside the
  // display font's coverage and render as tofu. Each skill goes to the thing it
  // names — liaison to its sheet, nasales/genre to their lessons; the skills with
  // no wired lesson yet (subjonctif, register, passé composé) send you to Camille
  // rather than to a lesson about something else, which would be a lie.
  const weakDisplay: Record<WeakSkill, { glyph: string; title: string; open: () => void }> = {
    liaison: { glyph: 'L', title: 'La liaison obligatoire', open: () => openSheet('grammar') },
    nasales: { glyph: 'N', title: 'Voyelles nasales · on, en', open: () => router.push('/lesson?key=sons3') },
    genre: { glyph: 'G', title: 'Le genre des noms', open: () => router.push('/lesson?key=a1_4') },
    subjonctif: { glyph: 'S', title: 'Le subjonctif présent', open: () => router.push('/chat') },
    register: { glyph: 'R', title: 'Le registre', open: () => router.push('/chat') },
    'passe-compose': { glyph: 'P', title: 'Le passé composé', open: () => router.push('/chat') },
  };

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

        {/* Today strip */}
        <View style={{ minHeight: 66, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: t.accA(28), backgroundColor: t.card, ...t.cardShadow, flexDirection: 'row', marginBottom: 14, overflow: 'hidden' }}>
          <Press cue={null} onPress={() => router.push('/profile')} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 14 }}>
            <Ring color={t.acc} track={t.line(10)} pct={done / goal} />
            <View>
              <TX font="bold" role="bodySm">
                {done}
                <TX role="bodySm" color={t.txSubtle} font="semi">/{goal} min</TX>
              </TX>
              <TX font="semi" role="eyebrow" color={t.txMuted}>
                {T.goalWord}
              </TX>
            </View>
          </Press>
          <View style={{ width: 1, backgroundColor: t.line(8), marginVertical: 13 }} />
          <Press cue={null} onPress={() => router.push('/profile')} style={{ flex: 0.9, flexDirection: 'row', alignItems: 'center', gap: 9, paddingHorizontal: 14 }}>
            {run.days > 0 ? (
              <>
                <TX font="serif" size={25} role="display" color={t.accTx}>
                  {run.days}
                </TX>
                <View style={{ flex: 1, minWidth: 0 }}>
                  <TX font="semi" role="meta">
                    {T.daysWord} <TX role="meta" color={t.accTx}>✦</TX>
                  </TX>
                  <TX font="semi" role="eyebrow" color={t.txMuted}>
                    {freezeLine}
                  </TX>
                </View>
              </>
            ) : (
              // Day zero is not a failure and does not get shamed with a 0.
              <View style={{ flex: 1, minWidth: 0 }}>
                <TX font="semi" role="meta">
                  {T.dayOne}
                </TX>
                <TX font="semi" role="eyebrow" color={t.txMuted}>
                  {freezeLine}
                </TX>
              </View>
            )}
          </Press>
          <View style={{ width: 1, backgroundColor: t.line(8), marginVertical: 13 }} />
          <Press cue={null} onPress={() => router.push('/smartreview')} style={{ flex: 1.1, flexDirection: 'row', alignItems: 'center', gap: 9, paddingHorizontal: 14, backgroundColor: t.accA(8) }}>
            <TX font="serif" size={25} role="display" color={t.accTx}>
              {revNum}
            </TX>
            <View style={{ flex: 1, minWidth: 0 }}>
              <TX font="semi" role="meta">
                {revLabel}
              </TX>
              <TX font="bold" role="eyebrow" color={t.accTx}>
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
          <Press onPress={() => openSheet('vocab')} cue="tap" style={{ position: 'absolute', top: 12, right: 14, width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 3 }}>
            {[0, 1, 2].map((i) => (
              <View key={i} style={{ width: 3.5, height: 3.5, borderRadius: 2, backgroundColor: t.txNonText }} />
            ))}
          </Press>
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
            </View>
          </View>
        </Press>

        {/* Foundations */}
        <SectionHead title={T.found} right="SONS · A1 · A2" />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
          <GlowTile base="#1A140E" glow="rgba(214,160,96,0.28)" onPress={() => router.push('/den')} style={{ width: '47.5%', minHeight: 148, padding: 16 }}>
            <TileHead badge={<Badge label={T.skillCourse} color={skillGold.c} bg={skillGold.bg} />} right={`43 ${T.unitsWord}`} />
            <TX font="serifI" size={23} role="display" style={{ marginTop: 'auto' }}>
              {T.denT}
            </TX>
            <TX role="meta" color={t.txMuted} style={{ marginTop: 5 }}>
              {T.denS}
            </TX>
          </GlowTile>
          <GlowTile base="#0F1413" glow={t.accA(30)} onPress={() => router.push('/flashcards')} style={{ width: '47.5%', minHeight: 148, padding: 16 }}>
            <TileHead badge={<Badge label={T.skillRead + ' · ' + T.skillVocab} color={skillGold.c} bg={skillGold.bg} />} />
            <TX font="serifI" size={23} role="display" style={{ marginTop: 'auto' }}>
              {T.cardsT}
            </TX>
            <TX role="meta" color={t.txMuted} style={{ marginTop: 5 }}>
              {T.cardsS}
            </TX>
          </GlowTile>
          <GlowTile base="#0E1116" glow="rgba(96,126,160,0.30)" onPress={() => router.push('/voiceflash')} style={{ width: '47.5%', minHeight: 148, padding: 16 }}>
            <TileHead badge={<Badge label={T.skillSpeak} color={t.acc} bg={t.accA(16)} />} />
            <TX font="serifI" size={23} role="display" style={{ marginTop: 'auto' }}>
              {T.voiceT}
            </TX>
            <TX role="meta" color={t.txMuted} style={{ marginTop: 5 }}>
              {T.voiceS}
            </TX>
          </GlowTile>
          <GlowTile base="#0D0B12" glow="rgba(139,116,190,0.28)" onPress={() => router.push('/sentence')} style={{ width: '47.5%', minHeight: 148, padding: 16 }}>
            <TileHead badge={<Badge label={T.skillWrite} color={skillPurple.c} bg={skillPurple.bg} />} />
            <TX font="serifI" size={23} role="display" style={{ marginTop: 'auto' }}>
              {T.sbT}
            </TX>
            <TX role="meta" color={t.txMuted} style={{ marginTop: 5 }}>
              {T.sbS}
            </TX>
          </GlowTile>
        </View>

        {/* Role play row */}
        <DrillRow
          onPress={() => router.push('/roleplay')}
          glow={t.accA(24)}
          leadColor={t.accA(14)}
          lead={<Icon name="mic" size={20} color={t.acc} />}
          title={T.rpT}
          badge={<Badge label={T.skillSpeak} color={t.acc} bg={t.accA(16)} />}
          sub={T.rpS}
        />
        {/* Dictation row */}
        <DrillRow
          onPress={() => router.push('/dictation')}
          glow="rgba(214,160,96,0.22)"
          leadColor="rgba(214,160,96,0.14)"
          lead={<TX font="serifI" role="titleLg" size={20} color={skillGold.c}>é</TX>}
          title={T.dicteeT}
          badge={<Badge label={T.skillListen + ' · ' + T.skillWrite} color={skillBlue.c} bg={skillBlue.bg} />}
          sub={T.dictRowSub}
        />

        {/* Browse fold */}
        <Press onPress={() => setBrowse((b) => !b)} style={{ marginTop: 26, minHeight: 48, paddingVertical: 8, borderRadius: 24, borderWidth: 1, borderColor: t.line(12), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <TX font="semi" role="bodySm" color={t.txSecondary}>
            {browse ? T.browseLess : T.browseOpen}
          </TX>
          <Icon name={browse ? 'chevronUp' : 'chevronDown'} size={14} color={t.txNonText} strokeWidth={1.6} />
        </Press>

        {browse ? (
          <View>
            {/* Word of the day */}
            <Press onPress={openDict} style={{ marginTop: 22, borderRadius: 18, borderWidth: 1, borderColor: t.line(7), backgroundColor: t.card, ...t.cardShadow, padding: 14, paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', gap: 14 }}>
              <View style={{ flex: 1 }}>
                <TX font="semi" role="eyebrow" ls={2.4} color={t.txSubtle} style={{ marginBottom: 4 }}>
                  {T.wordOfDay}
                </TX>
                <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 10 }}>
                  <TX font="serif" role="titleLg" size={22}>
                    la flânerie
                  </TX>
                  <TX role="label" color={t.txMuted}>
                    {T.nounFem}
                  </TX>
                </View>
              </View>
              <View style={{ width: 34, height: 34, borderRadius: 17, borderWidth: 1, borderColor: t.accA(50), alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="play" size={13} color={t.acc} />
              </View>
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
              {exams.map((name, i) => (
                <Press key={i} onPress={() => router.push('/speak')} style={{ width: 224, minHeight: 118, borderRadius: 18, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, ...t.cardShadow, padding: 16, paddingHorizontal: 18 }}>
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
                  const d = weakDisplay[w.skill];
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

function DrillRow({ onPress, glow, lead, leadColor, title, badge, sub }: { onPress: () => void; glow: string; lead: ReactNode; leadColor: string; title: string; badge: ReactNode; sub: string }) {
  const t = useTheme();
  return (
    <Press onPress={onPress} scale={0.99} style={{ marginTop: 12, minHeight: 88, paddingVertical: 8, borderRadius: 18, borderWidth: 1, borderColor: t.line(7), overflow: 'hidden', backgroundColor: t.card2, flexDirection: 'row', alignItems: 'center', gap: 16, paddingHorizontal: 20, ...t.cardShadow }}>
      <LinearGradient colors={[glow, 'transparent']} start={{ x: 0.9, y: 0 }} end={{ x: 0.3, y: 0.8 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
      <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: leadColor, alignItems: 'center', justifyContent: 'center' }}>
        {lead}
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 9 }}>
          <TX font="serifI" role="titleLg" size={22}>
            {title}
          </TX>
          {badge}
        </View>
        <TX role="meta" color={t.txMuted} style={{ marginTop: 3 }}>
          {sub}
        </TX>
      </View>
      <Icon name="chevronRight" size={13} color={t.txNonText} strokeWidth={1.6} />
    </Press>
  );
}
