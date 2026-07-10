import {
  InstrumentSerif_400Regular,
  InstrumentSerif_400Regular_Italic,
} from '@expo-google-fonts/instrument-serif';
import {
  InstrumentSans_400Regular,
  InstrumentSans_500Medium,
  InstrumentSans_600SemiBold,
  InstrumentSans_700Bold,
} from '@expo-google-fonts/instrument-sans';
import { useFonts } from 'expo-font';

// Font-family names used throughout the app (registered by useAppFonts).
export const F = {
  serif: 'InstrumentSerif',
  serifItalic: 'InstrumentSerifItalic',
  sans: 'InstrumentSans',
  sansMed: 'InstrumentSansMed',
  sansSemi: 'InstrumentSansSemi',
  sansBold: 'InstrumentSansBold',
} as const;

export function useAppFonts(): boolean {
  const [loaded] = useFonts({
    [F.serif]: InstrumentSerif_400Regular,
    [F.serifItalic]: InstrumentSerif_400Regular_Italic,
    [F.sans]: InstrumentSans_400Regular,
    [F.sansMed]: InstrumentSans_500Medium,
    [F.sansSemi]: InstrumentSans_600SemiBold,
    [F.sansBold]: InstrumentSans_700Bold,
  });
  return loaded;
}
