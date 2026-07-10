import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { sound, tts } from '@/services';
import { placementQuestion } from '@/content/drills';

type Phase = 'q' | 'done';

// French stem read aloud by the LISTEN, THEN REPLY player.
const STEM = 'Tu es allé en France ?';

export default function Placement() {
  const t = useTheme();
  useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);
  const fr = lang === 'fr';

  const q = placementQuestion(lang);
  const [plPhase, setPlPhase] = useState<Phase>('q');
  const [plSel, setPlSel] = useState<number | null>(null);

  const isA2 = plSel === 0 || plSel === null;
  const barHeights = [10, 20, 14, 26, 12, 18, 8, 16];

  const estChip = plSel === 0 ? (fr ? 'A2 · en hausse ↑' : 'A2 · rising ↑') : plSel === null ? (fr ? 'A2 · en cours' : 'A2 · testing') : fr ? 'A1–A2 · en baisse ↓' : 'A1–A2 · dropping ↓';

  const cont = () => {
    sound.play('ding');
    setPlPhase('done');
  };
  const redo = () => {
    sound.play('tap');
    setPlPhase('q');
    setPlSel(null);
  };

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} />
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 6, paddingBottom: insets.bottom + 40 }} showsVerticalScrollIndicator={false}>
        <TX font="semi" size={9} ls={2.6} color={t.txA(45)} center style={{ marginBottom: 22 }}>
          {fr ? 'TEST DE PLACEMENT' : 'PLACEMENT TEST'}
        </TX>

        {plPhase === 'q' ? (
          <View>
            {/* Progress + Q number */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <View style={{ flex: 1, height: 5, borderRadius: 3, backgroundColor: t.line(8), overflow: 'hidden' }}>
                <View style={{ width: '58%', height: 5, borderRadius: 3, backgroundColor: t.acc }} />
              </View>
              <TX font="semi" size={11.5} color={t.txA(50)}>
                Q7
              </TX>
            </View>

            {/* Adaptive question */}
            <TX font="serif" size={26} lh={32} style={{ marginBottom: 16 }}>
              {q.prompt}
            </TX>

            {/* Estimate chip */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <TX size={12} color={t.txA(50)}>
                {fr ? 'Estimation actuelle' : 'Current estimate'}
              </TX>
              <View style={{ height: 26, paddingHorizontal: 12, borderRadius: 13, borderWidth: 1, borderColor: t.accA(50), flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: t.acc }} />
                <TX font="bold" size={12} ls={0.8} color={t.acc}>
                  {estChip}
                </TX>
              </View>
            </View>

            {/* Level pills */}
            <View style={{ flexDirection: 'row', gap: 5, marginBottom: 24 }}>
              {(['A1', 'A2', 'B1', 'B2'] as const).map((l) => {
                const on = l === 'A2';
                const bg = l === 'A2' ? t.acc : l === 'A1' ? t.accA(30) : l === 'B1' ? t.accA(13) : t.line(6);
                return (
                  <View key={l} style={{ flex: 1, height: 26, borderRadius: 8, backgroundColor: bg, alignItems: 'center', justifyContent: 'center' }}>
                    <TX font="bold" size={10} color={on ? t.accInk : t.txA(55)}>
                      {l}
                    </TX>
                  </View>
                );
              })}
            </View>

            {/* Listen card */}
            <View style={{ borderRadius: 20, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, padding: 22, marginBottom: 16 }}>
              <TX font="semi" size={10} ls={2.4} color={t.txA(40)} style={{ marginBottom: 14 }}>
                {fr ? 'ÉCOUTEZ, PUIS RÉPONDEZ' : 'LISTEN, THEN REPLY'}
              </TX>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                <Press cue="tap" onPress={() => tts.speak(STEM)} style={{ width: 52, height: 52, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
                  <Svg width={16} height={18} viewBox="0 0 16 18" fill="none">
                    <Path d="M2.5 2v14l12-7z" fill={t.accInk} />
                  </Svg>
                </Press>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2.5, height: 30 }}>
                  {barHeights.map((h, i) => (
                    <View key={i} style={{ width: 3, height: h, borderRadius: 2, backgroundColor: i < 5 ? t.accA(i < 3 ? 90 : 60) : t.line(20) }} />
                  ))}
                </View>
              </View>
              <TX font="serifI" size={13} color={t.txA(50)} style={{ marginTop: 14 }}>
                « {STEM} »
              </TX>
            </View>

            {/* Options */}
            <View style={{ gap: 10, marginBottom: 22 }}>
              {q.opts.map((o, i) => {
                const on = plSel === i;
                return (
                  <Press
                    key={i}
                    cue="tap"
                    onPress={() => setPlSel(i)}
                    style={{ borderRadius: 16, borderWidth: on ? 1.5 : 1, borderColor: on ? t.acc : t.line(8), backgroundColor: on ? t.accA(8) : t.card, paddingVertical: 15, paddingHorizontal: 16 }}
                  >
                    <TX size={14.5}>{o}</TX>
                  </Press>
                );
              })}
            </View>

            {plSel !== null ? (
              <Press cue={null} onPress={cont} style={{ height: 52, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <TX font="semi" size={14} color={t.accInk}>
                  {fr ? 'Continuer' : 'Continue'}
                </TX>
              </Press>
            ) : null}

            <TX font="serifI" size={11} lh={18} color={t.txA(35)} center>
              {fr
                ? 'Adaptatif — le test s’arrête quand votre niveau est fiable. Vous commencerez au bon endroit, pas à la page un.'
                : 'Adaptive — the test ends when your level is confident. You’ll start at the right unit, not at page one.'}
            </TX>
          </View>
        ) : (
          // ── Result ──
          <View style={{ alignItems: 'center', paddingTop: 20 }}>
            <TX font="semi" size={10} ls={2.8} color={t.txA(40)} style={{ marginBottom: 14 }}>
              {fr ? 'VOTRE RÉSULTAT' : 'YOUR RESULT'}
            </TX>
            <TX font="serifI" size={110} lh={110} color={t.acc}>
              {isA2 ? 'A2' : 'A1+'}
            </TX>
            <TX size={14} lh={24} color={t.txA(65)} center style={{ maxWidth: 290, marginTop: 22 }}>
              {isA2
                ? fr
                  ? 'Solide sur le présent et les bases — le passé composé est la prochaine marche.'
                  : 'Solid on the present tense and basics — passé composé is your next step.'
                : fr
                  ? 'Bonnes bases à l’oral, mais les temps du passé vous freinent — on consolide d’abord.'
                  : 'Good spoken instincts, but past tenses are holding you back — we’ll shore those up first.'}
            </TX>

            {/* Starting unit */}
            <View style={{ alignSelf: 'stretch', borderRadius: 18, borderWidth: 1, borderColor: t.accA(35), backgroundColor: t.accA(6), paddingVertical: 16, paddingHorizontal: 18, marginVertical: 26, flexDirection: 'row', alignItems: 'center', gap: 13 }}>
              <View style={{ width: 36, height: 36, borderRadius: 18, borderWidth: 1, borderColor: t.accA(55), alignItems: 'center', justifyContent: 'center' }}>
                <TX font="serif" size={14} color={t.acc}>
                  {isA2 ? '12' : '8'}
                </TX>
              </View>
              <View style={{ flex: 1 }}>
                <TX font="semi" size={13.5}>
                  {isA2 ? 'Passé Composé — avoir' : 'Le présent — verbes irréguliers'}
                </TX>
                <TX size={11} color={t.txA(50)} style={{ marginTop: 2 }}>
                  {fr ? 'Votre point de départ dans le Coin des débutants' : "Your starting unit in the Beginners' Den"}
                </TX>
              </View>
            </View>

            <Press cue={null} onPress={() => { sound.play('tap'); router.push('/den'); }} style={{ alignSelf: 'stretch', height: 52, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
              <TX font="semi" size={14} color={t.accInk}>
                {isA2 ? (fr ? "Commencer à l'unité 12" : 'Start at unit 12') : fr ? "Commencer à l'unité 8" : 'Start at unit 8'}
              </TX>
            </Press>
            <Press cue={null} onPress={redo} style={{ height: 48, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" size={13} color={t.txA(55)}>
                {fr ? 'Refaire le test' : 'Retake the test'}
              </TX>
            </Press>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
