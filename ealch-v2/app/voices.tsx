import { useEffect, useMemo, useState } from 'react';
import { Platform, ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Speech from 'expo-speech';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';

// DEV-ONLY Camille voice audition (Blocker 4, CF-04). This route is guarded by
// __DEV__: in a production build it renders nothing and is not linked from any
// nav, so it can never ship to a user. It exists to let Paul hear every French
// device voice back to back and choose the one Camille speaks in. The chosen id
// is then recorded in ai_models.meta and surfaced to tts.ts via remote config —
// this screen only auditions; it writes nothing.
//
// Procedure (also in the master build doc):
//   1. On the Pixel, download the French voice data first: Settings →
//      Accessibility → Text-to-speech → (gear) → Install voice data → Français.
//      Without it the list is short and the good voices are missing.
//   2. Open this screen (ealch://voices on a dev build), tap each voice to hear
//      the same Camille line, note the identifier of the one you want.
//   3. A '-local' voice plays offline and is lower-latency; '-network' needs a
//      connection and can lag. Prefer -local for a narration voice.

// The audition line: a real Camille café line carrying BOTH a question and a
// number, because intonation (the rise on a question, the stress on a count) is
// exactly where French voices diverge and reveal their quality.
const SAMPLE = 'Bonjour ! Vous prenez combien de cafés ? Deux, comme d’habitude ?';

type Row = { identifier: string; name: string; quality: string; language: string };

export default function Voices() {
  const t = useTheme();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [rows, setRows] = useState<Row[] | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    Speech.getAvailableVoicesAsync()
      .then((vs) => {
        if (!alive) return;
        const fr = vs
          .filter((v) => v.language?.toLowerCase().startsWith('fr'))
          .map((v) => ({ identifier: v.identifier, name: v.name, quality: String(v.quality), language: v.language }))
          .sort((a, b) => a.identifier.localeCompare(b.identifier));
        setRows(fr);
      })
      .catch(() => alive && setRows([]));
    return () => {
      alive = false;
      Speech.stop();
    };
  }, []);

  // On Android the identifier encodes network vs local delivery, which decides
  // latency and offline availability — surface it so the pick is informed.
  const deliveryOf = (id: string): 'local' | 'network' | null => {
    if (Platform.OS !== 'android') return null;
    if (id.includes('-local')) return 'local';
    if (id.includes('-network')) return 'network';
    return null;
  };

  const play = (id: string) => {
    Speech.stop();
    setSpeakingId(id);
    Speech.speak(SAMPLE, {
      language: 'fr-FR',
      voice: id,
      rate: 0.95,
      onDone: () => setSpeakingId((s) => (s === id ? null : s)),
      onStopped: () => setSpeakingId((s) => (s === id ? null : s)),
      onError: () => setSpeakingId((s) => (s === id ? null : s)),
    });
  };

  const count = useMemo(() => rows?.length ?? 0, [rows]);

  // Production guard: never render the audition UI in a release build.
  if (!__DEV__) {
    return (
      <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
      <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} title="VOICE AUDITION" />
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 8, paddingBottom: insets.bottom + 40 }} showsVerticalScrollIndicator={false}>
        <TX font="serif" role="display" size={28} style={{ marginBottom: 6 }}>
          Camille voices
        </TX>
        <TX role="bodySm" color={t.txMuted} style={{ marginBottom: 6 }}>
          Dev only. {count} French voice{count === 1 ? '' : 's'} on this device. Tap to hear the sample; note the identifier of your pick.
        </TX>
        <View style={{ borderRadius: 12, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, padding: 12, marginBottom: 18 }}>
          <TX font="serifI" role="bodySm" color={t.txSecondary}>
            « {SAMPLE} »
          </TX>
        </View>

        {rows === null ? (
          <TX role="body" color={t.txMuted}>Loading voices…</TX>
        ) : rows.length === 0 ? (
          <TX role="body" color={t.txMuted} lhMult={1.6}>
            No French voices found. Install French voice data in the system Text-to-speech settings, then reopen this screen.
          </TX>
        ) : (
          <View style={{ gap: 8 }}>
            {rows.map((r) => {
              const on = speakingId === r.identifier;
              const delivery = deliveryOf(r.identifier);
              return (
                <Press
                  key={r.identifier}
                  onPress={() => play(r.identifier)}
                  cue={null}
                  style={{ borderRadius: 14, borderWidth: 1, borderColor: on ? t.accA(60) : t.line(8), backgroundColor: on ? t.accA(8) : t.card, padding: 14, flexDirection: 'row', alignItems: 'center', gap: 12 }}
                >
                  <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: on ? t.acc : t.accA(12), alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="play" size={18} color={on ? t.accInk : t.acc} />
                  </View>
                  <View style={{ flex: 1, minWidth: 0 }}>
                    <TX font="semi" role="bodySm" numberOfLines={1}>
                      {r.name || r.identifier}
                    </TX>
                    <TX role="meta" color={t.txSubtle} numberOfLines={1} style={{ marginTop: 2 }}>
                      {r.identifier}
                    </TX>
                    <View style={{ flexDirection: 'row', gap: 8, marginTop: 4 }}>
                      <TX role="meta" color={r.quality === 'Enhanced' ? t.accTx : t.txMuted}>
                        {r.quality}
                      </TX>
                      <TX role="meta" color={t.txMuted}>·  {r.language}</TX>
                      {delivery ? (
                        <TX role="meta" color={delivery === 'local' ? t.accTx : t.txMuted}>
                          ·  {delivery}
                        </TX>
                      ) : null}
                    </View>
                  </View>
                </Press>
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
