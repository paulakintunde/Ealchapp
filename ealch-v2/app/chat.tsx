import { useEffect, useRef, useState } from 'react';
import { Animated, ScrollView, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { sound, coach, type CoachMessage } from '@/services';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';

type Msg = { who: 'ai' | 'me'; text: string; time: string };

const SEED: Msg[] = [
  { who: 'ai', text: "Bonsoir — I read tonight's report. Your liaisons slipped on « un‿allongé », but your rhythm was your best yet.", time: '21:04' },
  { who: 'ai', text: 'Ask me anything — in French or English.', time: '21:04' },
];

// Blinking three-dot typing indicator.
function TypingDots() {
  const t = useTheme();
  const dots = [useRef(new Animated.Value(0.3)).current, useRef(new Animated.Value(0.3)).current, useRef(new Animated.Value(0.3)).current];
  useEffect(() => {
    const loops = dots.map((v, i) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(i * 200),
          Animated.timing(v, { toValue: 1, duration: 400, useNativeDriver: true }),
          Animated.timing(v, { toValue: 0.3, duration: 400, useNativeDriver: true }),
          Animated.delay((2 - i) * 200),
        ])
      )
    );
    loops.forEach((l) => l.start());
    return () => loops.forEach((l) => l.stop());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={{ alignSelf: 'flex-start', flexDirection: 'row', gap: 5, paddingVertical: 13, paddingHorizontal: 16, borderRadius: 16, borderBottomLeftRadius: 5, backgroundColor: t.card2, borderWidth: 1, borderColor: t.line(7) }}>
      {dots.map((v, i) => (
        <Animated.View key={i} style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: t.txNonText, opacity: v }} />
      ))}
    </View>
  );
}

export default function Chat() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);
  useReadingBrightness();

  const [messages, setMessages] = useState<Msg[]>(SEED);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState('');
  const scrollRef = useRef<ScrollView>(null);

  const stamp = (len: number) => '21:0' + (5 + (len % 4));

  const send = async (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    sound.play('tap');
    const time = stamp(messages.length);
    const next = [...messages, { who: 'me' as const, text, time }];
    setMessages(next);
    setDraft('');
    setTyping(true);
    const history: CoachMessage[] = next.map((m) => ({
      role: m.who === 'me' ? 'user' : 'assistant',
      content: m.text,
    }));
    let reply = '';
    try {
      reply = await coach.ask(history, lang);
    } catch {
      reply = T.chatRetry;
    }
    setTyping(false);
    setMessages((cur) => [...cur, { who: 'ai', text: reply, time: stamp(cur.length) }]);
  };

  const quickReplies = T.chatSuggs;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      {/* Top bar */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingTop: insets.top + 8, paddingBottom: 14, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: t.line(7) }}>
        <Press cue={null} onPress={() => router.replace('/home')} style={{ width: 36, height: 44, marginLeft: -8, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="chevronLeft" size={20} color={t.txNonText} strokeWidth={1.7} />
        </Press>
        <View style={{ width: 42, height: 42, borderRadius: 21, backgroundColor: t.card2, borderWidth: 1, borderColor: t.accA(45), alignItems: 'center', justifyContent: 'center' }}>
          <TX font="serif" role="titleLg" size={21} color={t.accTx}>
            C
          </TX>
        </View>
        <View style={{ flex: 1 }}>
          <TX font="semi" role="bodyLg">
            Camille
          </TX>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 1 }}>
            <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: t.acc }} />
            <TX role="meta" color={t.txMuted}>
              {T.coachStatus}
            </TX>
          </View>
        </View>
        <TX font="semi" role="eyebrow" ls={1.8} color={t.txSubtle} numberOfLines={1} style={{ flexShrink: 1 }}>
          {T.unlimited}
        </TX>
      </View>

      {/* Messages */}
      <ScrollView
        ref={scrollRef}
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 18, gap: 10 }}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((m, i) => {
          const me = m.who === 'me';
          return (
            <View key={i} style={{ alignItems: me ? 'flex-end' : 'flex-start' }}>
              <View
                style={{
                  maxWidth: '78%',
                  paddingVertical: 11,
                  paddingHorizontal: 15,
                  borderRadius: 16,
                  borderBottomRightRadius: me ? 5 : 16,
                  borderBottomLeftRadius: me ? 16 : 5,
                  backgroundColor: me ? t.blend(t.acc, t.card2, 20) : t.card2,
                  borderWidth: 1,
                  borderColor: me ? t.accA(35) : t.line(7),
                }}
              >
                <TX role="body" lhMult={1.5} color={t.txPrimary}>
                  {m.text}
                </TX>
              </View>
              <TX role="meta" color={t.txSubtle} style={{ marginTop: 4, paddingHorizontal: 4 }}>
                {m.time}
              </TX>
            </View>
          );
        })}
        {typing ? <TypingDots /> : null}
      </ScrollView>

      {/* Quick replies */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8, paddingHorizontal: 18, paddingVertical: 8, alignItems: 'center' }}>
        {quickReplies.map((q, i) => (
          <Press key={i} onPress={() => send(q.msg)} style={{ minHeight: 34, paddingVertical: 6, paddingHorizontal: 15, borderRadius: 17, borderWidth: 1, borderColor: t.accA(45), alignItems: 'center', justifyContent: 'center' }}>
            <TX font="med" role="label" color={t.accTx}>
              {q.label}
            </TX>
          </Press>
        ))}
      </ScrollView>

      {/* Input row */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 18, paddingTop: 8, paddingBottom: insets.bottom + 12 }}>
        <TextInput
          value={draft}
          onChangeText={setDraft}
          onSubmitEditing={() => send(draft)}
          placeholder={T.placeholder}
          placeholderTextColor={t.txSubtle}
          returnKeyType="send"
          style={{ flex: 1, minHeight: 46, paddingVertical: 6, borderRadius: 23, borderWidth: 1, borderColor: t.line(12), backgroundColor: t.input, color: t.tx, paddingHorizontal: 18, fontSize: 14 }}
        />
        <Press onPress={() => send(draft)} style={{ width: 46, height: 46, borderRadius: 23, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="arrowRight" size={16} color={t.accInk} strokeWidth={1.8} />
        </Press>
      </View>
    </View>
  );
}
