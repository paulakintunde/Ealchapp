// The premium pack download indicator (PREMIUM-PACKS-SPEC.md section 4).
//
// packs.ts runs the sync and holds its progress in usePackSync; this draws
// it. Everything it decides (whether to draw, the step, the line) is in
// packs.logic.ts and tested there. Calm on purpose: one quiet card, a thin
// bar that moves when a pack LANDS, and the reassurance that learning goes on.
// Nothing here blocks, and nothing appears when there is nothing to fetch.
import { View } from 'react-native';
import { TX } from '@/components/Type';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { usePackSync } from '@/services/packs';
import { packProgress, packProgressLine } from '@/services/packs.logic';

/** `sub` is the reassurance line: the downloads screen says learning goes
 *  on; the Den says this band's lessons are on their way. */
export function PackProgress({ sub, style }: { sub: string; style?: object }) {
  const t = useTheme();
  const T = useT();
  const sync = usePackSync();
  const p = packProgress(sync);
  if (!p) return null;

  const line = packProgressLine(p, { stepFmt: T.packDlStepFmt, countFmt: T.packDlCountFmt, examWord: T.packDlExam });
  return (
    <View
      accessible
      accessibilityRole="progressbar"
      accessibilityLabel={`${T.packDlT}, ${line}`}
      accessibilityValue={{ min: 0, max: p.total, now: p.done }}
      accessibilityLiveRegion="polite"
      style={[{ borderRadius: 18, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, ...t.cardShadow, padding: 16, marginBottom: 12 }, style]}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="download" size={16} color={t.acc} strokeWidth={1.9} />
        </View>
        {/* flex on the wrapper, never on a TX, or the title clips */}
        <View style={{ flex: 1, minWidth: 0 }}>
          <TX font="semi" role="bodySm">{T.packDlT}</TX>
          <TX role="meta" color={t.accTx} style={{ marginTop: 2 }}>{line}</TX>
        </View>
      </View>
      <View style={{ height: 4, borderRadius: 2, backgroundColor: t.line(10), marginTop: 12, overflow: 'hidden' }}>
        <View style={{ height: 4, borderRadius: 2, backgroundColor: t.acc, width: `${Math.round(p.fraction * 100)}%` }} />
      </View>
      <TX role="meta" lhMult={1.5} color={t.txMuted} style={{ marginTop: 10 }}>
        {sub}
      </TX>
    </View>
  );
}
