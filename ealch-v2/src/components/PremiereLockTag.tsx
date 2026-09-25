import { View } from 'react-native';
import { TX } from './Type';
import { Icon } from './Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';

// D-34: the PREMIÈRE lock pill, extracted rather than copy-pasted a seventh
// time. This exact JSX is copy-pasted byte-for-byte in six places today:
//   app/den.tsx (now rewritten to use this component instead of a seventh copy)
//   app/theme.tsx:187-193
//   app/flashthemes.tsx:161-170 (the canonical instance this component is
//     lifted from)
//   app/dictationthemes.tsx:174-179
//   app/voicethemes.tsx:138-143
//   app/sentencethemes.tsx:141-146
//
// Scope decision (07.1-09-PLAN.md "the six copies"): the trail uses this
// component so it is not a seventh copy. The other five screens above are
// DELIBERATELY NOT migrated in this phase — lockVisibilityWiring.test.ts:24
// asserts theme.tsx renders den.tsx's lock-tag string verbatim, and
// drillGateWiring.test.ts:40 asserts an exact multi-line source string in
// four drill screens. Migrating them is a real, testable follow-up job of
// its own, not this plan's.
//
// D-34: this component DERIVES NOTHING. The gate decision is made once, at
// the call site, from the entitlement feature flag plus the free-band list —
// this takes only the already-decided `locked` boolean, reads no store and
// imports no entitlement module of its own.

export type PremiereLockTagProps = {
  locked: boolean;
  size?: number;
};

export function PremiereLockTag({ locked, size = 11 }: PremiereLockTagProps) {
  const t = useTheme();
  const T = useT();
  if (!locked) {
    return <Icon name="chevronRight" size={13} color={t.txNonText} strokeWidth={1.6} />;
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingVertical: 5,
        paddingHorizontal: 9,
        borderRadius: 11,
        backgroundColor: t.accA(12),
      }}
    >
      <Icon name="lock" size={size} color={t.accTx} strokeWidth={2} />
      <TX font="bold" role="eyebrow" ls={1.2} color={t.accTx}>
        {T.premLockTag}
      </TX>
    </View>
  );
}
