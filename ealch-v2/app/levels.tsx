import { ScrollView, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, ProgressBar } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { LEVELS, type Level } from '@/content/schema';
import { FREE_BANDS } from '@/store/entitlement.logic';
import { useFeature } from '@/store/useEntitlement';
import { useUI } from '@/store/useUI';
import { useBandCounts } from '@/store/useBandCounts';

// The Levels page (`ealch://levels`): every CEFR band on one screen, each row
// a hot link to that band's trail. Home's Refresher Course card opens it
// first; it is a page rather than a sheet so all
// seven bands, their progress and their lock state read at a glance with no
// drag to a larger detent and no scroll inside an overlay. The den's level
// chip opens it; a long press on the chip still opens the quick panel.
//
// Picking a band sets the trail's band and goes back to the den. A locked
// band is picked like any other: its trail shows readable acts under the
// Première gate (D-21/D-22), which is where the paywall touchpoint lives.

/** The circle's glyph: "S" for sons, otherwise the band itself (A1 … C2). */
const badge = (l: Level) => (l === 'sons' ? 'S' : l.toUpperCase());

export default function Levels() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const band = useUI((s) => s.trailBand);
  const setBand = useUI((s) => s.setTrailBand);
  const levelsAll = useFeature('levels.all');
  const counts = useBandCounts();

  // Two ways in. From home's Refresher Course card (`from=home`) this page is
  // the course's front door, so a pick goes FORWARD to the trail and back from
  // the trail returns here. From the den's level chip it is a detour, so a
  // pick goes back to the trail it came from.
  const params = useLocalSearchParams<{ from?: string | string[] }>();
  const fromHome = (Array.isArray(params.from) ? params.from[0] : params.from) === 'home';
  const pick = (l: Level) => {
    setBand(l);
    if (fromHome) router.push('/den');
    else if (router.canGoBack()) router.back();
    else router.replace('/den');
  };

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <ScrollView contentContainerStyle={{ paddingTop: insets.top + 14, paddingHorizontal: 24, paddingBottom: insets.bottom + 40 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <Press
            onPress={() => (router.canGoBack() ? router.back() : router.replace('/den'))}
            accessibilityRole="button"
            accessibilityLabel={T.denTag}
            style={{ width: 44, height: 44, marginLeft: -12, alignItems: 'center', justifyContent: 'center' }}
          >
            <Icon name="chevronLeft" size={20} color={t.txNonText} strokeWidth={1.7} />
          </Press>
          <TX font="semi" role="eyebrow" ls={2.6} color={t.txSubtle}>
            {T.denTag}
          </TX>
          <View style={{ width: 44, height: 44, marginRight: -12 }} />
        </View>

        <TX font="serif" role="display" size={38}>
          {T.bandPanelTitle}
        </TX>
        <TX role="bodySm" color={t.txMuted} style={{ marginTop: 8, marginBottom: 20 }}>
          {T.levelsLead}
        </TX>

        <View style={{ borderRadius: 22, borderWidth: 1, borderColor: t.line(10), backgroundColor: t.card, padding: 8, gap: 4 }}>
          {LEVELS.map((l) => {
            const c = counts[l];
            const locked = !levelsAll && !(FREE_BANDS as readonly string[]).includes(l);
            const selected = l === band;
            const pct = c.total > 0 ? Math.round((c.met / c.total) * 100) : 0;
            const name = l === 'sons' ? T.bandNames[l] : `${T.bandChipLabel} ${T.bandNames[l]}`;
            const sub =
              c.units === 0
                ? T.levelsWriting
                : `${T.levelsUnits.replace('{n}', String(c.units))} · ${T.levelsLearned.replace('{p}', String(pct))}`;
            return (
              <Press
                key={l}
                cue="tap"
                onPress={() => pick(l)}
                accessibilityRole="button"
                accessibilityState={{ selected }}
                accessibilityLabel={`${name}. ${sub}${locked ? `. ${T.bandPremiereLine}` : ''}`}
                testID={`levels-row-${l}`}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 14,
                  minHeight: 76,
                  paddingVertical: 12,
                  paddingHorizontal: 12,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: selected ? t.accA(55) : 'transparent',
                  backgroundColor: selected ? t.accA(10) : 'transparent',
                }}
              >
                <View
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 22,
                    borderWidth: 1,
                    borderColor: selected ? t.acc : t.line(18),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TX font="serif" role="title" color={selected ? t.accTx : t.txSecondary}>
                    {badge(l)}
                  </TX>
                </View>

                {/* flex lives on the wrapper, never on a TX, or the text clips */}
                <View style={{ flex: 1, minWidth: 0 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                    <TX font="semi" role="body">
                      {name}
                    </TX>
                    {locked ? (
                      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8, backgroundColor: t.tag('gold').bg }}>
                        <Icon name="lock" size={10} color={t.tag('gold').c} />
                        <TX font="semi" role="eyebrow" ls={1} color={t.tag('gold').c}>
                          {T.bandPremiereLine}
                        </TX>
                      </View>
                    ) : null}
                  </View>
                  <TX role="label" color={t.txMuted} style={{ marginTop: 3 }}>
                    {sub}
                  </TX>
                  <View style={{ marginTop: 8 }}>
                    <ProgressBar pct={pct} height={3} color={t.acc} track={t.line(10)} />
                  </View>
                </View>

                {selected ? <Icon name="check" size={18} color={t.accTx} /> : <View style={{ width: 18 }} />}
              </Press>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
