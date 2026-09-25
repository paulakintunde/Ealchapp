import { useEffect, useRef, useState } from 'react';
import { Animated, BackHandler, Pressable, ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { TX } from './Type';
import { Press } from './ui';
import { PanelRow } from './PanelRow';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useReduceMotion } from '@/utils/reduceMotion';
import { LEVELS, type Level } from '@/content/schema';
import { FREE_BANDS } from '@/store/entitlement.logic';
import { track as trackEvent } from '@/services/analytics';

// The band selector D-06 approved and D-07's arithmetic demands: a full-row
// panel rather than seven equal-flex columns (43.7px at 342px content width,
// under the 44px platform minimum — den.tsx:122-138's rejected pill row).

/** Per-band unit progress, supplied by the caller (plan 08's trail screen)
 *  from den.tsx:60-72's own MET/MASTERED derivation, memoised there — this
 *  component never reads useProgress or the content service itself, which is
 *  what lets it render in a test with no store at all. `total === 0` is the
 *  empty-state signal: four of the seven bands (b1..c2) carry zero units in
 *  the shipped seed and must read that way, not as a fabricated 0/0. */
export type BandUnitCount = { total: number; met: number; mastered: number };

/** The only band-labeller that already covers every LEVELS member
 *  (app/theme.tsx:20) — restated here rather than imported, since app/
 *  screens are not a dependency components/ takes on. */
const levelLabel = (l: Level) => (l === 'sons' ? 'SONS' : l.toUpperCase());

/** The chip beside the Den/trail title that opens the panel. 38px visual with
 *  hitSlop to reach the 44dp target (ui.tsx:286-289's rule for a small header
 *  control) — the exact guard sons-06-muettes.test.ts:472-482 checks for. */
export function LevelChip({
  band,
  expanded,
  onPress,
}: {
  band: Level;
  /** Whether the panel this chip opens is currently mounted — announced so a
   *  screen reader user knows the panel state without seeing it. */
  expanded: boolean;
  onPress: () => void;
}) {
  const t = useTheme();
  const T = useT();
  return (
    <Press
      cue={null}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ expanded }}
      accessibilityLabel={T.bandChipLabel}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      style={{
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 7,
        backgroundColor: t.accA(14),
        alignSelf: 'flex-start',
      }}
    >
      {/* maxScale: this is a fixed-width chip label (Type.tsx:57-58's own
          example — "tab labels, clock digits, fixed-width chips") — the one
          place in this file text is allowed to stop growing with the OS font
          scale, because the chip's box cannot grow to follow it. */}
      <TX font="semi" role="eyebrow" ls={1} color={t.accTx} maxScale={1.3}>
        {levelLabel(band)}
      </TX>
    </Press>
  );
}

export function LevelPanel({
  open,
  onClose,
  band,
  onSelect,
  unitCounts,
  levelsAll,
}: {
  open: boolean;
  onClose: () => void;
  band: Level;
  onSelect: (band: Level) => void;
  unitCounts: Record<Level, BandUnitCount>;
  levelsAll: boolean;
}) {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const reduceMotion = useReduceMotion();
  const y = useRef(new Animated.Value(600)).current;
  const op = useRef(new Animated.Value(0)).current;
  const [mounted, setMounted] = useState<boolean>(open);

  useEffect(() => {
    if (open) {
      setMounted(true);
      if (reduceMotion) {
        y.setValue(0);
        op.setValue(1);
      } else {
        Animated.parallel([
          Animated.timing(y, { toValue: 0, duration: 340, useNativeDriver: true }),
          Animated.timing(op, { toValue: 1, duration: 300, useNativeDriver: true }),
        ]).start();
      }
    } else if (mounted) {
      if (reduceMotion) {
        y.setValue(600);
        op.setValue(0);
        setMounted(false);
      } else {
        Animated.parallel([
          Animated.timing(y, { toValue: 600, duration: 320, useNativeDriver: true }),
          Animated.timing(op, { toValue: 0, duration: 300, useNativeDriver: true }),
        ]).start(() => setMounted(false));
      }
    }
  }, [open, mounted, reduceMotion, y, op]);

  // Android hardware back closes the panel rather than popping the screen
  // under it — the exact bug class sons-06-muettes.test.ts:484-491 records
  // for a different overlay ("tapping 'See all 16 endings' and pressing back
  // ejected the learner from the lesson"). This panel is a local-state
  // overlay, never a route, so expo-router's own back handling never sees it.
  useEffect(() => {
    if (!open) return undefined;
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      onClose();
      return true;
    });
    return () => sub.remove();
  }, [open, onClose]);

  if (!mounted) return null;

  const onRowPress = (l: Level, locked: boolean) => {
    if (locked) {
      trackEvent('gate_blocked', { feature: 'levels.all', from: 'den' });
      router.push({ pathname: '/paywall', params: { from: 'gate:levels' } });
      return;
    }
    onSelect(l);
  };

  return (
    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 40 }}>
      <Animated.View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: op }}>
        <Pressable onPress={onClose} style={{ flex: 1, backgroundColor: t.alpha(t.bgDeep, 60) }} />
      </Animated.View>

      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          maxHeight: '78%',
          borderTopLeftRadius: 26,
          borderTopRightRadius: 26,
          backgroundColor: t.sheet,
          borderTopWidth: 1,
          borderColor: t.line(10),
          transform: [{ translateY: y }],
        }}
      >
        <View style={{ alignItems: 'center', paddingTop: 12, paddingBottom: 4 }}>
          <View style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: t.line(18) }} />
        </View>

        <ScrollView contentContainerStyle={{ paddingHorizontal: 26, paddingTop: 14, paddingBottom: 44 }}>
          <TX font="serif" role="display" size={28} style={{ marginBottom: 14 }}>
            {T.bandPanelTitle}
          </TX>

          <View style={{ gap: 9 }}>
            {LEVELS.map((l) => {
              const locked = !levelsAll && !(FREE_BANDS as readonly string[]).includes(l);
              const c: BandUnitCount = unitCounts[l] ?? { total: 0, met: 0, mastered: 0 };
              const trailing = locked ? (
                <TX role="label" color={t.accTx}>
                  {T.bandPremiereLine}
                </TX>
              ) : c.total === 0 ? (
                <TX font="semi" role="eyebrow" ls={1.4} color={t.txSubtle}>
                  {T.uSoon}
                </TX>
              ) : (
                <View style={{ alignItems: 'flex-end' }}>
                  <TX role="label" color={t.txMuted}>{`${c.met} / ${c.total}`}</TX>
                  {c.mastered > 0 ? (
                    <TX role="eyebrow" color={t.txSubtle} style={{ marginTop: 1 }}>
                      {T.denMastered.replace('{k}', String(c.mastered))}
                    </TX>
                  ) : null}
                </View>
              );
              return (
                <PanelRow
                  key={l}
                  title={T.bandNames[l]}
                  sub={T.bandDescs[l]}
                  selected={l === band}
                  trailing={trailing}
                  onPress={() => onRowPress(l, locked)}
                  testID={`level-panel-row-${l}`}
                />
              );
            })}
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
}
