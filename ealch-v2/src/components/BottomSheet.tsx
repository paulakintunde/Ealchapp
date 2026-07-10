import { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path } from 'react-native-svg';
import { TX } from './Type';
import { Press } from './ui';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useUI } from '@/store/useUI';
import { sound } from '@/services';

const VOCAB = [
  { fr: 'un café allongé', en: 'a long espresso' },
  { fr: "une carafe d'eau", en: 'a jug of tap water (free)' },
  { fr: "l'addition", en: 'the bill' },
  { fr: 'sur place ou à emporter', en: 'for here or to go' },
];

const LIAISONS = [
  { fr: 'un‿allongé', hint: '« un-nallongé » — the n carries over' },
  { fr: 'les‿amis', hint: '« lé-zami » — s becomes z' },
  { fr: 'vous‿avez', hint: '« vou-zavé » — always, no exceptions' },
];

export function BottomSheet() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const { sheet, closeSheet } = useUI();
  const [done, setDone] = useState<Record<number, boolean>>({ 0: true });
  const y = useRef(new Animated.Value(600)).current;
  const op = useRef(new Animated.Value(0)).current;
  const [mounted, setMounted] = useState<boolean>(!!sheet);

  useEffect(() => {
    if (sheet) {
      setMounted(true);
      Animated.parallel([
        Animated.timing(y, { toValue: 0, duration: 340, useNativeDriver: true }),
        Animated.timing(op, { toValue: 1, duration: 300, useNativeDriver: true }),
      ]).start();
    } else if (mounted) {
      Animated.parallel([
        Animated.timing(y, { toValue: 600, duration: 320, useNativeDriver: true }),
        Animated.timing(op, { toValue: 0, duration: 300, useNativeDriver: true }),
      ]).start(() => setMounted(false));
    }
  }, [sheet, y, op, mounted]);

  if (!mounted) return null;

  const closeThen = (after?: () => void) => {
    closeSheet();
    if (after) setTimeout(after, 340);
  };

  return (
    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 40 }}>
      <Animated.View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: op }}>
        <Pressable onPress={() => closeThen()} style={{ flex: 1, backgroundColor: t.alpha(t.bgDeep, 60) }} />
      </Animated.View>

      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          maxHeight: '78%',
          borderTopLeftRadius: 26,
          borderTopRightRadius: 26,
          backgroundColor: t.sheet,
          borderTopWidth: 1,
          borderColor: t.line(10),
          transform: [{ translateY: y }],
        }}
      >
        <View style={{ alignItems: 'center', paddingTop: 12, paddingBottom: 4 }}>
          <View style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: t.line(18) }} />
        </View>

        <ScrollView contentContainerStyle={{ paddingHorizontal: 26, paddingTop: 14, paddingBottom: 44 }}>
          {sheet === 'vocab' ? (
            <>
              <TX font="semi" size={10} ls={2.6} color={t.acc} style={{ marginBottom: 10 }}>
                {T.vocabTag}
              </TX>
              <TX font="serif" size={28} style={{ marginBottom: 6 }}>
                Le vocabulaire du café
              </TX>
              <TX size={13} color={t.txA(55)} style={{ marginBottom: 22 }}>
                {T.vocabSub}
              </TX>
              <View style={{ gap: 10, marginBottom: 22 }}>
                {VOCAB.map((v, i) => {
                  const on = !!done[i];
                  return (
                    <Press
                      key={i}
                      cue="tap"
                      scale={0.99}
                      onPress={() => setDone((d) => ({ ...d, [i]: !d[i] }))}
                      style={{
                        minHeight: 56,
                        borderRadius: 14,
                        borderWidth: 1,
                        borderColor: on ? t.accA(45) : t.line(9),
                        backgroundColor: on ? t.accA(7) : t.card,
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 14,
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                      }}
                    >
                      <View
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: 11,
                          borderWidth: 1.5,
                          borderColor: on ? t.acc : t.line(25),
                          backgroundColor: on ? t.acc : 'transparent',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {on ? (
                          <Svg width={10} height={8} viewBox="0 0 10 8">
                            <Path d="M1 4l2.6 2.6L9 1" stroke={t.accInk} strokeWidth={1.8} strokeLinecap="round" fill="none" />
                          </Svg>
                        ) : null}
                      </View>
                      <View style={{ flex: 1 }}>
                        <TX font="serifI" size={17}>
                          {v.fr}
                        </TX>
                        <TX size={11.5} color={t.txA(45)} style={{ marginTop: 1 }}>
                          {v.en}
                        </TX>
                      </View>
                    </Press>
                  );
                })}
              </View>
              <View
                style={{
                  borderRadius: 14,
                  backgroundColor: t.accA(9),
                  borderWidth: 1,
                  borderColor: t.accA(25),
                  padding: 14,
                  paddingHorizontal: 16,
                  marginBottom: 22,
                }}
              >
                <TX font="semi" size={10} ls={2} color={t.acc} style={{ marginBottom: 6 }}>
                  {T.register}
                </TX>
                <TX size={13.5} lh={20} color={t.txA(85)}>
                  {T.registerBody} <TX font="serifI" size={14}>« je voudrais »</TX> — <TX font="serifI" size={14}>« je veux »</TX> {T.registerEnd}
                </TX>
              </View>
              <Press
                cue="tap"
                onPress={() => closeThen(() => router.push('/speak'))}
                style={{ height: 54, borderRadius: 27, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}
              >
                <TX font="semi" size={15} color={t.accInk}>
                  {T.go}
                </TX>
              </Press>
            </>
          ) : (
            <>
              <TX font="semi" size={10} ls={2.6} color={t.acc} style={{ marginBottom: 10 }}>
                {T.grammarTag}
              </TX>
              <TX font="serif" size={28} style={{ marginBottom: 14 }}>
                La liaison obligatoire
              </TX>
              <TX size={14} lh={23} color={t.txA(70)} style={{ marginBottom: 22 }}>
                {T.grammarBody}
              </TX>
              <View style={{ gap: 10, marginBottom: 24 }}>
                {LIAISONS.map((l, i) => (
                  <View
                    key={i}
                    style={{
                      minHeight: 58,
                      borderRadius: 14,
                      borderWidth: 1,
                      borderColor: t.line(8),
                      backgroundColor: t.card,
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 14,
                      paddingHorizontal: 16,
                      paddingVertical: 8,
                    }}
                  >
                    <Press
                      cue={null}
                      onPress={() => sound.play('tap')}
                      style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: t.accA(14), alignItems: 'center', justifyContent: 'center' }}
                    >
                      <Svg width={11} height={13} viewBox="0 0 11 13">
                        <Path d="M0 0.8C0 0.24 0.61-0.1 1.09 0.19l9.4 5.45a0.72 0.72 0 0 1 0 1.25L1.09 12.34C0.61 12.63 0 12.29 0 11.73V0.8Z" fill={t.acc} />
                      </Svg>
                    </Press>
                    <View style={{ flex: 1 }}>
                      <TX font="serifI" size={17}>
                        {l.fr}
                      </TX>
                      <TX size={11} color={t.txA(45)} style={{ marginTop: 1 }}>
                        {l.hint}
                      </TX>
                    </View>
                  </View>
                ))}
              </View>
              <Press
                cue="tap"
                onPress={() => closeThen(() => router.push('/chat'))}
                style={{ height: 54, borderRadius: 27, borderWidth: 1, borderColor: t.accA(55), alignItems: 'center', justifyContent: 'center' }}
              >
                <TX font="semi" size={15} color={t.acc}>
                  {T.askCamille}
                </TX>
              </Press>
            </>
          )}
        </ScrollView>
      </Animated.View>
    </View>
  );
}
