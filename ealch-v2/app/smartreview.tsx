import { ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { reviewOverview } from '@/content/drills';

// Small pill chip (source chips / next-due chips).
function Chip({ name, n }: { name: string; n: string }) {
  const t = useTheme();
  return (
    <View style={{ minHeight: 30, paddingVertical: 4, paddingHorizontal: 13, borderRadius: 15, backgroundColor: t.card2, flexDirection: 'row', alignItems: 'center', gap: 6 }}>
      <TX font="semi" role="label">
        {name}
      </TX>
      <TX font="semi" role="label" color={t.accTx}>
        {n}
      </TX>
    </View>
  );
}

export default function SmartReview() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);
  const reviewCleared = useStore((s) => s.reviewCleared);
  const fr = lang === 'fr';

  const { chips, items } = reviewOverview(lang);

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} />
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 6, paddingBottom: insets.bottom + 40 }} showsVerticalScrollIndicator={false}>
        {/* Kicker row */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
          <TX font="semi" role="eyebrow" ls={2.6} color={t.txSubtle}>
            {T.smartReviewT.toUpperCase()}
          </TX>
          <View style={{ minHeight: 22, paddingVertical: 3, paddingHorizontal: 10, borderRadius: 11, borderWidth: 1, borderColor: t.accA(40), alignItems: 'center', justifyContent: 'center' }}>
            <TX font="bold" role="eyebrow" ls={1.2} color={t.accTx}>
              SRS
            </TX>
          </View>
        </View>

        {reviewCleared ? (
          // ── All caught up ──
          <View style={{ alignItems: 'center', paddingTop: 40 }}>
            <View style={{ width: 96, height: 96, borderRadius: 48, borderWidth: 1.5, borderColor: t.accA(55), backgroundColor: t.accA(10), alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
              <Svg width={36} height={28} viewBox="0 0 36 28" fill="none">
                <Path d="M2 15l10 10L34 3" stroke={t.acc} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
              </Svg>
            </View>
            <TX font="serifI" role="display" size={38} center style={{ marginBottom: 12 }}>
              {T.allCaught}
            </TX>
            <TX role="bodySm" lhMult={1.7} color={t.txSecondary} center style={{ maxWidth: 280, marginBottom: 30 }}>
              {T.allCaughtS}
            </TX>
            <TX font="semi" role="eyebrow" ls={2.4} color={t.txSubtle} style={{ marginBottom: 12 }}>
              {T.nextDue}
            </TX>
            <View style={{ flexDirection: 'row', gap: 8, marginBottom: 30 }}>
              <Chip name="+14" n={fr ? 'demain' : 'tomorrow'} />
              <Chip name="+9" n={fr ? 'dans 3 jours' : 'in 3 days'} />
            </View>
            <Press onPress={() => router.replace('/home')} style={{ alignSelf: 'stretch', minHeight: 52, paddingVertical: 8, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="body" color={t.accInk}>
                {fr ? "Retour à l'accueil" : 'Back to Home'}
              </TX>
            </Press>
          </View>
        ) : (
          // ── Due today launcher ──
          <View>
            <TX font="serifI" role="display" size={38} style={{ marginBottom: 20 }}>
              {fr ? 'À réviser.' : 'Due today.'}
            </TX>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 22, marginBottom: 22 }}>
              <View style={{ width: 112, height: 112 }}>
                <Svg width={112} height={112} viewBox="0 0 112 112">
                  <Circle cx={56} cy={56} r={49} fill="none" stroke={t.line(8)} strokeWidth={7} />
                  <Circle cx={56} cy={56} r={49} fill="none" stroke={t.acc} strokeWidth={7} strokeLinecap="round" strokeDasharray={308} strokeDashoffset={111} transform="rotate(-90 56 56)" />
                </Svg>
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
                  <TX font="serif" role="display" size={34}>
                    23
                  </TX>
                  <TX font="semi" role="eyebrow" ls={1.4} color={t.txSubtle}>
                    ITEMS
                  </TX>
                </View>
              </View>
              <TX role="bodySm" lhMult={1.69} color={t.txSecondary} style={{ flex: 1 }}>
                {fr
                  ? 'Collectés dans 4 activités cette semaine. Vider la file prend environ 6 minutes.'
                  : 'Collected from 4 activities this week. Clearing the queue takes about 6 minutes.'}
              </TX>
            </View>

            {/* Source chips */}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
              {chips.map((c, i) => (
                <Chip key={i} name={c.name} n={c.n} />
              ))}
            </View>

            {/* Start */}
            <Press onPress={() => router.push('/review')} style={{ minHeight: 52, paddingVertical: 8, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center', marginBottom: 26 }}>
              <TX font="semi" role="body" color={t.accInk}>
                {T.startReview} — 6 min
              </TX>
            </Press>

            {/* Up next */}
            <TX font="semi" role="meta" ls={2.4} color={t.txSubtle} style={{ marginBottom: 12 }}>
              {fr ? 'À SUIVRE' : 'UP NEXT'}
            </TX>
            <View style={{ gap: 10, marginBottom: 16 }}>
              {items.map((ri, i) => (
                <View key={i} style={{ borderRadius: 16, borderWidth: 1, borderColor: t.line(7), backgroundColor: t.card, ...t.cardShadow, paddingVertical: 14, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                  <View style={{ flex: 1, minWidth: 0 }}>
                    <TX font="serif" role="titleLg" size={19}>
                      {ri.w}
                    </TX>
                    <TX role="meta" color={t.txSubtle} style={{ marginTop: 2 }}>
                      {ri.meta}
                    </TX>
                  </View>
                  <View style={{ minHeight: 20, paddingVertical: 2, paddingHorizontal: 9, borderRadius: 10, backgroundColor: t.tag(ri.tone).bg, alignItems: 'center', justifyContent: 'center' }}>
                    <TX font="bold" role="eyebrow" ls={1} color={t.tag(ri.tone).c}>
                      {ri.tag}
                    </TX>
                  </View>
                </View>
              ))}
            </View>

            <TX font="serifI" role="meta" color={t.txSubtle} center>
              {fr
                ? 'Les items reviennent à 1 → 3 → 7 → 21 jours quand vous réussissez.'
                : 'Items return in 1 → 3 → 7 → 21 days as you get them right.'}
            </TX>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
