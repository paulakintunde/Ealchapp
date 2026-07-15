import { View } from 'react-native';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { useTheme } from '@/theme/useTheme';

// A compact segmented speed control shared by every player in the app. The value
// is a plain rate multiplier passed straight to tts.speak({ rate }), where 1 is
// the engine's normal speed. Slow rates (0.25×, 0.5×) are for catching every
// sound; fast ones (1.25×, 1.5×) for comprehension under pressure.
export const PLAYBACK_SPEEDS = [0.25, 0.5, 1, 1.25, 1.5];

const labelFor = (v: number) => (v === 1 ? '1×' : `${v}×`);

export function SpeedPicker({
  value,
  onChange,
  speeds = PLAYBACK_SPEEDS,
}: {
  value: number;
  onChange: (v: number) => void;
  speeds?: number[];
}) {
  const t = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: t.line(12),
        backgroundColor: t.card2,
        padding: 3,
        gap: 2,
      }}
    >
      {speeds.map((v) => {
        const on = v === value;
        return (
          <Press
            key={v}
            cue={null}
            onPress={() => onChange(v)}
            accessibilityRole="button"
            accessibilityState={{ selected: on }}
            style={{
              flex: 1,
              minHeight: 32,
              paddingVertical: 5,
              borderRadius: 15,
              backgroundColor: on ? t.acc : 'transparent',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TX font="semi" role="meta" color={on ? t.accInk : t.txSecondary}>
              {labelFor(v)}
            </TX>
          </Press>
        );
      })}
    </View>
  );
}
