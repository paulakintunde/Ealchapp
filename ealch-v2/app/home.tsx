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
import { useUI } from '@/store/useUI';
import { sound } from '@/services';

function Ring({ color, track }: { color: string; track: string }) {
  return (
    <Svg width={36} height={36} viewBox="0 0 36 36">
      <Circle cx={18} cy={18} r={14} fill="none" stroke={track} strokeWidth={4} />
      <Circle cx={18} cy={18} r={14} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" strokeDasharray={88} strokeDashoffset={18} transform="rotate(-90 18 18)" />
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
  const { userName, lang, setLang, reviewCleared } = useStore();
  const openDict = useUI((s) => s.openDict);
  const openSheet = useUI((s) => s.openSheet);
  const [browse, setBrowse] = useState(false);

  const revNum = reviewCleared ? '✓' : '23';
  const revLabel = reviewCleared ? T.caughtUpShort : T.reviewShort;
  const revSub = reviewCleared ? T.tomorrow : '6 min →';

  const skillGold = t.tag('gold');
  const skillPurple = t.tag('grammar');
  const skillBlue = t.tag('info');

  const playlists = [
    { word: 'La Voix', tag: 'DEEP-DIVE', glow: t.accA(28) },
    { word: 'Argot', tag: 'PARIS', glow: 'rgba(199,106,92,0.30)' },
    { word: "L'Argent", tag: 'BUSINESS', glow: 'rgba(96,126,160,0.32)' },
    { word: "L'Oreille", tag: 'IMMERSION', glow: 'rgba(139,116,190,0.28)' },
  ];
  const exams = ['TEF Canada', 'DELF B2', 'TCF'];
  const weak = [
    { glyph: '‿', title: 'La liaison obligatoire' },
    { glyph: 'ɔ̃', title: 'Voyelles nasales — on / en' },
    { glyph: 'q', title: 'Le subjonctif présent' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <ScrollView contentContainerStyle={{ paddingTop: insets.top + 20, paddingHorizontal: 20, paddingBottom: 130 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 22, paddingHorizontal: 4 }}>
          <View>
            <TX font="semi" size={10} ls={3} color={t.txA(45)}>
              {T.greets[greetSlot()]}
            </TX>
            <TX font="serif" size={32} lh={37}>
              {userName || T.welcomeWord}
            </TX>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View style={{ flexDirection: 'row', height: 32, borderRadius: 16, borderWidth: 1, borderColor: t.line(14), overflow: 'hidden' }}>
              {(['fr', 'en'] as const).map((l) => {
                const on = lang === l;
                return (
                  <Press key={l} onPress={() => setLang(l)} style={{ paddingHorizontal: 13, justifyContent: 'center', backgroundColor: on ? t.acc : 'transparent' }}>
                    <TX font="semi" size={11} ls={1} color={on ? t.accInk : t.txA(55)}>
                      {l.toUpperCase()}
                    </TX>
                  </Press>
                );
              })}
            </View>
            <Press onPress={() => router.replace('/profile')} style={{ width: 40, height: 40, borderRadius: 20, borderWidth: 1, borderColor: t.accA(55), backgroundColor: t.card2, alignItems: 'center', justifyContent: 'center' }}>
              {userName ? (
                <TX font="serif" size={17}>
                  {userName.charAt(0).toUpperCase()}
                </TX>
              ) : (
                <Icon name="user" size={18} color={t.txA(70)} strokeWidth={1.7} />
              )}
            </Press>
          </View>
        </View>

        {/* Today strip */}
        <View style={{ height: 66, borderRadius: 20, borderWidth: 1, borderColor: t.accA(28), backgroundColor: t.card, ...t.cardShadow, flexDirection: 'row', marginBottom: 14, overflow: 'hidden' }}>
          <Press cue={null} onPress={() => router.replace('/profile')} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 14 }}>
            <Ring color={t.acc} track={t.line(10)} />
            <View>
              <TX font="bold" size={13} lh={16}>
                12<TX size={13} color={t.txA(45)} font="semi">/15 min</TX>
              </TX>
              <TX font="semi" size={9.5} color={t.txA(50)}>
                {T.goalWord}
              </TX>
            </View>
          </Press>
          <View style={{ width: 1, backgroundColor: t.line(8), marginVertical: 13 }} />
          <Press cue={null} onPress={() => router.replace('/profile')} style={{ flex: 0.9, flexDirection: 'row', alignItems: 'center', gap: 9, paddingHorizontal: 14 }}>
            <TX font="serif" size={25} color={t.acc} lh={25}>
              14
            </TX>
            <View>
              <TX font="semi" size={11} lh={13}>
                {T.daysWord} <TX size={11} color={t.acc}>✦</TX>
              </TX>
              <TX font="semi" size={9.5} color={t.txA(50)}>
                {T.oneFreeze}
              </TX>
            </View>
          </Press>
          <View style={{ width: 1, backgroundColor: t.line(8), marginVertical: 13 }} />
          <Press cue={null} onPress={() => router.push('/smartreview')} style={{ flex: 1.1, flexDirection: 'row', alignItems: 'center', gap: 9, paddingHorizontal: 14, backgroundColor: t.accA(8) }}>
            <TX font="serif" size={25} color={t.acc} lh={25}>
              {revNum}
            </TX>
            <View style={{ flex: 1, minWidth: 0 }}>
              <TX font="semi" size={11} lh={13}>
                {revLabel}
              </TX>
              <TX font="bold" size={9.5} color={t.acc}>
                {revSub}
              </TX>
            </View>
          </Press>
        </View>

        {/* Hero */}
        <Press onPress={() => router.push('/player')} scale={0.99} style={{ height: 400, borderRadius: 26, overflow: 'hidden', borderWidth: 1, borderColor: t.line(7), backgroundColor: t.isDark ? '#1B1712' : t.card, ...t.cardShadow }}>
          <LinearGradient colors={[t.isDark ? 'rgba(214,160,96,0.24)' : 'rgba(214,160,96,0.35)', 'transparent']} start={{ x: 0.72, y: 0 }} end={{ x: 0.3, y: 0.55 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
          <LinearGradient colors={['transparent', t.accA(22)]} start={{ x: 0.15, y: 0.4 }} end={{ x: 0.15, y: 1 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
          <View style={{ position: 'absolute', top: 20, left: 22, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: t.acc }} />
            <TX font="semi" size={10} ls={2.6} color={t.txA(75)}>
              {T.heroTag}
            </TX>
          </View>
          <Press onPress={() => openSheet('vocab')} cue="tap" style={{ position: 'absolute', top: 12, right: 14, width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 3 }}>
            {[0, 1, 2].map((i) => (
              <View key={i} style={{ width: 3.5, height: 3.5, borderRadius: 2, backgroundColor: t.txA(70) }} />
            ))}
          </Press>
          <View style={{ position: 'absolute', left: 22, right: 22, bottom: 22 }}>
            <TX font="serifI" size={46} lh={46} style={{ marginBottom: 8 }}>
              Au Café
            </TX>
            <TX size={14} color={t.txA(65)} style={{ marginBottom: 18 }}>
              {T.heroSub}
            </TX>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <View style={{ height: 46, paddingHorizontal: 22, borderRadius: 23, backgroundColor: t.acc, flexDirection: 'row', alignItems: 'center', gap: 9 }}>
                <Icon name="play" size={13} color={t.accInk} />
                <TX font="semi" size={14} color={t.accInk}>
                  {T.resume}
                </TX>
              </View>
              <View style={{ height: 46, paddingHorizontal: 18, borderRadius: 23, borderWidth: 1, borderColor: t.line(20), alignItems: 'center', justifyContent: 'center' }}>
                <TX size={13} color={t.txA(85)}>
                  {T.left}
                </TX>
              </View>
            </View>
          </View>
        </Press>

        {/* Foundations */}
        <SectionHead title={T.found} right="SONS · A1 · A2" />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
          <GlowTile base="#1A140E" glow="rgba(214,160,96,0.28)" onPress={() => router.replace('/den')} style={{ width: '47.5%', height: 148, padding: 16 }}>
            <TileHead badge={<Badge label={T.skillCourse} color={skillGold.c} bg={skillGold.bg} />} right={`43 ${T.unitsWord}`} />
            <TX font="serifI" size={23} lh={24} style={{ marginTop: 'auto' }}>
              {T.denT}
            </TX>
            <TX size={11} color={t.txA(50)} style={{ marginTop: 5 }}>
              {T.denS}
            </TX>
          </GlowTile>
          <GlowTile base="#0F1413" glow={t.accA(30)} onPress={() => router.push('/flashcards')} style={{ width: '47.5%', height: 148, padding: 16 }}>
            <TileHead badge={<Badge label={T.skillRead + ' · ' + T.skillVocab} color={skillGold.c} bg={skillGold.bg} />} />
            <TX font="serifI" size={23} lh={24} style={{ marginTop: 'auto' }}>
              {T.cardsT}
            </TX>
            <TX size={11} color={t.txA(50)} style={{ marginTop: 5 }}>
              {T.cardsS}
            </TX>
          </GlowTile>
          <GlowTile base="#0E1116" glow="rgba(96,126,160,0.30)" onPress={() => router.push('/voiceflash')} style={{ width: '47.5%', height: 148, padding: 16 }}>
            <TileHead badge={<Badge label={T.skillSpeak} color={t.acc} bg={t.accA(16)} />} />
            <TX font="serifI" size={23} lh={24} style={{ marginTop: 'auto' }}>
              {T.voiceT}
            </TX>
            <TX size={11} color={t.txA(50)} style={{ marginTop: 5 }}>
              {T.voiceS}
            </TX>
          </GlowTile>
          <GlowTile base="#0D0B12" glow="rgba(139,116,190,0.28)" onPress={() => router.push('/sentence')} style={{ width: '47.5%', height: 148, padding: 16 }}>
            <TileHead badge={<Badge label={T.skillWrite} color={skillPurple.c} bg={skillPurple.bg} />} />
            <TX font="serifI" size={23} lh={24} style={{ marginTop: 'auto' }}>
              {T.sbT}
            </TX>
            <TX size={11} color={t.txA(50)} style={{ marginTop: 5 }}>
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
          lead={<TX font="serifI" size={19} color={skillGold.c}>é</TX>}
          title="La Dictée"
          badge={<Badge label={T.skillListen + ' · ' + T.skillWrite} color={skillBlue.c} bg={skillBlue.bg} />}
          sub={T.dictRowSub}
        />

        {/* Browse fold */}
        <Press onPress={() => setBrowse((b) => !b)} style={{ marginTop: 26, height: 48, borderRadius: 24, borderWidth: 1, borderColor: t.line(12), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <TX font="semi" size={13} color={t.txA(70)}>
            {browse ? T.browseLess : T.browseOpen}
          </TX>
          <Icon name="chevronDown" size={14} color={t.txA(55)} strokeWidth={1.6} />
        </Press>

        {browse ? (
          <View>
            {/* Word of the day */}
            <Press onPress={openDict} style={{ marginTop: 22, borderRadius: 18, borderWidth: 1, borderColor: t.line(7), backgroundColor: t.card, ...t.cardShadow, padding: 14, paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', gap: 14 }}>
              <View style={{ flex: 1 }}>
                <TX font="semi" size={9} ls={2.4} color={t.txA(45)} style={{ marginBottom: 4 }}>
                  {T.wordOfDay}
                </TX>
                <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 10 }}>
                  <TX font="serif" size={21}>
                    la flânerie
                  </TX>
                  <TX size={11.5} color={t.txA(50)}>
                    {T.nounFem}
                  </TX>
                </View>
              </View>
              <View style={{ width: 34, height: 34, borderRadius: 17, borderWidth: 1, borderColor: t.accA(50), alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="play" size={13} color={t.acc} />
              </View>
            </Press>

            {/* Playlists */}
            <SectionHead title={T.playlists} right={T.seeAll} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -20 }} contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}>
              {playlists.map((p, i) => (
                <View key={i} style={{ width: 158 }}>
                  <View style={{ height: 198, borderRadius: 18, borderWidth: 1, borderColor: t.line(7), overflow: 'hidden', marginBottom: 10, backgroundColor: t.isDark ? '#12100E' : t.card, ...t.cardShadow }}>
                    <LinearGradient colors={[p.glow, 'transparent']} start={{ x: 0.8, y: 0 }} end={{ x: 0.2, y: 0.7 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
                    <TX font="semi" size={9} ls={2.2} color={t.txA(55)} style={{ position: 'absolute', top: 14, left: 16 }}>
                      {p.tag}
                    </TX>
                    <TX font="serifI" size={27} style={{ position: 'absolute', left: 16, bottom: 14 }}>
                      {p.word}
                    </TX>
                  </View>
                  <TX font="semi" size={13}>
                    {T.playlistLabels[i]}
                  </TX>
                  <TX size={11} color={t.txA(45)} style={{ marginTop: 2 }}>
                    {T.playlistMeta[i]}
                  </TX>
                </View>
              ))}
            </ScrollView>

            {/* Examiner */}
            <SectionHead title={T.examiner} right="TEF · TCF · DELF" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginHorizontal: -20 }} contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}>
              {exams.map((name, i) => (
                <Press key={i} onPress={() => router.push('/speak')} style={{ width: 224, height: 118, borderRadius: 18, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, ...t.cardShadow, padding: 16, paddingHorizontal: 18 }}>
                  <TX font="semi" size={9} ls={2.2} color={t.acc} style={{ marginBottom: 8 }}>
                    SIMULATION
                  </TX>
                  <TX font="serif" size={23} lh={24} style={{ marginBottom: 6 }}>
                    {name}
                  </TX>
                  <TX size={11.5} color={t.txA(50)}>
                    {T.examMeta[i]}
                  </TX>
                </Press>
              ))}
            </ScrollView>

            {/* Weak spots */}
            <SectionHead title={T.weak} right={T.week} />
            <View style={{ gap: 10 }}>
              {weak.map((w, i) => (
                <Press key={i} onPress={() => openSheet('grammar')} style={{ height: 66, borderRadius: 16, borderWidth: 1, borderColor: t.line(7), backgroundColor: t.card, ...t.cardShadow, flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 18 }}>
                  <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center' }}>
                    <TX font="serifI" size={16} color={t.acc}>
                      {w.glyph}
                    </TX>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TX font="semi" size={14}>
                      {w.title}
                    </TX>
                    <TX size={11.5} color={t.txA(45)} style={{ marginTop: 2 }}>
                      {T.weakMeta[i]}
                    </TX>
                  </View>
                  <Icon name="chevronRight" size={14} color={t.txA(35)} strokeWidth={1.6} />
                </Press>
              ))}
            </View>
          </View>
        ) : null}
      </ScrollView>
      <TabBar />
    </View>
  );
}

function SectionHead({ title, right }: { title: string; right: string }) {
  const t = useTheme();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 30, marginBottom: 14, paddingHorizontal: 4 }}>
      <TX font="serif" size={22}>
        {title}
      </TX>
      <TX font="semi" size={11} ls={1.8} color={t.txA(40)}>
        {right}
      </TX>
    </View>
  );
}

function TileHead({ badge, right }: { badge: ReactNode; right?: string }) {
  const t = useTheme();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      {badge}
      {right ? (
        <TX font="semi" size={9} ls={1.8} color={t.txA(50)}>
          {right}
        </TX>
      ) : null}
    </View>
  );
}

function DrillRow({ onPress, glow, lead, leadColor, title, badge, sub }: { onPress: () => void; glow: string; lead: ReactNode; leadColor: string; title: string; badge: ReactNode; sub: string }) {
  const t = useTheme();
  return (
    <Press onPress={onPress} scale={0.99} style={{ marginTop: 12, height: 88, borderRadius: 18, borderWidth: 1, borderColor: t.line(7), overflow: 'hidden', backgroundColor: t.card2, flexDirection: 'row', alignItems: 'center', gap: 16, paddingHorizontal: 20, ...t.cardShadow }}>
      <LinearGradient colors={[glow, 'transparent']} start={{ x: 0.9, y: 0 }} end={{ x: 0.3, y: 0.8 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
      <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: leadColor, alignItems: 'center', justifyContent: 'center' }}>
        {lead}
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 9 }}>
          <TX font="serifI" size={21} lh={22}>
            {title}
          </TX>
          {badge}
        </View>
        <TX size={11} color={t.txA(50)} style={{ marginTop: 3 }}>
          {sub}
        </TX>
      </View>
      <Icon name="chevronRight" size={13} color={t.txA(35)} strokeWidth={1.6} />
    </Press>
  );
}
