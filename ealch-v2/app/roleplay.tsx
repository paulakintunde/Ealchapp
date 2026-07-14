import { useEffect, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useSessionLog } from '@/store/useProgress';
import { sound, tts } from '@/services';
import { rpLines, type RpLevel } from '@/content';

type Msg = { who: 'ai' | 'me'; fr: string; en?: string };
const LEVELS: RpLevel[] = ['A1', 'A2', 'B1', 'B2'];

const LEVEL_DESC: Record<'fr' | 'en', Record<RpLevel, string>> = {
  en: {
    A1: 'Short, slow phrases. The vendor is patient.',
    A2: 'Prices, quantities, origins — real transactions.',
    B1: 'Advice, opinions, past mishaps.',
    B2: 'Banter, negotiation, and a vendor with opinions.',
  },
  fr: {
    A1: 'Des phrases courtes et lentes. Le marchand est patient.',
    A2: 'Prix, quantités, origines — de vraies transactions.',
    B1: 'Conseils, opinions, mésaventures passées.',
    B2: 'Répartie, négociation, et un marchand qui a du caractère.',
  },
};

export default function Roleplay() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const lang = useStore((s) => s.lang);

  const logSession = useSessionLog();

  const [level, setLevel] = useState<RpLevel>('A1');
  const [live, setLive] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [ix, setIx] = useState(0);
  const [busy, setBusy] = useState(false);

  const mounted = useRef(true);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const later = (fn: () => void, ms: number) => timers.current.push(setTimeout(fn, ms));
  const scrollRef = useRef<ScrollView>(null);
  useEffect(() => {
    return () => {
      mounted.current = false;
      timers.current.forEach(clearTimeout);
      tts.stop();
    };
  }, []);

  const speak = (fr: string) => tts.speak(fr);

  const start = () => {
    sound.play('tap');
    const first = rpLines[level][0];
    setMsgs([{ who: 'ai', fr: first.ai, en: first.en }]);
    setIx(0);
    setBusy(false);
    setLive(true);
    speak(first.ai);
  };

  const mic = () => {
    if (busy || ix >= 3) return;
    sound.play('tap');
    setBusy(true);
    const line = rpLines[level][ix];
    later(() => {
      if (!mounted.current) return;
      setMsgs((m) => [...m, { who: 'me', fr: line.user }]);
      const next = ix + 1;
      if (next < 3) {
        later(() => {
          if (!mounted.current) return;
          const nx = rpLines[level][next];
          setMsgs((m) => [...m, { who: 'ai', fr: nx.ai, en: nx.en }]);
          setIx(next);
          setBusy(false);
          speak(nx.ai);
        }, 1300);
      } else {
        later(() => {
          if (!mounted.current) return;
          sound.play('success');
          setIx(3);
          setBusy(false);
          logSession('roleplay', 3);
        }, 1000);
      }
    }, 1800);
  };

  const restart = () => {
    sound.play('tap');
    setMsgs([]);
    setIx(0);
    setBusy(false);
    setLive(false);
  };

  const finished = ix >= 3 && live && !busy;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <LinearGradient colors={[t.accA(11), 'transparent']} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 0.5 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 260 }} />
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} title={`JEU DE RÔLE · ${level}`} />
      </View>

      {/* ── SETUP ── */}
      {!live ? (
        <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 12, paddingBottom: insets.bottom + 28 }}>
          <TX font="serifI" size={40} lh={44} style={{ marginBottom: 8 }}>
            Au marché
          </TX>
          <TX size={14} lh={22} color={t.txA(55)} style={{ marginBottom: 28 }}>
            {LEVEL_DESC[lang][level]}
          </TX>
          <TX font="semi" size={10} ls={2.6} color={t.txA(45)} style={{ marginBottom: 12 }}>
            {T.chooseLevel}
          </TX>
          <View style={{ flexDirection: 'row', gap: 8, marginBottom: 16 }}>
            {LEVELS.map((l) => {
              const on = level === l;
              return (
                <Press
                  key={l}
                  cue={null}
                  onPress={() => {
                    sound.play('tap');
                    setLevel(l);
                  }}
                  style={{ flex: 1, height: 54, borderRadius: 16, borderWidth: 1, borderColor: on ? t.acc : t.line(12), backgroundColor: on ? t.accA(12) : 'transparent', alignItems: 'center', justifyContent: 'center' }}
                >
                  <TX font="serif" size={19} color={on ? t.acc : t.txA(60)}>
                    {l}
                  </TX>
                </Press>
              );
            })}
          </View>
          <TX size={12} lh={18} color={t.txA(40)}>
            {T.rpLevelNote}
          </TX>
          <View style={{ marginTop: 'auto' }}>
            <Press cue={null} onPress={start} style={{ height: 54, borderRadius: 27, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" size={15} color={t.accInk}>
                {T.startRp}
              </TX>
            </Press>
          </View>
        </View>
      ) : null}

      {/* ── LIVE ── */}
      {live ? (
        <View style={{ flex: 1, paddingHorizontal: 24, paddingBottom: insets.bottom + 20, minHeight: 0 }}>
          <ScrollView
            ref={scrollRef}
            style={{ flex: 1 }}
            contentContainerStyle={{ gap: 10, paddingVertical: 12 }}
            showsVerticalScrollIndicator={false}
            onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
          >
            {msgs.map((m, i) => {
              const me = m.who === 'me';
              return (
                <View key={i} style={{ alignItems: me ? 'flex-end' : 'flex-start' }}>
                  <View
                    style={{
                      maxWidth: '82%',
                      paddingVertical: 12,
                      paddingHorizontal: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      borderBottomLeftRadius: me ? 16 : 5,
                      borderBottomRightRadius: me ? 5 : 16,
                      backgroundColor: me ? t.accCard(20) : t.card2,
                      borderWidth: 1,
                      borderColor: me ? t.accA(35) : t.line(7),
                    }}
                  >
                    <TX font="serifI" size={16.5} lh={23}>
                      {m.fr}
                    </TX>
                    {m.en ? (
                      <TX size={11} color={t.txA(42)} style={{ marginTop: 5 }}>
                        {m.en}
                      </TX>
                    ) : null}
                  </View>
                </View>
              );
            })}
          </ScrollView>

          {finished ? (
            <View style={{ borderRadius: 20, borderWidth: 1, borderColor: t.accA(40), backgroundColor: t.accA(7), padding: 20, alignItems: 'center' }}>
              <TX font="serifI" size={24} center style={{ marginBottom: 6 }}>
                {T.rpDoneT}
              </TX>
              <TX size={12.5} lh={18} color={t.txA(60)} center style={{ marginBottom: 16 }}>
                {T.rpDoneS}
              </TX>
              <View style={{ flexDirection: 'row', gap: 10, alignSelf: 'stretch' }}>
                <Press cue={null} onPress={restart} style={{ flex: 1, height: 46, borderRadius: 23, borderWidth: 1, borderColor: t.line(16), alignItems: 'center', justifyContent: 'center' }}>
                  <TX font="semi" size={13}>
                    {T.redo}
                  </TX>
                </Press>
                <Press cue={null} onPress={() => router.push('/feedback')} style={{ flex: 1, height: 46, borderRadius: 23, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
                  <TX font="semi" size={13} color={t.accInk}>
                    Le Rapport →
                  </TX>
                </Press>
              </View>
              <Press cue={null} onPress={() => router.replace('/home')} style={{ marginTop: 14 }}>
                <TX size={13} color={t.txA(50)}>
                  {T.backFeed}
                </TX>
              </Press>
            </View>
          ) : (
            <View style={{ paddingTop: 10, gap: 14 }}>
              {/* The next line is shown before the mic tap: this is guided
                  reading aloud, not transcription — nothing is recorded. */}
              <View style={{ borderRadius: 16, borderWidth: 1, borderColor: t.accA(30), backgroundColor: t.accA(6), padding: 14, paddingHorizontal: 16 }}>
                <TX font="semi" size={9} ls={2.2} color={t.acc} style={{ marginBottom: 6 }}>
                  {T.rpYourLine}
                </TX>
                <TX font="serifI" size={17} lh={24}>
                  « {rpLines[level][ix].user} »
                </TX>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Press cue={null} onPress={mic} scale={0.94} style={{ width: 70, height: 70, borderRadius: 35, alignItems: 'center', justifyContent: 'center', backgroundColor: busy ? t.acc : t.line(4), borderWidth: 1, borderColor: busy ? t.acc : t.line(20) }}>
                  <Icon name="mic" size={26} color={busy ? t.accInk : t.tx} />
                </Press>
              </View>
            </View>
          )}
        </View>
      ) : null}
    </View>
  );
}
