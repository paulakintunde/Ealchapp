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
    <View style={{ alignItems: 'center', gap: 6 }}>
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
          <TX font="serif" role="display" size={36}>
            {score}
          </TX>
        </View>
      </View>
      {/* Outside the ring: a caps label at large font scale cannot fit inside a
          fixed 120px circle without shrinking below the size this pass exists to fix. */}
      <TX font="semi" role="eyebrow" ls={1.8} color={t.txMuted} center>
        {label}
      </TX>
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
        <TX font="semi" role="meta" ls={2.8} color={t.txSubtle} style={{ marginBottom: 10 }}>
          {T.reportTag}
        </TX>
        <TX font="serif" role="display" size={38} style={{ marginBottom: 6 }}>
          Le Rapport
        </TX>
        <TX role="bodySm" color={t.txMuted} style={{ marginBottom: 24 }}>
          {T.reportSub}
        </TX>

        {/* Confidence ring + trajectory */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 24, marginBottom: 28 }}>
          <ConfidenceRing pct={0.82} score="82" label={T.conf} />
          <View style={{ flex: 1, gap: 10 }}>
            <View style={{ alignSelf: 'flex-start', minHeight: 30, paddingVertical: 4, paddingHorizontal: 14, borderRadius: 15, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="label" color={t.accTx}>
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
                <TX font="semi" role="label" ls={0.7}>
                  {label}
                </TX>
                <TX role="label" color={t.txMuted}>
                  {skillVals[i]}
                </TX>
              </View>
              <ProgressBar pct={skillVals[i]} height={3} />
            </View>
          ))}
        </View>

        {/* To review */}
        <TX font="serif" role="display" size={22} style={{ marginBottom: 14 }}>
          {T.review}
        </TX>
        <View style={{ gap: 10, marginBottom: 30 }}>
          {errorPhrases.map((phrase, i) => (
            <View key={i} style={{ borderRadius: 16, borderWidth: 1, borderColor: t.line(7), backgroundColor: t.card, padding: 15, paddingHorizontal: 17 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7 }}>
                <TX font="semi" role="eyebrow" ls={2.2} color={t.accTx}>
                  {errorTypes[i]}
                </TX>
                <Press onPress={() => router.push('/chat')} style={{ paddingVertical: 2 }}>
                  <TX font="semi" role="label" color={t.txSecondary} style={{ textDecorationLine: 'underline' }}>
                    {T.why}
                  </TX>
                </Press>
              </View>
              <TX font="serifI" role="titleLg" size={19} style={{ marginBottom: 4 }}>
                « {phrase} »
              </TX>
              <TX role="label" color={t.txMuted}>
                {T.errorIssues[i]}
              </TX>
            </View>
          ))}
        </View>

        {/* Actions */}
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Press onPress={() => router.push('/player')} style={{ flex: 1, minHeight: 52, paddingVertical: 6, borderRadius: 26, borderWidth: 1, borderColor: t.line(16), alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" role="body" color={t.txSecondary}>
              {T.replay}
            </TX>
          </Press>
          <Press onPress={() => router.push('/chat')} style={{ flex: 1.4, minHeight: 52, paddingVertical: 6, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" role="body" color={t.accInk}>
              {T.talk}
            </TX>
          </Press>
        </View>
      </ScrollView>
    </View>
  );
}
