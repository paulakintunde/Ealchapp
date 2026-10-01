import { useRef } from 'react';
import { focusAfterOpen } from '@/a11y/focusNode';
import { Pressable, View } from 'react-native';
import { TX } from './Type';
import { Press, Button } from './ui';
import { Icon } from './Icon';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useStore } from '@/store/useStore';
import { useUI } from '@/store/useUI';
import { tts } from '@/services';

/** Tap-to-save dictionary popover (word of the day → save to carnet). */
export function DictionaryOverlay() {
  const t = useTheme();
  const T = useT();
  const titleRef = useRef<View>(null);
  const lang = useStore((s) => s.lang);
  const fr = lang === 'fr';
  const { dictOpen, dictEntry, closeDict, dictSaved, toggleDictSaved } = useUI();
  if (!dictOpen || !dictEntry) return null;

  const e = dictEntry;
  const pos = fr ? e.posFr : e.posEn;

  return (
    <View accessibilityViewIsModal style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 55, justifyContent: 'center', padding: 22 }}>
      <Pressable onPress={closeDict} accessibilityRole="button" accessibilityLabel={T.a11yDismissPanel} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: t.alpha(t.bgDeep, 62) }} />
      <View
        style={{
          borderRadius: 24,
          backgroundColor: t.card2,
          borderWidth: 1,
          borderColor: t.line(12),
          padding: 22,
          shadowColor: '#000',
          shadowOpacity: 0.5,
          shadowRadius: 40,
          shadowOffset: { width: 0, height: 16 },
          elevation: 14,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <TX font="semi" role="meta" ls={2.4} color={t.accTx}>
            {fr ? 'MOT DU JOUR' : 'WORD OF THE DAY'}
          </TX>
          <Press onPress={closeDict} cue={null} accessibilityRole="button" accessibilityLabel={T.a11yClose}>
            <Icon name="x" size={18} color={t.txNonText} />
          </Press>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 10, marginTop: 8 }}>
          <View ref={titleRef} accessible accessibilityRole="header" accessibilityLabel={`${T.wordOfDay}. ${e.word}`} onLayout={() => focusAfterOpen(() => titleRef.current)}>
            <TX font="serif" role="display" size={30}>{e.word}</TX>
          </View>
          <Press onPress={() => tts.speak(e.speak)} accessibilityRole="button" accessibilityLabel={T.playAudioA11y} style={{ padding: 4 }}>
            <Icon name="speaker" size={28} color={t.acc} />
          </Press>
        </View>
        <TX role="bodySm" color={t.txMuted} style={{ marginTop: 2 }}>
          {`${pos} · ${e.ipa}`}
        </TX>

        <TX role="body" color={t.txSecondary} style={{ marginTop: 14 }}>
          {fr ? e.defFr : e.defEn}
        </TX>

        <View style={{ borderLeftWidth: 2, borderColor: t.accA(40), paddingLeft: 12, marginTop: 14 }}>
          <TX font="serifI" role="bodySm" color={t.txSecondary} lhMult={1.6}>
            {e.exampleFr}
          </TX>
          <TX role="label" color={t.txSubtle} style={{ marginTop: 4 }}>
            {e.exampleEn}
          </TX>
        </View>

        <Button
          label={dictSaved ? (fr ? 'Enregistré ✓' : 'Saved ✓') : fr ? 'Ajouter au carnet' : 'Save to carnet'}
          variant={dictSaved ? 'outline' : 'primary'}
          onPress={toggleDictSaved}
          style={{ marginTop: 20, minHeight: 48 }}
        />
      </View>
    </View>
  );
}
