import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader, ProgressBar } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useSessionLog } from '@/store/useProgress';
import { sound, tts } from '@/services';
import { deck } from '@/content';

export default function Flashcards() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const logSession = useSessionLog();

  const [cardIx, setCardIx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [cardDir, setCardDir] = useState<'fr' | 'en'>('fr');

  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(anim, {
      toValue: flipped ? 1 : 0,
      duration: 550,
      easing: Easing.bezier(0.32, 0.72, 0.35, 1),
      useNativeDriver: true,
    }).start();
  }, [flipped, anim]);

  const deckLen = deck.length;
  const deckOver = cardIx >= deckLen;
  const card = deck[Math.min(cardIx, deckLen - 1)];
  const frFront = cardDir === 'fr';

  const flipCard = () => {
    sound.play('flip');
    setFlipped((f) => !f);
  };

  const answerCard = (know: boolean) => {
    sound.play(know ? 'success' : 'tap');
    setFlipped(false);
    setKnown((k) => (know ? k + 1 : k));
    const lastCard = cardIx + 1 >= deckLen;
    setTimeout(() => setCardIx((i) => i + 1), 220);
    if (lastCard) logSession('flashcards', deckLen);
  };

  const flipDir = () => {
    sound.play('tap');
    setFlipped(false);
    setCardDir((d) => (d === 'fr' ? 'en' : 'fr'));
  };

  const restart = () => {
    sound.play('tap');
    setCardIx(0);
    setFlipped(false);
    setKnown(0);
  };

  const frontRotate = anim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
  const backRotate = anim.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '360deg'] });
  const faceBase = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 24,
    borderWidth: 1,
    padding: 30,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    backfaceVisibility: 'hidden' as const,
    overflow: 'hidden' as const,
  };

  return (
    <View style={{ flex: 1, backgroundColor: t.bg, paddingTop: insets.top }}>
      <LinearGradient
        colors={[t.accA(11), 'transparent']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 340 }}
      />
      <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} title={T.cardsTag} />

      <View style={{ flex: 1, paddingHorizontal: 24, paddingBottom: insets.bottom + 24 }}>
        {/* Direction toggle */}
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 14 }}>
          <Press
            onPress={flipDir}
            cue={null}
            style={{
              minHeight: 32,
              paddingVertical: 4,
              paddingHorizontal: 13,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: t.accA(50),
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TX font="semi" role="meta" ls={0.9} color={t.accTx}>
              {frFront ? 'FR → EN' : 'EN → FR'}
            </TX>
          </Press>
        </View>

        {/* Progress */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 22 }}>
          <View style={{ flex: 1 }}>
            <ProgressBar pct={Math.min(100, (cardIx / deckLen) * 100)} height={3} color={t.acc} track={t.line(10)} />
          </View>
          <TX role="meta" color={t.txMuted}>
            {Math.min(cardIx + 1, deckLen)} / {deckLen}
          </TX>
        </View>

        {deckOver ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>
            <TX font="serif" size={64} role="display" color={t.accTx}>
              {known}/{deckLen}
            </TX>
            <TX font="serifI" size={26} role="display" center style={{ marginTop: 10, marginBottom: 6 }}>
              {T.deckDone}
            </TX>
            <TX role="bodySm" center color={t.txMuted} style={{ marginBottom: 36, maxWidth: 260 }}>
              {T.deckSub}
            </TX>
            <Press
              onPress={restart}
              cue={null}
              style={{
                minHeight: 52,
                paddingVertical: 8,
                paddingHorizontal: 34,
                borderRadius: 26,
                backgroundColor: t.acc,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TX font="semi" role="body" color={t.accInk}>
                {T.redo}
              </TX>
            </Press>
            <Press onPress={() => router.replace('/home')} style={{ marginTop: 16 }}>
              <TX role="bodySm" color={t.txMuted}>
                {T.backFeed}
              </TX>
            </Press>
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            {/* Flip card */}
            <Press onPress={flipCard} cue={null} scale={1} style={{ flex: 1, maxHeight: 400 }}>
              {/* Front */}
              <Animated.View
                style={[
                  faceBase,
                  {
                    borderColor: t.line(10),
                    backgroundColor: t.card2,
                    transform: [{ perspective: 1200 }, { rotateY: frontRotate }],
                  },
                ]}
              >
                <TX font="semi" role="eyebrow" ls={2.8} color={t.accTx} style={{ marginBottom: 18 }}>
                  {frFront ? T.frontFr : T.frontEn}
                </TX>
                <TX font="serifI" size={33} role="display" center>
                  {frFront ? card.fr : card.en}
                </TX>
                <View style={{ marginTop: 22 }}>
                  <Waveform count={18} height={18} color={t.accA(55)} barWidth={2.5} gap={3.5} />
                </View>
                <TX font="semi" role="meta" ls={1.7} color={t.txSubtle} style={{ position: 'absolute', bottom: 20, textTransform: 'uppercase' }}>
                  {T.flipHint}
                </TX>
              </Animated.View>

              {/* Back */}
              <Animated.View
                style={[
                  faceBase,
                  {
                    borderColor: t.accA(40),
                    backgroundColor: t.accCard(10),
                    transform: [{ perspective: 1200 }, { rotateY: backRotate }],
                  },
                ]}
              >
                <TX font="semi" role="eyebrow" ls={2.8} color={t.txMuted} style={{ marginBottom: 18 }}>
                  {frFront ? T.frontEn : T.frontFr}
                </TX>
                <TX font="serif" size={29} role="display" center>
                  {frFront ? card.en : card.fr}
                </TX>
                <TX font="serifI" role="bodySm" center color={t.txMuted} style={{ marginTop: 16 }}>
                  {card.ex}
                </TX>
                <Press
                  onPress={() => tts.speak(card.fr)}
                  cue={null}
                  style={{
                    marginTop: 22,
                    width: 44,
                    height: 44,
                    borderRadius: 22,
                    borderWidth: 1,
                    borderColor: t.accA(50),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name="speaker" size={18} color={t.acc} />
                </Press>
              </Animated.View>
            </Press>

            {/* Actions */}
            <View style={{ flexDirection: 'row', gap: 12, marginTop: 26 }}>
              <Press
                onPress={() => answerCard(false)}
                cue={null}
                style={{
                  flex: 1,
                  minHeight: 54,
                  paddingVertical: 8,
                  borderRadius: 27,
                  borderWidth: 1,
                  borderColor: t.line(16),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TX font="semi" role="body" color={t.txSecondary}>
                  {T.again}
                </TX>
              </Press>
              <Press
                onPress={() => answerCard(true)}
                cue={null}
                style={{
                  flex: 1,
                  minHeight: 54,
                  paddingVertical: 8,
                  borderRadius: 27,
                  backgroundColor: t.acc,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TX font="semi" role="body" color={t.accInk}>
                  {T.know}
                </TX>
              </Press>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
