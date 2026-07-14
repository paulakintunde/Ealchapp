import { ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';
import { TX } from '@/components/Type';
import { Press, ProgressBar, FocusHeader } from '@/components/ui';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';

// Confidence ring — SVG circular progress (r=52 → circumference ≈ 326.7).
function ConfidenceRing({ pct, score, label }: { pct: number; score: string; label: string }) {
  const t = useTheme();
  const C = 2 * Math.PI * 52;
  const offset = C * (1 - pct);
  return (
    <View style={{ width: 120, height: 120 }}>
      <Svg width={120} height={120} viewBox="0 0 120 120">
        <Circle cx={60} cy={60} r={52} fill="none" stroke={t.line(9)} strokeWidth={5} />
        <Circle
          cx={60}
          cy={60}
          r={52}
          fill="none"
          stroke={t.acc}
          strokeWidth={5}
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
        />
      </Svg>
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
        <TX font="serif" size={36} lh={36}>
          {score}
        </TX>
        <TX font="semi" size={9} ls={1.8} color={t.txA(50)} style={{ marginTop: 3 }}>
          {label}
        </TX>
      </View>
    </View>
  );
}

export default function Feedback() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const errorPhrases = ['un café allongé', 'je veux un croissant', 'le… euh… croissant'];
  const errorTypes = T.errorTypes;
  const skillVals = [74, 86, 68];

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} />
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 26, paddingTop: 8, paddingBottom: insets.bottom + 40 }} showsVerticalScrollIndicator={false}>
        {/* Kicker + title */}
        <TX font="semi" size={10} ls={2.8} color={t.txA(40)} style={{ marginBottom: 10 }}>
          {T.reportTag}
        </TX>
        <TX font="serif" size={38} lh={40} style={{ marginBottom: 6 }}>
          Le Rapport
        </TX>
        <TX size={13} color={t.txA(55)} lh={19} style={{ marginBottom: 24 }}>
          {T.reportSub}
        </TX>

        {/* Confidence ring + trajectory */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 24, marginBottom: 28 }}>
          <ConfidenceRing pct={0.82} score="82" label={T.conf} />
          <View style={{ flex: 1, gap: 10 }}>
            <View style={{ alignSelf: 'flex-start', height: 30, paddingHorizontal: 14, borderRadius: 15, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" size={12} color={t.acc}>
                {T.traj}
              </TX>
            </View>
          </View>
        </View>

        {/* Skill bars */}
        <View style={{ gap: 14, marginBottom: 32 }}>
          {T.skills.map((label, i) => (
            <View key={i}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 7 }}>
                <TX font="semi" size={12} ls={0.7}>
                  {label}
                </TX>
                <TX size={12} color={t.txA(50)}>
                  {skillVals[i]}
                </TX>
              </View>
              <ProgressBar pct={skillVals[i]} height={3} />
            </View>
          ))}
        </View>

        {/* To review */}
        <TX font="serif" size={22} style={{ marginBottom: 14 }}>
          {T.review}
        </TX>
        <View style={{ gap: 10, marginBottom: 30 }}>
          {errorPhrases.map((phrase, i) => (
            <View key={i} style={{ borderRadius: 16, borderWidth: 1, borderColor: t.line(7), backgroundColor: t.card, padding: 15, paddingHorizontal: 17 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7 }}>
                <TX font="semi" size={9} ls={2.2} color={t.acc}>
                  {errorTypes[i]}
                </TX>
                <Press onPress={() => router.push('/chat')} style={{ paddingVertical: 2 }}>
                  <TX font="semi" size={11.5} color={t.txA(60)} style={{ textDecorationLine: 'underline' }}>
                    {T.why}
                  </TX>
                </Press>
              </View>
              <TX font="serifI" size={18} style={{ marginBottom: 4 }}>
                « {phrase} »
              </TX>
              <TX size={12.5} color={t.txA(55)} lh={18}>
                {T.errorIssues[i]}
              </TX>
            </View>
          ))}
        </View>

        {/* Actions */}
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Press onPress={() => router.push('/player')} style={{ flex: 1, height: 52, borderRadius: 26, borderWidth: 1, borderColor: t.line(16), alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" size={14} color={t.txA(85)}>
              {T.replay}
            </TX>
          </Press>
          <Press onPress={() => router.push('/chat')} style={{ flex: 1.4, height: 52, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" size={14} color={t.accInk}>
              {T.talk}
            </TX>
          </Press>
        </View>
      </ScrollView>
    </View>
  );
}
