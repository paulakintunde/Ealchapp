import { useRef } from 'react';
import { View } from 'react-native';
import { useFocusReturnRegister } from '@/a11y/focusReturn';
import { useRouter } from 'expo-router';
import { TX } from './Type';
import { Press } from './ui';
import { Icon } from './Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { track as trackEvent } from '@/services/analytics';

// D-21: "the paywall appears in exactly TWO trail positions... One
// component, two positions." Both variants push the exact same route with
// the exact same `from` — D-23 says `/paywall?from=gate:levels` and nothing
// else, so there is no second `from` value or new PAYWALL_COPY key hiding in
// here.
//
//   'gate'     — pinned above a locked band's trail (trailRows() emits it as
//                row 0 of a locked band, D-21 position 2), edge to edge via
//                the marginHorizontal: -24 bleed (theme.tsx:88's trick),
//                with the trail visible beneath it — never a full-screen
//                interstitial.
//   'boundary' — a row at the end of the A1 trail (D-21 position 1), naming
//                what comes next.
//
// A list item, not a floating view: den.tsx renders this AS a FlashList row,
// never nested inside a second scroll view (MissionSection.tsx:202-204).

export type TrailGateRowProps = {
  variant: 'gate' | 'boundary';
};

export function TrailGateRow({ variant }: TrailGateRowProps) {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const rowRef = useRef<View>(null);
  const registerReturn = useFocusReturnRegister();

  const onPress = () => {
    // D-03: Back from the paywall lands on this row, not the top of the den.
    registerReturn(rowRef);
    trackEvent('gate_blocked', { feature: 'levels.all', from: 'den' });
    router.push({ pathname: '/paywall', params: { from: 'gate:levels' } });
  };

  const lead = variant === 'gate' ? T.trailGateLead : T.trailBoundaryLead;

  return (
    <Press
      ref={rowRef}
      onPress={onPress}
      cue="tap"
      accessibilityRole="button"
      accessibilityLabel={`${lead}. ${T.a11yLockedPaywall}`}
      style={{
        marginHorizontal: variant === 'gate' ? -24 : 0,
        paddingHorizontal: variant === 'gate' ? 24 : 16,
        borderRadius: variant === 'gate' ? 0 : 16,
        borderWidth: variant === 'gate' ? 0 : 1,
        borderColor: t.accA(35),
        backgroundColor: t.accA(8),
        paddingVertical: 16,
        marginTop: variant === 'boundary' ? 4 : 0,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <Icon name="lock" size={16} color={t.accTx} strokeWidth={1.8} />
      {/* flex lives on the wrapper, never on a TX, or the title clips */}
      <View style={{ flex: 1, minWidth: 0 }}>
        <TX role="bodySm" color={t.accTx}>
          {lead}
        </TX>
      </View>
    </Press>
  );
}
