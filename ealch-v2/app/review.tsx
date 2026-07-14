import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader, ProgressBar } from '@/components/ui';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { sound } from '@/services';
import { reviewSession } from '@/content/drills';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';

export default function Review() {
  const t = useTheme();
  useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);
  const clearReview = useStore((s) => s.clearReview);
  useReadingBrightness();
  const fr = lang === 'fr';

  const items = reviewSession(lang);
  const [rvIx, setRvIx] = useState(0);
  const [rvRevealed, setRvRevealed] = useState(false);

  const it = items[Math.min(rvIx, items.length - 1)];
  const pct = ((rvIx + (rvRevealed ? 0.5 : 0)) / items.length) * 100;

  const reveal = () => {
    sound.play('flip');
    setRvRevealed(true);
  };
  const again = () => {
    sound.play('tap');
    setRvRevealed(false);
  };
  const gotIt = () => {
    const next = rvIx + 1;
    if (next >= items.length) {
      sound.play('ding');
      clearReview();
      router.replace('/home');
    } else {
      sound.play('tap');
      setRvIx(next);
      setRvRevealed(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} />
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 6, paddingBottom: insets.bottom + 40, flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        {/* Session header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <TX font="semi" role="eyebrow" ls={2.6} color={t.txSubtle}>
            {fr ? 'SESSION DE RÉVISION' : 'REVIEW SESSION'}
          </TX>
          <TX font="semi" role="label" color={t.txMuted}>
            {Math.min(rvIx + 1, items.length)} / {items.length}
          </TX>
        </View>
        <View style={{ marginBottom: 26 }}>
          <ProgressBar pct={pct} height={5} />
        </View>

        {/* Card meta */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <View style={{ minHeight: 20, paddingVertical: 2, paddingHorizontal: 9, borderRadius: 10, backgroundColor: t.tag(it.tone).bg, alignItems: 'center', justifyContent: 'center' }}>
            <TX font="bold" role="eyebrow" ls={1} color={t.tag(it.tone).c}>
              {it.type}
            </TX>
          </View>
          <TX role="meta" color={t.txSubtle} style={{ flex: 1 }}>
            {it.meta}
          </TX>
        </View>

        {/* Card */}
        <View style={{ borderRadius: 24, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, ...t.cardShadow, paddingVertical: 34, paddingHorizontal: 26, minHeight: 260, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <TX font="serif" role="display" size={38} center>
            {it.prompt}
          </TX>
          <TX font="serifI" role="bodySm" color={t.txMuted} center style={{ marginTop: 10 }}>
            {it.hint}
          </TX>
          {rvRevealed ? (
            <>
              <View style={{ width: 44, height: 1, backgroundColor: t.line(14), marginVertical: 22 }} />
              <TX font="semi" role="title" center>
                {it.answer}
              </TX>
              <TX font="serifI" role="label" lhMult={1.6} color={t.txMuted} center style={{ marginTop: 8 }}>
                {it.example}
              </TX>
            </>
          ) : null}
        </View>

        {/* Actions */}
        {rvRevealed ? (
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Press onPress={again} style={{ flex: 1, minHeight: 52, paddingVertical: 8, borderRadius: 26, borderWidth: 1, borderColor: t.line(14), alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="body" color={t.txSecondary}>
                {fr ? 'Encore' : 'Again'}
              </TX>
            </Press>
            <Press onPress={gotIt} style={{ flex: 1.4, minHeight: 52, paddingVertical: 8, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="body" color={t.accInk}>
                {fr ? 'Je sais ✓' : 'Got it ✓'}
              </TX>
            </Press>
          </View>
        ) : (
          <Press cue={null} onPress={reveal} style={{ minHeight: 52, paddingVertical: 8, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" role="body" color={t.accInk}>
              {fr ? 'Voir la réponse' : 'Reveal answer'}
            </TX>
          </Press>
        )}

        <TX font="serifI" role="meta" color={t.txSubtle} center style={{ marginTop: 16 }}>
          {fr ? '« Encore » le remet dans la file de demain.' : '“Again” puts it back in tomorrow’s queue.'}
        </TX>
      </ScrollView>
    </View>
  );
}
