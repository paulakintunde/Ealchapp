import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TX } from '@/components/Type';
import { Press, Badge, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useSessionLog } from '@/store/useProgress';
import { sound, tts } from '@/services';
import { lessons, type TableCell } from '@/content/lessons';



const NASAL_PADS = [
  { sym: 'on', ipa: 'ɔ̃', word: 'bon' },
  { sym: 'en', ipa: 'ɑ̃', word: 'vent' },
  { sym: 'in', ipa: 'ɛ̃', word: 'vin' },
  { sym: 'un', ipa: 'œ̃', word: 'un' },
];

function SectionLabel({ text, color }: { text: string; color: string }) {
  return (
    <TX font="semi" size={10} ls={2.4} color={color} style={{ marginBottom: 10 }}>
      {text}
    </TX>
  );
}

export default function LessonScreen() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ key?: string }>();

  const raw = Array.isArray(params.key) ? params.key[0] : params.key;
  const key = raw && lessons[raw] ? raw : 'sons3';
  const L = lessons[key];

  const logSession = useSessionLog();

  const [phase, setPhase] = useState<'content' | 'quiz' | 'done'>('content');
  const [quizIx, setQuizIx] = useState(0);
  const [quizSel, setQuizSel] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [padOn, setPadOn] = useState<number | null>(null);
  const [audioOn, setAudioOn] = useState<number | null>(null);

  const acc = T; // alias for readability of interface strings

  // Build table rows from the flat cell array.
  const rows: TableCell[][] = [];
  for (let i = 0; i < L.table.length; i += L.tableCols) rows.push(L.table.slice(i, i + L.tableCols));

  const playPad = (i: number, word: string) => {
    sound.play('vowel');
    tts.speak(word);
    setPadOn(i);
    setTimeout(() => setPadOn((p) => (p === i ? null : p)), 700);
  };

  const playAudio = (i: number, str: string) => {
    sound.play('flip');
    tts.speak(str);
    setAudioOn(i);
    setTimeout(() => setAudioOn((a) => (a === i ? null : a)), 1600);
  };

  const startQuiz = () => {
    sound.play('tap');
    setPhase('quiz');
    setQuizIx(0);
    setQuizSel(null);
    setQuizScore(0);
  };

  const quizPick = (i: number) => {
    if (quizSel !== null) return;
    const ok = i === L.quiz[quizIx].correct;
    sound.play(ok ? 'success' : 'error');
    setQuizSel(i);
    if (ok) setQuizScore((s) => s + 1);
  };

  const quizNext = () => {
    if (quizIx + 1 >= L.quiz.length) {
      sound.play(quizScore >= 2 ? 'ding' : 'tap');
      setPhase('done');
      // Logged on a fail too: the user sat the lesson and spent the minutes,
      // and the streak is a record of showing up, not of scoring.
      logSession('lesson', L.quiz.length);
    } else {
      sound.play('tap');
      setQuizIx((q) => q + 1);
      setQuizSel(null);
    }
  };

  const retry = () => {
    sound.play('tap');
    setPhase('quiz');
    setQuizIx(0);
    setQuizSel(null);
    setQuizScore(0);
  };

  const pass = quizScore >= 2;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.back()} onSettings={() => router.push('/settings')} title={L.tag} />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: insets.bottom + 50, paddingTop: 8 }}
        showsVerticalScrollIndicator={false}
      >
        {phase === 'content' ? (
          <View>
            {/* Level chip */}
            <View
              style={{
                alignSelf: 'flex-start',
                height: 24,
                paddingHorizontal: 11,
                borderRadius: 12,
                backgroundColor: t.accA(14),
                justifyContent: 'center',
                marginBottom: 12,
              }}
            >
              <TX font="semi" size={10} ls={1.2} color={t.acc}>
                {L.level}
              </TX>
            </View>

            <TX font="serif" size={36} lh={40} style={{ marginBottom: 12 }}>
              {L.title}
            </TX>
            <TX size={14} lh={23} color={t.txA(65)} style={{ marginBottom: 26 }}>
              {L.intro}
            </TX>

            {/* Sub-lessons */}
            {L.subs ? (
              <View style={{ marginBottom: 26 }}>
                <SectionLabel text={acc.subsT} color={t.acc} />
                <View style={{ gap: 8 }}>
                  {L.subs.map((nm, i) => (
                    <View
                      key={i}
                      style={{
                        minHeight: 52,
                        borderRadius: 14,
                        borderWidth: 1,
                        borderColor: t.line(8),
                        backgroundColor: t.card,
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 12,
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                      }}
                    >
                      <View
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 15,
                          backgroundColor: t.accA(12),
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <TX font="serif" size={12} color={t.acc}>
                          {'0' + (i + 1)}
                        </TX>
                      </View>
                      <TX font="semi" size={13.5} style={{ flex: 1 }}>
                        {nm}
                      </TX>
                      {i === 0 ? (
                        <TX font="bold" size={9} ls={1.4} color={t.acc}>
                          {T.lessonNow}
                        </TX>
                      ) : null}
                    </View>
                  ))}
                </View>
              </View>
            ) : null}

            {/* Nasal sound pads */}
            {L.unique === 'nasal' ? (
              <View style={{ marginBottom: 26 }}>
                <SectionLabel text={T.tapHear} color={t.acc} />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                  {NASAL_PADS.map((p, i) => {
                    const on = padOn === i;
                    return (
                      <Press
                        key={i}
                        cue={null}
                        onPress={() => playPad(i, p.word)}
                        style={{
                          width: '47.7%',
                          height: 96,
                          borderRadius: 18,
                          borderWidth: 1,
                          borderColor: on ? t.acc : t.line(10),
                          backgroundColor: on ? t.acc : t.card2,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 8 }}>
                          <TX font="serifI" size={28} color={on ? t.accInk : t.tx}>
                            {p.sym}
                          </TX>
                          <TX size={15} color={on ? t.accInk : t.txA(55)}>
                            {p.ipa}
                          </TX>
                        </View>
                        <TX font="serifI" size={11} color={on ? t.accInk : t.txA(50)} style={{ marginTop: 4 }}>
                          {p.word}
                        </TX>
                      </Press>
                    );
                  })}
                </View>
              </View>
            ) : null}

            {/* Table */}
            <SectionLabel text={acc.tableT} color={t.acc} />
            <View
              style={{
                borderRadius: 16,
                borderWidth: 1,
                borderColor: t.line(9),
                backgroundColor: t.card,
                padding: 16,
                marginBottom: 26,
                gap: 10,
              }}
            >
              {rows.map((row, ri) => (
                <View key={ri} style={{ flexDirection: 'row', gap: 12 }}>
                  {row.map((c, ci) => (
                    <View key={ci} style={{ flex: 1 }}>
                      <TX
                        font={c.h ? 'semi' : 'sans'}
                        size={c.h ? 10 : 13}
                        ls={c.h ? 1.4 : 0}
                        lh={c.h ? 14 : 18}
                        color={c.h ? t.acc : t.txA(80)}
                      >
                        {c.v}
                      </TX>
                    </View>
                  ))}
                </View>
              ))}
            </View>

            {/* Examples */}
            <SectionLabel text={acc.examplesT} color={t.acc} />
            <View style={{ gap: 10, marginBottom: 26 }}>
              {L.examples.map((ex, i) => (
                <View
                  key={i}
                  style={{
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: t.line(8),
                    backgroundColor: t.card,
                    padding: 14,
                    paddingHorizontal: 16,
                  }}
                >
                  <TX font="serifI" size={18} style={{ marginBottom: 4 }}>
                    « {ex.fr} »
                  </TX>
                  <TX size={12} lh={17} color={t.txA(50)}>
                    {ex.en}
                  </TX>
                </View>
              ))}
            </View>

            {/* Video */}
            {L.video ? (
              <View style={{ marginBottom: 26 }}>
                <SectionLabel text={acc.videoT} color={t.acc} />
                <View
                  style={{
                    aspectRatio: 16 / 9,
                    borderRadius: 18,
                    borderWidth: 1,
                    borderColor: t.line(9),
                    backgroundColor: t.card2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                  }}
                >
                  <View
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 28,
                      backgroundColor: t.acc,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon name="play" size={18} color={t.accInk} />
                  </View>
                  <TX size={11} ls={1.4} color={t.txA(45)}>
                    2:14 · ɔ̃ · ɑ̃ · ɛ̃ · œ̃
                  </TX>
                </View>
              </View>
            ) : null}

            {/* Audio practice */}
            <SectionLabel text={acc.audioT} color={t.acc} />
            <View style={{ gap: 8, marginBottom: 26 }}>
              {L.audio.map((str, i) => {
                const on = audioOn === i;
                return (
                  <Press
                    key={i}
                    cue={null}
                    onPress={() => playAudio(i, str)}
                    style={{
                      height: 56,
                      borderRadius: 14,
                      borderWidth: 1,
                      borderColor: t.line(8),
                      backgroundColor: t.card,
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 13,
                      paddingHorizontal: 15,
                    }}
                  >
                    <View
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 16,
                        backgroundColor: t.accA(14),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon name="play" size={12} color={t.acc} />
                    </View>
                    <TX font="serifI" size={16} style={{ flex: 1 }}>
                      {str}
                    </TX>
                    <Waveform count={14} height={16} barWidth={2.5} gap={3} active={on} color={on ? t.acc : t.txA(30)} />
                  </Press>
                );
              })}
            </View>

            {/* Common errors */}
            <SectionLabel text={acc.errorsT} color={t.danger} />
            <View style={{ gap: 10, marginBottom: 30 }}>
              {L.errors.map((er, i) => (
                <View
                  key={i}
                  style={{
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: t.dangerA(25),
                    backgroundColor: t.card,
                    padding: 14,
                    paddingHorizontal: 16,
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                    <TX font="serifI" size={16} color={t.danger} style={{ textDecorationLine: 'line-through' }}>
                      {er.wrong}
                    </TX>
                    <Icon name="arrowRight" size={13} color={t.txA(40)} strokeWidth={1.4} />
                    <TX font="serifI" size={16} color={t.acc}>
                      {er.right}
                    </TX>
                  </View>
                  <TX size={12} lh={18} color={t.txA(55)}>
                    {er.why}
                  </TX>
                </View>
              ))}
            </View>

            {/* Start quiz */}
            <Press
              cue={null}
              onPress={startQuiz}
              style={{
                height: 56,
                borderRadius: 28,
                backgroundColor: t.acc,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TX font="semi" size={15} color={t.accInk}>
                {acc.startQuiz}
              </TX>
            </Press>
          </View>
        ) : null}

        {phase === 'quiz' ? (
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
              <TX font="semi" size={10} ls={2.6} color={t.acc}>
                QUIZ
              </TX>
              <TX size={12} color={t.txA(50)}>
                {quizIx + 1} / {L.quiz.length}
              </TX>
            </View>
            <TX font="serif" size={26} lh={33} style={{ marginBottom: 24, minHeight: 66 }}>
              {L.quiz[quizIx].q}
            </TX>
            <View style={{ gap: 10, marginBottom: 24 }}>
              {L.quiz[quizIx].opts.map((o, i) => {
                const answered = quizSel !== null;
                const isCorrect = i === L.quiz[quizIx].correct;
                const isSel = quizSel === i;
                const border = answered
                  ? isCorrect
                    ? t.acc
                    : isSel
                      ? t.danger
                      : t.line(9)
                  : t.line(9);
                const bg = answered && isCorrect ? t.accA(10) : answered && isSel && !isCorrect ? t.dangerA(10) : t.card;
                const color = answered && isSel && !isCorrect ? t.danger : t.tx;
                return (
                  <Press
                    key={i}
                    cue={null}
                    onPress={() => quizPick(i)}
                    style={{
                      minHeight: 58,
                      borderRadius: 16,
                      borderWidth: 1.5,
                      borderColor: border,
                      backgroundColor: bg,
                      justifyContent: 'center',
                      paddingHorizontal: 18,
                      paddingVertical: 12,
                    }}
                  >
                    <TX font="med" size={15} color={color}>
                      {o}
                    </TX>
                  </Press>
                );
              })}
            </View>
            {quizSel !== null ? (
              <Press
                cue={null}
                onPress={quizNext}
                style={{
                  height: 52,
                  borderRadius: 26,
                  backgroundColor: t.acc,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TX font="semi" size={14} color={t.accInk}>
                  {acc.qNext}
                </TX>
              </Press>
            ) : null}
          </View>
        ) : null}

        {phase === 'done' ? (
          <View style={{ alignItems: 'center', paddingTop: 60 }}>
            {pass ? (
              <Badge
                label={acc.quizPassed}
                color={t.acc}
                bg="transparent"
                style={{
                  height: 34,
                  paddingHorizontal: 18,
                  borderRadius: 17,
                  borderWidth: 1.5,
                  borderColor: t.acc,
                  justifyContent: 'center',
                  marginBottom: 20,
                  transform: [{ rotate: '-3deg' }],
                }}
              />
            ) : (
              <TX font="semi" size={12} ls={2} color={t.txA(55)} style={{ marginBottom: 20 }}>
                {acc.quizFailed}
              </TX>
            )}
            <TX font="serif" size={64} lh={64} color={t.acc}>
              {quizScore} / {L.quiz.length}
            </TX>
            <TX font="serifI" size={24} style={{ marginTop: 12, marginBottom: 34 }}>
              {L.title}
            </TX>
            {pass ? (
              <Press
                cue={null}
                onPress={() => {
                  sound.play('tap');
                  router.back();
                }}
                style={{
                  height: 52,
                  paddingHorizontal: 34,
                  borderRadius: 26,
                  backgroundColor: t.acc,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TX font="semi" size={14} color={t.accInk}>
                  {acc.backToDen}
                </TX>
              </Press>
            ) : null}
            <Press cue={null} onPress={retry} style={{ marginTop: 16 }}>
              <TX size={13} color={t.txA(50)}>
                {acc.retry}
              </TX>
            </Press>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}
