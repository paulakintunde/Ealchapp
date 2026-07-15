import { useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, TextInput, View, type NativeSyntheticEvent, type TextInputSelectionChangeEventData } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useSessionLog } from '@/store/useProgress';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';
import { sound, tts } from '@/services';
import { content } from '@/services/content';
import { accentKeys, normDict } from '@/content/drills';
import { F } from '@/theme/fonts';

export default function Dictation() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  useReadingBrightness();
  const inputRef = useRef<TextInput>(null);

  // Dictation items from the corpus: { fr (the sentence), en, notes (the tip) }.
  const sentences = useMemo(() => content.itemsFor('dictation'), []);

  const logSession = useSessionLog();

  const [dcIx, setDcIx] = useState(0);
  const [dcTyped, setDcTyped] = useState('');
  const [dcPhase, setDcPhase] = useState<'idle' | 'checked'>('idle');
  const [dcOkFlag, setDcOkFlag] = useState(false);
  const [dcScore, setDcScore] = useState(0);
  const [dcDone, setDcDone] = useState(false);
  const [dcPlays, setDcPlays] = useState(3);
  const [dcSlow, setDcSlow] = useState(false);
  const [dcSpeaking, setDcSpeaking] = useState(false);
  // Track the caret so an accent key inserts where the cursor is, not at the end.
  const [sel, setSel] = useState({ start: 0, end: 0 });

  // Stop any in-flight speech when leaving the screen.
  useEffect(() => () => tts.stop(), []);

  const d = sentences[Math.min(dcIx, sentences.length - 1)];
  const last = dcIx >= sentences.length - 1;
  const empty = !dcTyped.trim();

  const tag = T.dcTag;
  const count = `${Math.min(dcIx + 1, sentences.length)} / ${sentences.length}`;
  const title = T.dcTitle;
  const purpose = T.dcPurpose;
  const yourLabel = T.dcYours;
  const correctLabel = T.dcCorrect;
  const okSub = T.dcOkSub;
  const hint = T.dcHint;
  const listenLabel = dcSpeaking ? T.dcPlaying : T.dcPlay;
  const playsLeft = dcPlays > 0 ? `${dcPlays} ${T.dcPlaysLeft}` : T.dcNoPlays;

  const play = () => {
    if (dcSpeaking) return;
    if (dcPlays <= 0) {
      sound.play('error');
      return;
    }
    sound.play('tap');
    setDcSpeaking(true);
    // Spend a play only when the utterance actually COMPLETES. If there is no
    // French voice, expo-speech fires onError and the play is refunded — the
    // learner is never charged three plays for hearing nothing (review §dictation).
    tts.speak(d.fr, {
      slow: dcSlow,
      onDone: () => {
        setDcSpeaking(false);
        setDcPlays((p) => p - 1);
      },
      onError: () => setDcSpeaking(false),
    });
  };

  const toggleSlow = () => {
    sound.play('tap');
    setDcSlow((s) => !s);
  };

  const onSelChange = (e: NativeSyntheticEvent<TextInputSelectionChangeEventData>) =>
    setSel(e.nativeEvent.selection);

  const addAccent = (ch: string) => {
    if (dcPhase !== 'idle') return;
    sound.play('tap');
    // Insert at the caret, replacing any selection — appending to the end
    // corrupts the answer when the cursor is mid-sentence (review §dictation).
    setDcTyped((s) => {
      const start = Math.min(sel.start, s.length);
      const end = Math.min(sel.end, s.length);
      const next = s.slice(0, start) + ch + s.slice(end);
      const caret = start + ch.length;
      setSel({ start: caret, end: caret });
      return next;
    });
    inputRef.current?.focus();
  };

  const check = () => {
    if (empty) return;
    const ok = normDict(dcTyped) === normDict(d.fr);
    sound.play(ok ? 'success' : 'error');
    setDcOkFlag(ok);
    if (ok) setDcScore((s) => s + 1);
    setDcPhase('checked');
  };

  const advance = () => {
    if (last) {
      sound.play('ding');
      setDcDone(true);
      logSession('dictation', sentences.length);
    } else {
      sound.play('tap');
      setDcIx((i) => i + 1);
      setDcTyped('');
      setDcPhase('idle');
      setDcPlays(3);
    }
  };

  const restart = () => {
    sound.play('tap');
    setDcDone(false);
    setDcIx(0);
    setDcTyped('');
    setDcPhase('idle');
    setDcPlays(3);
    setDcScore(0);
  };

  const inputBorder =
    dcPhase === 'checked'
      ? dcOkFlag
        ? t.accA(60)
        : t.dangerA(50)
      : t.line(10);
  const btnActive = !(dcPhase === 'idle' && empty);
  const btnLabel =
    dcPhase === 'idle'
      ? T.check2
      : last
        ? T.dcFinish
        : T.dcNext;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => router.replace('/home')} onSettings={() => router.push('/settings')} />
      </View>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 8, paddingBottom: insets.bottom + 60 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Tag + count */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <TX font="semi" role="eyebrow" ls={2.4} color={t.txSubtle}>
            {tag}
          </TX>
          <TX font="semi" role="label" color={t.txMuted}>
            {count}
          </TX>
        </View>

        {dcDone ? (
          <View style={{ alignItems: 'center', paddingTop: 30 }}>
            <View
              style={{
                width: 96,
                height: 96,
                borderRadius: 48,
                borderWidth: 1.5,
                borderColor: t.accA(55),
                backgroundColor: t.accA(10),
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
              }}
            >
              <Svg width={36} height={28} viewBox="0 0 36 28" fill="none">
                <Path d="M2 15l10 10L34 3" stroke={t.acc} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
              </Svg>
            </View>
            <TX font="serifI" size={36} role="display" center style={{ marginBottom: 10 }}>
              {T.dcDoneT}
            </TX>
            <TX role="bodySm" lhMult={1.7} center color={t.txSecondary} style={{ maxWidth: 280, marginBottom: 30 }}>
              {T.dcDoneS.replace('{n}', String(dcScore)).replace('{m}', String(sentences.length))}
            </TX>
            <Press
              onPress={restart}
              cue={null}
              style={{ width: '100%', minHeight: 52, paddingVertical: 6, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}
            >
              <TX font="semi" role="body" color={t.accInk}>
                {T.dcRedo}
              </TX>
            </Press>
            <Press onPress={() => router.replace('/home')} cue={null} style={{ minHeight: 48, paddingVertical: 6, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="bodySm" color={t.txMuted}>
                {T.dcHome}
              </TX>
            </Press>
          </View>
        ) : (
          <>
            <TX font="serifI" size={32} role="display" style={{ marginBottom: 8 }}>
              {title}
            </TX>
            <TX role="label" lhMult={1.6} color={t.txMuted} style={{ marginBottom: 20 }}>
              {purpose}
            </TX>

            {/* Play card */}
            <View
              style={{
                borderRadius: 20,
                borderWidth: 1,
                borderColor: t.line(8),
                backgroundColor: t.card,
                padding: 18,
                paddingHorizontal: 20,
                marginBottom: 14,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <Press
                onPress={play}
                cue={null}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 26,
                  backgroundColor: dcPlays > 0 || dcSpeaking ? t.acc : t.line(16),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {dcSpeaking ? (
                  <Waveform active count={3} height={16} color={t.accInk} barWidth={3} gap={2.5} />
                ) : (
                  <Svg width={16} height={18} viewBox="0 0 16 18" fill="none">
                    <Path d="M2.5 2v14l12-7z" fill={dcPlays > 0 ? t.accInk : t.txNonText} />
                  </Svg>
                )}
              </Press>
              <View style={{ flex: 1 }}>
                <TX font="semi" role="bodySm">
                  {listenLabel}
                </TX>
                <TX role="meta" color={t.txSubtle} style={{ marginTop: 2 }}>
                  {playsLeft}
                </TX>
              </View>
              <Press
                onPress={toggleSlow}
                cue={null}
                style={{
                  minHeight: 30,
                  paddingVertical: 4,
                  paddingHorizontal: 12,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: dcSlow ? t.acc : t.line(14),
                  backgroundColor: dcSlow ? t.accA(12) : 'transparent',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TX font="bold" role="meta" color={dcSlow ? t.accTx : t.txMuted}>
                  {T.slow}
                </TX>
              </Press>
            </View>

            {/* Answer box */}
            <View
              style={{
                borderRadius: 20,
                borderWidth: dcPhase === 'checked' ? 1.5 : 1,
                borderColor: inputBorder,
                backgroundColor: t.input,
                padding: 18,
                paddingHorizontal: 20,
                marginBottom: 12,
              }}
            >
              <TX font="semi" role="meta" ls={2} color={t.txSubtle} style={{ marginBottom: 10 }}>
                {yourLabel}
              </TX>
              {dcPhase === 'idle' ? (
                <TextInput
                  ref={inputRef}
                  value={dcTyped}
                  onChangeText={setDcTyped}
                  selection={sel}
                  onSelectionChange={onSelChange}
                  onSubmitEditing={check}
                  returnKeyType="done"
                  placeholder={T.dcTypePh}
                  placeholderTextColor={t.txSubtle}
                  autoCorrect={false}
                  autoCapitalize="none"
                  style={{
                    fontFamily: F.serif,
                    fontSize: 22,
                    lineHeight: 30,
                    color: t.txPrimary,
                    padding: 0,
                  }}
                />
              ) : dcOkFlag ? (
                <TX font="serif" size={22} role="display" lhMult={1.5} color={t.accTx}>
                  {d.fr}
                </TX>
              ) : (
                <View>
                  <TX
                    font="serif"
                    size={21}
                    role="titleLg"
                    lhMult={1.43}
                    color={t.danger}
                    style={{ textDecorationLine: 'line-through', textDecorationColor: t.dangerA(50) }}
                  >
                    {dcTyped}
                  </TX>
                  <TX font="semi" role="meta" ls={2} color={t.accTx} style={{ marginTop: 12, marginBottom: 6 }}>
                    {correctLabel}
                  </TX>
                  <TX font="serif" size={22} role="display" lhMult={1.5} color={t.accTx}>
                    {d.fr}
                  </TX>
                </View>
              )}
            </View>

            {/* Why-tip on error */}
            {dcPhase === 'checked' && !dcOkFlag ? (
              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: t.accA(35),
                  backgroundColor: t.accA(6),
                  padding: 16,
                  paddingHorizontal: 20,
                  marginBottom: 12,
                }}
              >
                <TX role="label" lhMult={1.67} color={t.txSecondary}>
                  {d.notes}
                </TX>
              </View>
            ) : null}

            {/* Success card */}
            {dcPhase === 'checked' && dcOkFlag ? (
              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: t.accA(45),
                  backgroundColor: t.accA(9),
                  padding: 16,
                  paddingHorizontal: 20,
                  marginBottom: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 13,
                }}
              >
                <View style={{ width: 34, height: 34, borderRadius: 17, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="check" size={16} color={t.accInk} strokeWidth={2.4} />
                </View>
                <View style={{ flex: 1 }}>
                  <TX font="semi" role="bodySm">
                    {T.perfectNoMistakes}
                  </TX>
                  <TX role="label" lhMult={1.57} color={t.txSecondary} style={{ marginTop: 2 }}>
                    {okSub}
                  </TX>
                </View>
              </View>
            ) : null}

            {/* Accent key row */}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 8, marginBottom: 24 }}>
              {accentKeys.map((ch) => (
                <Press
                  key={ch}
                  onPress={() => addAccent(ch)}
                  cue={null}
                  scale={0.92}
                  style={{
                    width: 42,
                    minHeight: 42,
                    paddingVertical: 6,
                    borderRadius: 12,
                    backgroundColor: t.card2,
                    borderWidth: 1,
                    borderColor: t.line(8),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TX font="serif" role="title">
                    {ch}
                  </TX>
                </Press>
              ))}
            </View>

            {/* Action button */}
            <Press
              onPress={dcPhase === 'idle' ? check : advance}
              cue={null}
              style={{
                minHeight: 52,
                paddingVertical: 6,
                borderRadius: 26,
                backgroundColor: btnActive ? t.acc : t.line(10),
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TX font="semi" role="body" color={btnActive ? t.accInk : t.txSubtle}>
                {btnLabel}
              </TX>
            </Press>
            <TX role="meta" center color={t.txSubtle} style={{ marginTop: 14, fontStyle: 'italic' }}>
              {hint}
            </TX>
            <TX role="meta" center color={t.txSubtle} style={{ marginTop: 8, fontStyle: 'italic' }}>
              {T.dcVoiceNote}
            </TX>
          </>
        )}
      </ScrollView>
    </View>
  );
}
