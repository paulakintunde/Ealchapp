import { type ReactNode } from 'react';
import {
  Pressable,
  View,
  type ViewStyle,
  type StyleProp,
  type PressableProps,
} from 'react-native';
import { TX } from './Type';
import { RadialGlow } from './RadialGlow';
import { Icon, type IconName } from './Icon';
import { useTheme } from '@/theme/useTheme';
import { sound, type Cue } from '@/services';

// ── Pressable with a subtle press-scale + optional sound cue ──
export type PressProps = PressableProps & {
  cue?: Cue | null;
  scale?: number;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

export function Press({ cue = 'tap', scale = 0.96, onPress, style, children, ...rest }: PressProps) {
  return (
    <Pressable
      onPress={(e) => {
        sound.unlock();
        if (cue) sound.play(cue);
        onPress?.(e);
      }}
      style={({ pressed }) => [
        { transform: [{ scale: pressed ? scale : 1 }] },
        typeof style === 'function' ? undefined : style,
      ]}
      {...rest}
    >
      {children}
    </Pressable>
  );
}

// ── Card surface ──
export function Card({
  children,
  style,
  padded = true,
}: {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  padded?: boolean;
}) {
  const t = useTheme();
  return (
    <View
      style={[
        {
          backgroundColor: t.card,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: t.line(8),
          padding: padded ? 16 : 0,
          ...t.cardShadow,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

// ── Primary / ghost button ──
export function Button({
  label,
  onPress,
  variant = 'primary',
  cue = 'tap',
  disabled,
  style,
  icon,
}: {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'ghost' | 'outline';
  cue?: Cue | null;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  icon?: IconName;
}) {
  const t = useTheme();
  const bg =
    variant === 'primary' ? t.acc : variant === 'outline' ? 'transparent' : t.line(6);
  const fg = variant === 'primary' ? t.accInk : t.txPrimary;
  return (
    <Press
      cue={cue}
      onPress={disabled ? undefined : onPress}
      style={[
        {
          minHeight: 54,
          paddingVertical: 12,
          borderRadius: 16,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 8,
          backgroundColor: bg,
          borderWidth: variant === 'outline' ? 1.5 : 0,
          borderColor: t.accA(50),
          opacity: disabled ? 0.4 : 1,
        },
        style,
      ]}
    >
      {icon ? <Icon name={icon} size={18} color={fg} /> : null}
      <TX font="semi" role="bodyLg" color={fg}>
        {label}
      </TX>
    </Press>
  );
}

// ── Progress bar (scrubber / lesson progress) ──
export function ProgressBar({
  pct,
  color,
  track,
  height = 4,
}: {
  pct: number;
  color?: string;
  track?: string;
  height?: number;
}) {
  const t = useTheme();
  return (
    <View
      style={{
        height,
        borderRadius: height,
        backgroundColor: track ?? t.line(10),
        overflow: 'hidden',
      }}
    >
      <View
        style={{
          height,
          borderRadius: height,
          width: `${Math.max(0, Math.min(100, pct))}%`,
          backgroundColor: color ?? t.acc,
        }}
      />
    </View>
  );
}

// ── Badge / chip / skill tag ──
export function Badge({
  label,
  color,
  bg,
  style,
}: {
  label: string;
  color?: string;
  bg?: string;
  style?: StyleProp<ViewStyle>;
}) {
  const t = useTheme();
  return (
    <View
      style={[
        {
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 7,
          backgroundColor: bg ?? t.accA(14),
          alignSelf: 'flex-start',
          flexShrink: 0,
        },
        style,
      ]}
    >
      <TX font="semi" role="eyebrow" ls={1} color={color ?? t.accTx} numberOfLines={1}>
        {label}
      </TX>
    </View>
  );
}

// ── Toggle switch ──
export function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  const t = useTheme();
  return (
    <Press
      cue="tap"
      onPress={() => onChange(!value)}
      scale={1}
      style={{
        width: 48,
        height: 28,
        borderRadius: 14,
        padding: 3,
        backgroundColor: value ? t.acc : t.line(t.isDark ? 14 : 22),
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: 22,
          height: 22,
          borderRadius: 11,
          backgroundColor: value ? t.accInk : t.knob,
          alignSelf: value ? 'flex-end' : 'flex-start',
        }}
      />
    </Press>
  );
}

// ── Focus-screen header: X (left) → home, gear (right) → settings ──
export function FocusHeader({
  onClose,
  onSettings,
  title,
  extra,
}: {
  onClose: () => void;
  onSettings?: () => void;
  title?: string;
  /** An optional extra action rendered left of the gear (e.g. the lesson
   *  screen's "?" help button) — absent everywhere else, so every existing
   *  call site renders exactly as before. */
  extra?: ReactNode;
}) {
  const t = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 12,
      }}
    >
      <Press
        onPress={onClose}
        style={{
          width: 38,
          height: 38,
          borderRadius: 19,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: t.line(6),
        }}
      >
        <Icon name="x" size={18} color={t.tx} />
      </Press>
      {title ? (
        <TX
          font="semi"
          role="label"
          ls={2}
          color={t.txMuted}
          center
          numberOfLines={1}
          style={{ flex: 1, marginHorizontal: 8 }}
        >
          {title}
        </TX>
      ) : (
        <View />
      )}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        {extra}
        {onSettings ? (
          <Press
            onPress={onSettings}
            style={{
              width: 38,
              height: 38,
              borderRadius: 19,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: t.line(6),
            }}
          >
            <Icon name="gear" size={18} color={t.tx} />
          </Press>
        ) : !extra ? (
          <View style={{ width: 38 }} />
        ) : null}
      </View>
    </View>
  );
}

// ── Full-screen themed gradient background ──
export function ScreenBg({
  children,
  glow = true,
  style,
}: {
  children?: ReactNode;
  glow?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const t = useTheme();
  return (
    <View style={[{ flex: 1, backgroundColor: t.bg }, style]}>
      {glow ? <RadialGlow color={t.acc} opacity={0.12} height={320} /> : null}
      {children}
    </View>
  );
}
