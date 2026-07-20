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
import { sound, coach, stt, type CoachMessage } from '@/services';
import { track as trackEvent } from '@/services/analytics';
import { formatTime } from '@/utils/time';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';

// `tip` marks a reply served from the canned offline fallback rather than the
// live coach, so the bubble can say so instead of passing it off as the coach.
type Msg = { who: 'ai' | 'me'; text: string; time: string; tip?: boolean; capped?: boolean };
type CoachState = 'idle' | 'online' | 'offline';

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
  const clock24 = useStore((s) => s.clock24);
  useReadingBrightness();

  // Real wall-clock time in the user's chosen format — not the old stamp() that
  // returned 21:05–21:08 for every message at any hour of any day.
  const nowStamp = () =>
    formatTime(
      `${String(new Date().getHours()).padStart(2, '0')}:${String(new Date().getMinutes()).padStart(2, '0')}`,
      clock24
    );

  // A plain greeting — no invented "I read tonight's report" analysis of a
  // session that never happened.
  const [messages, setMessages] = useState<Msg[]>(() => [{ who: 'ai', text: T.chatGreet, time: nowStamp() }]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState('');
  // Unknown until the first exchange tells us whether the backend answered.
  const [coachState, setCoachState] = useState<CoachState>('idle');
  const [listening, setListening] = useState(false);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => () => stt.abort(), []);

  // Speak instead of type: the recognizer fills the draft (in the app's
  // language) so the user can read it back and edit before sending. Tap again
  // to stop early.
  const micTap = async () => {
    if (listening) {
      stt.stop();
      return;
    }
    sound.play('tap');
    setListening(true);
    const res = await stt.listen('', {
      lang: lang === 'fr' ? 'fr-FR' : 'en-US',
      maxMs: 8000,
      onPartial: setDraft,
    });
    setListening(false);
    if (res.ok && res.transcript) setDraft(res.transcript);
  };

  const send = async (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    sound.play('tap');
    const next = [...messages, { who: 'me' as const, text, time: nowStamp() }];
    setMessages(next);
    setDraft('');
    setTyping(true);
    const history: CoachMessage[] = next.map((m) => ({
      role: m.who === 'me' ? 'user' : 'assistant',
      content: m.text,
    }));
    let res: { reply: string; live: boolean; capped?: boolean };
    try {
      res = await coach.ask(history, lang);
    } catch {
      res = { reply: T.chatRetry, live: false };
    }
    setTyping(false);
    setCoachState(res.live ? 'online' : 'offline');
    if (res.capped) {
      // The backend answered: the free daily turns are spent. A truthful
      // refusal with the Phase 10 paywall as the way past it — never a canned
      // tip dressed up as a reply.
      trackEvent('gate_blocked', { feature: 'coach.unlimited', from: 'chat' });
      setMessages((cur) => [...cur, { who: 'ai', text: T.coachCapS, time: nowStamp(), capped: true }]);
      return;
    }
    setMessages((cur) => [...cur, { who: 'ai', text: res.reply, time: nowStamp(), tip: !res.live }]);
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
          {/* Honest status: neutral until we know, then online only when the
              backend actually answered; offline when serving canned tips. */}
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 1 }}>
            <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: coachState === 'online' ? t.acc : coachState === 'offline' ? t.txMuted : t.txNonText }} />
            <TX role="meta" color={t.txMuted}>
              {coachState === 'online' ? T.coachOnline : coachState === 'offline' ? T.coachOffline : T.coachIdle}
            </TX>
          </View>
        </View>
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
                {m.capped ? (
                  <TX font="semi" role="body" lhMult={1.4} color={t.accTx} style={{ marginBottom: 2 }}>
                    {T.coachCapT}
                  </TX>
                ) : null}
                <TX role="body" lhMult={1.5} color={t.txPrimary}>
                  {m.text}
                </TX>
                {m.capped ? (
                  <Press
                    onPress={() => router.push({ pathname: '/paywall', params: { from: 'gate:coach' } })}
                    style={{ marginTop: 10, alignSelf: 'flex-start', paddingVertical: 8, paddingHorizontal: 14, borderRadius: 15, backgroundColor: t.acc }}
                  >
                    <TX font="semi" role="label" color={t.accInk}>
                      {T.coachCapCta}
                    </TX>
                  </Press>
                ) : null}
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 4, paddingHorizontal: 4 }}>
                <TX role="meta" color={t.txSubtle}>
                  {m.time}
                </TX>
                {m.tip ? (
                  <TX role="meta" color={t.txSubtle} style={{ fontStyle: 'italic' }}>
                    · {T.coachTip}
                  </TX>
                ) : null}
              </View>
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
        {/* Speak instead of type */}
        <Press
          onPress={micTap}
          accessibilityLabel={T.placeholder}
          style={{ width: 46, height: 46, borderRadius: 23, backgroundColor: listening ? t.acc : t.card2, borderWidth: 1, borderColor: listening ? t.acc : t.line(12), alignItems: 'center', justifyContent: 'center' }}
        >
          <Icon name="mic" size={18} color={listening ? t.accInk : t.txNonText} strokeWidth={1.8} />
        </Press>
        <Press onPress={() => send(draft)} style={{ width: 46, height: 46, borderRadius: 23, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="arrowRight" size={16} color={t.accInk} strokeWidth={1.8} />
        </Press>
      </View>
    </View>
  );
}
