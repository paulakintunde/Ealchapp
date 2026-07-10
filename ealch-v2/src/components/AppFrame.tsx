import { type ReactNode } from 'react';
import { Platform, View } from 'react-native';
import { useTheme } from '@/theme/useTheme';

/**
 * On web, constrains the app to a phone-width column on a themed "desk" so the
 * mobile design reads correctly in a browser. On native devices it is a plain
 * full-bleed passthrough.
 */
export function AppFrame({ children }: { children: ReactNode }) {
  const t = useTheme();
  if (Platform.OS !== 'web') return <>{children}</>;
  return (
    <View style={{ flex: 1, backgroundColor: t.desk2, alignItems: 'center' }}>
      <View
        style={{
          flex: 1,
          width: '100%',
          maxWidth: 430,
          backgroundColor: t.bg,
          overflow: 'hidden',
        }}
      >
        {children}
      </View>
    </View>
  );
}
