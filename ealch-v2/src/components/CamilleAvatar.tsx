import { Image, View } from 'react-native';
import { useTheme } from '@/theme/useTheme';

// Camille's voice avatar (Phase 7 amendment, approved 2026-07-18): a small,
// static, circularly-cropped portrait shown wherever her voice is speaking or
// about to speak. Deliberately inert — no animation, no lip-sync, no
// speaking-state glow — the source PNG never changes, so there is nothing to
// drive off playback state. If a future build wants motion again, this is the
// one call site to swap.
//
// Source: camille-concepts/camille_B_avatar_1.png, already composed as a
// circular portrait on a filled square canvas (unlike the transparent
// cine-still concepts, which still need a real crop pass — see the
// amendment's open follow-ups). Resized to 200×200 and palette-quantized to
// ealch-v2/assets/camille/avatar.png, ~23 KB, comfortably under the "well
// under 50 KB" ceiling the amendment sets.
const AVATAR_SRC = require('../../assets/camille/avatar.png');

export function CamilleAvatar({ size = 56 }: { size?: number }) {
  const t = useTheme();
  return (
    <View
      // Decorative: the voice line it sits beside is what a screen reader
      // should announce, not "photo of a woman" (Accessibility Gate
      // amendment). Hidden from the accessibility tree entirely rather than
      // given an empty label, so it never becomes a focus stop either.
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: t.line(16),
      }}
    >
      <Image source={AVATAR_SRC} resizeMode="cover" style={{ width: size, height: size }} />
    </View>
  );
}
