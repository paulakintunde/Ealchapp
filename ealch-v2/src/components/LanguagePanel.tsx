import { useEffect, useRef, useState } from 'react';
import type { Ref } from 'react';
import { focusAfterOpen } from '@/a11y/focusNode';
import { Animated, BackHandler, Pressable, ScrollView, View } from 'react-native';
import { TX } from './Type';
import { Press } from './ui';
import { PanelRow } from './PanelRow';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useReduceMotion } from '@/utils/reduceMotion';

// The same panel shape LevelPanel uses (D-14), three rows instead of seven,
// so a fourth mode later costs one row instead of a redesign. Nothing here
// reads a store or reaches into the content-side gloss/reveal logic module —
// plan 07 supplies `mode` and its setter, so it wires the real logic in
// without ever editing this file.

export type LangMode = 'fr' | 'both' | 'onDemand';

/** The header control that opens the panel. It replaces app/lesson.tsx's
 *  EnglishToggle pill (D-13/D-14), with two deliberate differences:
 *  `accessibilityRole="button"` with `accessibilityState={{ expanded }}`, not
 *  `"switch"` — a switch has two states and this control has three — and its
 *  label comes from T, never a hardcoded English string the way
 *  EnglishToggle's `'Hide English translations'` does. */
export function LanguageChip({
  mode,
  expanded,
  onPress,
  focusRef,
}: {
  mode: LangMode;
  expanded: boolean;
  onPress: () => void;
  focusRef?: Ref<View>;
}) {
  const t = useTheme();
  const T = useT();
  const label = { fr: T.langModeFr, both: T.langModeBoth, onDemand: T.langModeOnDemand }[mode];
  return (
    <Press
      ref={focusRef}
      cue={null}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ expanded }}
      accessibilityLabel={T.langChipLabel}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      style={{
        minHeight: 32,
        paddingHorizontal: 10,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: t.line(14),
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* maxScale: a fixed-width header chip (Type.tsx:57-58) — the box
          cannot grow to follow the OS font scale, so the text is capped
          rather than clipped. */}
      <TX font="bold" role="label" ls={1} color={t.txSecondary} maxScale={1.3}>
        {label}
      </TX>
    </Press>
  );
}

export function LanguagePanel({
  mode,
  onSelect,
  open,
  onClose,
  onDismissed,
}: {
  mode: LangMode;
  onSelect: (mode: LangMode) => void;
  open: boolean;
  onClose: () => void;
  onDismissed?: () => void;
}) {
  const t = useTheme();
  const T = useT();
  const reduceMotion = useReduceMotion();
  const y = useRef(new Animated.Value(600)).current;
  const op = useRef(new Animated.Value(0)).current;
  const [mounted, setMounted] = useState<boolean>(open);
  const titleRef = useRef<View>(null);
  const focusTitle = () => focusAfterOpen(() => titleRef.current, () => open);

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

  // Same reasoning as LevelPanel.tsx: this is a local-state overlay, never a
  // route, so Android hardware back must close it explicitly or it pops the
  // screen underneath instead (sons-06-muettes.test.ts:484-491's bug class).
  useEffect(() => {
    if (!open) return undefined;
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      onClose();
      return true;
    });
    return () => sub.remove();
  }, [open, onClose]);

  if (!mounted) return null;

  const rows: { key: LangMode; title: string; sub: string }[] = [
    { key: 'fr', title: T.langModeFr, sub: T.langModeFrSub },
    { key: 'both', title: T.langModeBoth, sub: T.langModeBothSub },
    { key: 'onDemand', title: T.langModeOnDemand, sub: T.langModeOnDemandSub },
  ];

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
          maxHeight: '60%',
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
          <View ref={titleRef} accessible accessibilityRole="header" accessibilityLabel={T.langModeTitle} onLayout={focusTitle}>
            <TX font="serif" role="display" size={28} style={{ marginBottom: 14 }}>
              {T.langModeTitle}
            </TX>
          </View>

          <View style={{ gap: 9 }}>
            {rows.map((r) => (
              <PanelRow
                key={r.key}
                title={r.title}
                sub={r.sub}
                selected={r.key === mode}
                onPress={() => onSelect(r.key)}
                testID={`language-panel-row-${r.key}`}
              />
            ))}
          </View>
        </ScrollView>
      </Animated.View>
    </View>
  );
}
