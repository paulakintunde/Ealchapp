// Word-level pronunciation practice — the drill-down behind Speak's missed
// words. One word per page, swipe (or chevron) between them, each take scored
// with the same scoreUtterance the sentence uses so the word's rank and the
// line's highlight can never disagree. Nothing here logs to the attempt log:
// these are rehearsals of a fragment, not attempts at the item.
import { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, Pressable, View, useWindowDimensions } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import { TX } from './Type';
import { Icon } from './Icon';
import { Press } from './ui';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { sound, tts, stt } from '@/services';
import {
  markWords, scoreUtterance, barsForLevel, isLenientLevel,
  type Verdict, type VerdictBars,
} from '@/utils/score';

type Take = { verdict: Verdict; score: number };

/** Score ONE word against what was heard. The sentence blend punishes extra
 *  words the recognizer tacked on ("chat" heard as "le chat"), which is noise,
 *  not pronunciation — so if the target word itself is in the transcript
 *  (same matching rule as the sentence highlights), the take is good. */
function scoreWord(word: string, transcript: string, bars: VerdictBars): Take {
  const base = scoreUtterance(word, transcript, bars);
  if (base.verdict !== 'good' && markWords(word, transcript).every((m) => m.hit)) {
    return { score: Math.max(base.score, bars.good), verdict: 'good' };
  }
  return base;
}

export function WordPractice({
  words,
  initialIx,
  level,
  onClose,
}: {
  words: string[];
  initialIx: number;
  /** Station band — sets the verdict bars and the miss color (amber early,
   *  red at the advanced levels), matching the sentence screen behind. */
  level?: string;
  onClose: () => void;
}) {
  const t = useTheme();
  const T = useT();
  const { width } = useWindowDimensions();
  const bars = barsForLevel(level);
  const missColor = isLenientLevel(level) ? t.warn : t.danger;

  const [ix, setIx] = useState(Math.min(initialIx, Math.max(0, words.length - 1)));
  // Best take per word this session — a worse retry never demotes a word.
  const [takes, setTakes] = useState<Record<number, Take>>({});
  const [listening, setListening] = useState(false);
  const [partial, setPartial] = useState('');
  // What the recognizer heard on the last take of THIS page, and why a capture
  // produced nothing — silence here read as "the mic did not work".
  const [heardTx, setHeardTx] = useState('');
  const [captureErr, setCaptureErr] = useState<string | null>(null);
  // Guards a listen() that resolves after the learner swiped away.
  const pageToken = useRef(0);
  const listRef = useRef<FlatList<string>>(null);

  const y = useRef(new Animated.Value(500)).current;
  useEffect(() => {
    Animated.timing(y, { toValue: 0, duration: 300, useNativeDriver: true }).start();
  }, [y]);

  // The coach says the word on entry and on every page change.
  useEffect(() => {
    const word = words[ix];
    if (word) tts.speak(word);
  }, [ix, words]);

  useEffect(() => {
    return () => {
      tts.stop();
      stt.abort();
    };
  }, []);

  const word = words[ix];
  const take = takes[ix];
  const got = take?.verdict === 'good';
  const allDone = words.every((_, i) => takes[i]?.verdict === 'good');
  const nextWrong = words.findIndex((_, i) => i > ix && takes[i]?.verdict !== 'good');
  const anyWrongBack = words.findIndex((_, i) => takes[i]?.verdict !== 'good');
  // The next stop after a win: the first not-yet-good word, ahead first.
  const nextTarget = nextWrong >= 0 ? nextWrong : anyWrongBack >= 0 && anyWrongBack !== ix ? anyWrongBack : -1;

  const goTo = (target: number) => {
    if (target < 0 || target >= words.length || target === ix) return;
    listRef.current?.scrollToIndex({ index: target, animated: true });
    setHeardTx('');
    setCaptureErr(null);
    setIx(target);
  };

  const micTap = async () => {
    if (!word) return;
    if (listening) {
      stt.stop();
      return;
    }
    sound.play('tap');
    setPartial('');
    setHeardTx('');
    setCaptureErr(null);
    setListening(true);
    const token = (pageToken.current += 1);
    const res = await stt.listen(word, { maxMs: 5000, onPartial: setPartial, bars });
    if (token !== pageToken.current) return;
    setListening(false);
    setPartial('');
    if (res.ok) {
      const scored = scoreWord(word, res.transcript, bars);
      setHeardTx(res.transcript);
      setTakes((prev) => {
        const before = prev[ix];
        return before && before.score >= scored.score ? prev : { ...prev, [ix]: scored };
      });
      sound.play(scored.verdict === 'good' ? 'success' : 'flip');
    } else {
      setCaptureErr(
        res.error === 'not-allowed' ? T.micDenied : !res.available ? T.micUnavail : T.micNoSpeech
      );
      sound.play('flip');
    }
  };

  const swipeEnd = (offsetX: number) => {
    const page = Math.round(offsetX / width);
    if (page !== ix && page >= 0 && page < words.length) {
      stt.abort();
      pageToken.current += 1;
      setListening(false);
      setPartial('');
      setHeardTx('');
      setCaptureErr(null);
      setIx(page);
    }
  };

  const verdictColor = (v?: Verdict) =>
    v === 'good' ? t.accTx : v === 'close' ? t.txPrimary : v ? missColor : t.txSubtle;

  return (
    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 50 }}>
      <Pressable onPress={onClose} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: t.alpha(t.bgDeep, 62) }} />
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          borderTopLeftRadius: 26,
          borderTopRightRadius: 26,
          backgroundColor: t.sheet,
          borderTopWidth: 1,
          borderColor: t.line(10),
          paddingBottom: 30,
          transform: [{ translateY: y }],
        }}
      >
        <View style={{ alignItems: 'center', paddingTop: 12, paddingBottom: 4 }}>
          <View style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: t.line(18) }} />
        </View>

        <View style={{ alignItems: 'center', paddingHorizontal: 24, paddingTop: 10 }}>
          <TX font="semi" role="eyebrow" ls={2.4} color={t.accTx}>
            {T.speakWordPracticeT.toUpperCase()}
          </TX>
          {/* One dot per word: quiet = untried, red = still wrong, accent = got it. */}
          <View style={{ flexDirection: 'row', gap: 7, marginTop: 12 }}>
            {words.map((_, i) => {
              const v = takes[i]?.verdict;
              return (
                <View
                  key={i}
                  style={{
                    width: i === ix ? 18 : 7,
                    height: 7,
                    borderRadius: 4,
                    backgroundColor: v === 'good' ? t.acc : v ? missColor : t.line(i === ix ? 26 : 14),
                  }}
                />
              );
            })}
          </View>
        </View>

        <FlatList
          ref={listRef}
          data={words}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(w, i) => `${w}-${i}`}
          initialScrollIndex={Math.min(initialIx, Math.max(0, words.length - 1))}
          getItemLayout={(_, i) => ({ length: width, offset: width * i, index: i })}
          onMomentumScrollEnd={(e) => swipeEnd(e.nativeEvent.contentOffset.x)}
          renderItem={({ item: w, index: i }) => {
            const tk = takes[i];
            return (
              <View style={{ width, alignItems: 'center', paddingTop: 26, paddingHorizontal: 30 }}>
                <TX font="serifI" size={34} role="display" center>
                  {w}
                </TX>
                <View style={{ minHeight: 44, marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                  {tk ? (
                    <>
                      <TX font="semi" role="meta" color={verdictColor(tk.verdict)}>
                        {tk.verdict === 'good' ? T.micGood : tk.verdict === 'close' ? T.micClose : T.micOff} · {Math.round(tk.score * 100)}%
                      </TX>
                      {i === ix && heardTx ? (
                        <TX role="meta" color={t.txSubtle} numberOfLines={1} style={{ marginTop: 4 }}>
                          {T.speakYouSaid} : « {heardTx} »
                        </TX>
                      ) : null}
                    </>
                  ) : (
                    <TX role="meta" color={t.txSubtle}>{T.micIdle}</TX>
                  )}
                </View>
              </View>
            );
          }}
        />

        {/* Transport: hear it · say it · next wrong word */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 34, marginTop: 8 }}>
          <Press
            onPress={() => {
              sound.play('tap');
              if (word) tts.speak(word);
            }}
            style={{ width: 46, height: 46, borderRadius: 23, borderWidth: 1, borderColor: t.line(14), alignItems: 'center', justifyContent: 'center' }}
            accessibilityLabel={T.playAudioA11y}
          >
            <Icon name="speaker" size={20} color={t.acc} />
          </Press>
          <Press
            onPress={micTap}
            cue={null}
            scale={0.94}
            accessibilityLabel={T.micA11y}
            style={{ width: 68, height: 68, borderRadius: 34, alignItems: 'center', justifyContent: 'center', backgroundColor: listening ? t.acc : t.line(4), borderWidth: 1, borderColor: listening ? t.acc : t.line(20) }}
          >
            <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <Rect x={9} y={3} width={6} height={11} rx={3} stroke={listening ? t.accInk : t.txNonText} strokeWidth={1.8} />
              <Path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke={listening ? t.accInk : t.txNonText} strokeWidth={1.8} strokeLinecap="round" />
            </Svg>
          </Press>
          <Press
            onPress={() => {
              sound.play('tap');
              goTo(nextTarget >= 0 ? nextTarget : ix + 1);
            }}
            accessibilityLabel={T.speakNextWord}
            accessibilityState={{ disabled: nextTarget < 0 && ix + 1 >= words.length }}
            style={{ width: 46, height: 46, borderRadius: 23, borderWidth: 1, borderColor: t.line(14), alignItems: 'center', justifyContent: 'center', opacity: nextTarget >= 0 || ix + 1 < words.length ? 1 : 0.35 }}
          >
            <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
              <Path d="M9 5l7 7-7 7" stroke={t.txNonText} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
            </Svg>
          </Press>
        </View>

        <View style={{ alignItems: 'center', marginTop: 14, minHeight: 20, paddingHorizontal: 30 }}>
          {listening ? (
            <TX font="semi" role="meta" ls={1.4} color={t.txSubtle} style={{ textTransform: 'uppercase' }} numberOfLines={1}>
              {partial || T.micRec}
            </TX>
          ) : captureErr ? (
            <TX role="meta" color={t.txSecondary} center numberOfLines={2}>
              {captureErr}
            </TX>
          ) : allDone ? (
            <TX font="semi" role="meta" color={t.accTx}>{T.speakWordAllDone}</TX>
          ) : got && nextTarget >= 0 ? (
            <TX role="meta" color={t.txSubtle}>{T.speakNextWord} →</TX>
          ) : null}
        </View>

        {/* Mastered (or done trying): back to the sentence and say it whole. */}
        <Press
          onPress={onClose}
          cue="tap"
          style={{ alignSelf: 'center', marginTop: 12, minHeight: 44, paddingVertical: 10, paddingHorizontal: 28, borderRadius: 22, backgroundColor: allDone ? t.acc : 'transparent', borderWidth: 1, borderColor: allDone ? t.acc : t.line(16), alignItems: 'center', justifyContent: 'center' }}
        >
          <TX font="semi" role="label" color={allDone ? t.accInk : t.txSecondary}>
            {T.speakBackToLine}
          </TX>
        </Press>
      </Animated.View>
    </View>
  );
}
