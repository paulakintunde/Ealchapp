// Third-party attributions, as shipped.
//
// Both stores expect an app to make its open-source notices reachable, and the
// OFL in particular requires the font's copyright notice to travel with any
// software that bundles it. Neither was reachable anywhere in the app.
//
// ── Why this is a data file and not a screen ────────────────────────────────
//
// A hand-written notices screen is wrong within one `npm install`. React Native
// cannot read node_modules at runtime, so the list has to be checked in — but
// licences.test.ts regenerates it from package.json on every run and fails on
// any difference. A new dependency therefore turns the suite red until it is
// attributed here, which is the only version of this file that stays true.
//
// The licence STRINGS are the `license` field each package declares, quoted
// verbatim rather than interpreted. If a package ever ships something other
// than MIT, the test says so and the decision is a human one.

/** A runtime dependency, with the SPDX id its own package.json declares. */
export type Attribution = { name: string; licence: string };

/** Everything bundled into the app binary, from package.json `dependencies`.
 *  Generated — see licences.test.ts, which is what keeps it honest. */
export const RUNTIME_DEPS: Attribution[] = [
  { name: '@expo-google-fonts/instrument-sans', licence: 'MIT AND OFL-1.1' },
  { name: '@expo-google-fonts/instrument-serif', licence: 'MIT AND OFL-1.1' },
  { name: '@expo/metro-runtime', licence: 'MIT' },
  { name: '@react-native-async-storage/async-storage', licence: 'MIT' },
  { name: '@supabase/supabase-js', licence: 'MIT' },
  { name: 'expo', licence: 'MIT' },
  { name: 'expo-asset', licence: 'MIT' },
  { name: 'expo-audio', licence: 'MIT' },
  { name: 'expo-blur', licence: 'MIT' },
  { name: 'expo-brightness', licence: 'MIT' },
  { name: 'expo-constants', licence: 'MIT' },
  { name: 'expo-crypto', licence: 'MIT' },
  { name: 'expo-dev-client', licence: 'MIT' },
  { name: 'expo-file-system', licence: 'MIT' },
  { name: 'expo-font', licence: 'MIT' },
  { name: 'expo-haptics', licence: 'MIT' },
  { name: 'expo-linear-gradient', licence: 'MIT' },
  { name: 'expo-linking', licence: 'MIT' },
  { name: 'expo-notifications', licence: 'MIT' },
  { name: 'expo-router', licence: 'MIT' },
  { name: 'expo-speech', licence: 'MIT' },
  { name: 'expo-speech-recognition', licence: 'MIT' },
  { name: 'expo-splash-screen', licence: 'MIT' },
  { name: 'expo-status-bar', licence: 'MIT' },
  { name: 'expo-updates', licence: 'MIT' },
  { name: 'react', licence: 'MIT' },
  { name: 'react-dom', licence: 'MIT' },
  { name: 'react-native', licence: 'MIT' },
  { name: 'react-native-adapty', licence: 'MIT' },
  { name: 'react-native-gesture-handler', licence: 'MIT' },
  { name: 'react-native-reanimated', licence: 'MIT' },
  { name: 'react-native-safe-area-context', licence: 'MIT' },
  { name: 'react-native-screens', licence: 'MIT' },
  { name: 'react-native-svg', licence: 'MIT' },
  { name: 'react-native-url-polyfill', licence: 'MIT' },
  { name: 'react-native-web', licence: 'MIT' },
  { name: 'react-native-worklets', licence: 'MIT' },
  { name: 'zustand', licence: 'MIT' },
];

/** A named credit that is not an npm package: a typeface, a dataset, a service
 *  that produced something shipped. `note` is what it was actually used FOR,
 *  because a credit that does not say that is not an attribution. */
export type Credit = { name: string; note: string; url?: string };

/** The two typefaces. Bundled as font binaries, so the OFL notice travels with
 *  the app whether or not anyone reads this screen. */
export const FONTS: Credit[] = [
  {
    name: 'Instrument Serif',
    note: 'Rodrigo Fuenzalida and Instrument. SIL Open Font License 1.1.',
    url: 'https://fonts.google.com/specimen/Instrument+Serif',
  },
  {
    name: 'Instrument Sans',
    note: 'Rodrigo Fuenzalida, Jordan Egstad and Instrument. SIL Open Font License 1.1.',
    url: 'https://fonts.google.com/specimen/Instrument+Sans',
  },
];

/** Sources behind the CONTENT rather than the binary. None of these ships as
 *  code, and saying so is the point: Lexique is a build-time gate, not a
 *  runtime dependency, and the audio is a rendered artefact.
 *
 *  Lexique383 is credited by academic citation, which is what lexique.org asks
 *  for. The extract itself lives in ealch-admin/gates/data and is not shipped. */
export const CONTENT_SOURCES: Credit[] = [
  {
    name: 'Lexique 3.83',
    note: 'New, Pallier, Brysbaert & Ferrand. Used to verify noun gender and word frequency while authoring. Not shipped with the app.',
    url: 'http://www.lexique.org',
  },
  {
    name: 'ElevenLabs',
    note: 'Rendered the recorded voices in the exam listening papers.',
    url: 'https://elevenlabs.io',
  },
];

/** Distinct licences across the bundled packages, in display order. Derived,
 *  so a package arriving under a new licence shows up rather than hiding in a
 *  list everyone assumes says MIT. */
export function licenceKinds(deps: readonly Attribution[] = RUNTIME_DEPS): string[] {
  return [...new Set(deps.map((d) => d.licence))].sort();
}
