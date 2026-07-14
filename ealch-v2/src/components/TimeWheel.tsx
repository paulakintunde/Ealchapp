import { View } from 'react-native';
import { TX } from './Type';
import { Press } from './ui';
import { Icon } from './Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';

function Unit({ value, onStep }: { value: string; onStep: (dir: 1 | -1) => void }) {
  const t = useTheme();
  const arrow = (dir: 1 | -1) => (
    <Press
      onPress={() => onStep(dir)}
      scale={0.92}
      style={{
        width: 44,
        height: 32,
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: t.line(6),
      }}
    >
      <Icon name={dir === 1 ? 'chevronUp' : 'chevronDown'} size={15} color={t.txNonText} />
    </Press>
  );
  return (
    <View style={{ alignItems: 'center', gap: 8 }}>
      {arrow(1)}
      <View
        style={{
          width: 72,
          minHeight: 58,
          paddingVertical: 6,
          borderRadius: 14,
          borderWidth: 1,
          borderColor: t.accA(35),
          backgroundColor: t.input,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TX
          font="serif"
          role="display"
          size={30}
          color={t.accTx}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {value}
        </TX>
      </View>
      {arrow(-1)}
    </View>
  );
}

/** 12H / 24H clock-format segmented toggle — shared by onboarding step 8 and Settings. */
export function ClockToggle() {
  const t = useTheme();
  const T = useT();
  const clock24 = useStore((s) => s.clock24);
  const setClock24 = useStore((s) => s.setClock24);
  return (
    <View style={{ flexDirection: 'row', minHeight: 30, borderRadius: 15, borderWidth: 1, borderColor: t.line(14), overflow: 'hidden', alignSelf: 'flex-start' }}>
      {([false, true] as const).map((v) => {
        const on = clock24 === v;
        return (
          <Press key={String(v)} onPress={() => setClock24(v)} style={{ paddingHorizontal: 13, paddingVertical: 4, justifyContent: 'center', backgroundColor: on ? t.acc : 'transparent' }}>
            <TX font="semi" role="meta" ls={1} color={on ? t.accInk : t.txMuted}>
              {v ? T.clock24T : T.clock12T}
            </TX>
          </Press>
        );
      })}
    </View>
  );
}

/**
 * HH:MM stepper — no scrolling. The stored value is ALWAYS 24h "HH:MM";
 * in 12h mode the hour renders 1–12 with an AM/PM switch alongside.
 * Hours wrap, minutes step by 5. (Exported as TimeWheel for historical reasons.)
 */
export function TimeWheel({ value, onChange }: { value: string; onChange: (hhmm: string) => void }) {
  const t = useTheme();
  const clock24 = useStore((s) => s.clock24);
  const valid = /^\d{2}:\d{2}$/.test(value);
  const [h, m] = (valid ? value : '19:00').split(':').map((n) => parseInt(n, 10));
  const pad = (n: number) => String(n).padStart(2, '0');
  const stepH = (dir: 1 | -1) => onChange(`${pad((h + 24 + dir) % 24)}:${pad(m)}`);
  const stepM = (dir: 1 | -1) => onChange(`${pad(h)}:${pad((m + 60 + dir * 5) % 60)}`);
  const setMeridiem = (pm: boolean) => {
    if (pm === h >= 12) return;
    onChange(`${pad((h + 12) % 24)}:${pad(m)}`);
  };
  const hourLabel = clock24 ? pad(h) : String(h % 12 === 0 ? 12 : h % 12);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        paddingTop: 6,
        paddingBottom: 18,
      }}
    >
      <Unit value={hourLabel} onStep={stepH} />
      <TX font="serif" role="display" size={26} color={t.txSubtle} numberOfLines={1}>
        :
      </TX>
      <Unit value={pad(m)} onStep={stepM} />
      {!clock24 ? (
        <View style={{ gap: 8, marginLeft: 4 }}>
          {(['AM', 'PM'] as const).map((mer) => {
            const on = mer === 'PM' ? h >= 12 : h < 12;
            return (
              <Press
                key={mer}
                onPress={() => setMeridiem(mer === 'PM')}
                style={{
                  width: 52,
                  minHeight: 34,
                  paddingVertical: 6,
                  borderRadius: 11,
                  borderWidth: 1,
                  borderColor: on ? t.acc : t.line(12),
                  backgroundColor: on ? t.acc : 'transparent',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TX font="bold" role="meta" ls={1} color={on ? t.accInk : t.txMuted}>
                  {mer}
                </TX>
              </Press>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}
