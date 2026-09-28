import { useEffect, useRef, useState } from 'react';
import type { Ref } from 'react';
import * as ReactNative from 'react-native';
import { AccessibilityInfo, Animated, BackHandler, Pressable, ScrollView, View } from 'react-native';
import { TX } from './Type';
import { Press } from './ui';
import { PanelRow } from './PanelRow';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useReduceMotion } from '@/utils/reduceMotion';
import { LEVELS, type Level } from '@/content/schema';
import { FREE_BANDS } from '@/store/entitlement.logic';

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
  onLongPress,
  focusRef,
}: {
  band: Level;
  /** Whether the panel this chip opens is currently mounted — announced so a
   *  screen reader user knows the panel state without seeing it. */
  expanded: boolean;
  onPress: () => void;
  /** The alternative route in: the quick panel, while a tap opens the page. */
  onLongPress?: () => void;
  focusRef?: Ref<View>;
}) {
  const t = useTheme();
  const T = useT();
  return (
    <Press
      ref={focusRef}
      cue={null}
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityRole="button"
      accessibilityState={{ expanded }}
      accessibilityLabel={`${T.bandChipLabel} ${levelLabel(band)}`}
      accessibilityHint={T.bandPanelTitle}
      hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
      // A bordered pill with a chevron: the old 4px-padded tinted tag read as
      // a label, not a control, so the seven-band switch was easy to miss.
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        minHeight: 36,
        paddingHorizontal: 14,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: t.accA(55),
        backgroundColor: t.accA(10),
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
      <Icon name="chevronDown" size={14} color={t.accTx} strokeWidth={2} />
    </Press>
  );
}

export function LevelPanel({
  open,
  onClose,
  onDismissed,
  band,
  onSelect,
  unitCounts,
  levelsAll,
}: {
  open: boolean;
  onClose: () => void;
  onDismissed?: () => void;
  band: Level;
  onSelect: (band: Level) => void;
  unitCounts: Record<Level, BandUnitCount>;
  levelsAll: boolean;
}) {
  const t = useTheme();
  const T = useT();
  const reduceMotion = useReduceMotion();
  const y = useRef(new Animated.Value(600)).current;
  const op = useRef(new Animated.Value(0)).current;
  const [mounted, setMounted] = useState<boolean>(open);
  const titleRef = useRef<View>(null);

  const focusTitle = () => {
    if (!open) return;
    const node = ReactNative.findNodeHandle(titleRef.current);
    if (node != null) AccessibilityInfo.setAccessibilityFocus(node);
  };

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
        onDismissed?.();
      } else {
        Animated.parallel([
          Animated.timing(y, { toValue: 600, duration: 320, useNativeDriver: true }),
          Animated.timing(op, { toValue: 0, duration: 300, useNativeDriver: true }),
        ]).start(() => {
          setMounted(false);
          onDismissed?.();
        });
      }
    }
  }, [open, mounted, reduceMotion, y, op, onDismissed]);

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

  // A locked band is SELECTED, not bounced to the paywall. D-21/D-22: a locked
  // band's trail stays readable, with TrailGateRow pinned above it as the
  // paywall's touchpoint, and every locked act row routes there on press. The
  // first build pushed /paywall straight from this row, so a learner without
  // Première could never see that trail at all (device pass, 2026-09-24,
  // block G). The row still names the paywall in words, so nothing about
  // the band is hidden before the tap.
  const onRowPress = (l: Level) => {
    onSelect(l);
  };

  return (
    <View accessibilityViewIsModal style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 40 }}>
      <Animated.View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: op }}>
        <Pressable onPress={onClose} accessibilityRole="button" accessibilityLabel={T.a11yDismissPanel} style={{ flex: 1, backgroundColor: t.alpha(t.bgDeep, 60) }} />
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
          <View ref={titleRef} accessible accessibilityRole="header" accessibilityLabel={T.bandPanelTitle} onLayout={focusTitle}>
            <TX font="serif" role="display" size={28} style={{ marginBottom: 14 }}>
              {T.bandPanelTitle}
            </TX>
          </View>

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
                  onPress={() => onRowPress(l)}
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
