import { Pressable, View } from 'react-native';
import { TX } from './Type';
import { Press, Button } from './ui';
import { Icon } from './Icon';
import { useTheme } from '@/theme/useTheme';
import { useStore } from '@/store/useStore';
import { useUI } from '@/store/useUI';
import { tts } from '@/services';

/** Tap-to-save dictionary popover (word of the day → save to carnet). */
export function DictionaryOverlay() {
  const t = useTheme();
  const lang = useStore((s) => s.lang);
  const fr = lang === 'fr';
  const { dictOpen, closeDict, dictSaved, toggleDictSaved } = useUI();
  if (!dictOpen) return null;

  const meaning = fr
    ? 'flânerie — se promener sans but, pour le plaisir'
    : 'strolling without hurry — wandering for the pleasure of it';

  return (
    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 55, justifyContent: 'center', padding: 22 }}>
      <Pressable onPress={closeDict} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: t.alpha(t.bgDeep, 62) }} />
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
          <Press onPress={closeDict} cue={null}>
            <Icon name="x" size={18} color={t.txNonText} />
          </Press>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 10, marginTop: 8 }}>
          <TX font="serif" role="display" size={30}>
            flânerie
          </TX>
          <Press onPress={() => tts.speak('la flânerie')} style={{ padding: 4 }}>
            <Icon name="speaker" size={20} color={t.acc} />
          </Press>
        </View>
        <TX role="bodySm" color={t.txMuted} style={{ marginTop: 2 }}>
          {fr ? 'nom féminin · /fla.nʁi/' : 'feminine noun · /fla.nʁi/'}
        </TX>

        <TX role="body" color={t.txSecondary} style={{ marginTop: 14 }}>
          {meaning}
        </TX>

        <View style={{ borderLeftWidth: 2, borderColor: t.accA(40), paddingLeft: 12, marginTop: 14 }}>
          <TX font="serifI" role="bodySm" color={t.txSecondary} lhMult={1.6}>
            On a passé l'après-midi en pleine flânerie le long de la Seine.
          </TX>
          <TX role="label" color={t.txSubtle} style={{ marginTop: 4 }}>
            {fr ? 'On a flâné tout l\'après-midi au bord de la Seine.' : 'We spent the afternoon strolling along the Seine.'}
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
