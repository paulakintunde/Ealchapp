// The app styles entirely with React Native inline styles + the theme in
// src/theme — there is not a single `className` in the codebase. NativeWind was
// therefore doing nothing except running its `jsxImportSource` Babel transform
// over every element, which corrupted inline style props on native (collapsed
// heights, overlapping layout). Removed; do not re-add without adopting
// className styling wholesale.
const { getDefaultConfig } = require('expo/metro-config');

// Expo pins resolver.useWatchman to null (see @expo/metro-config), which forces
// Metro onto its Node crawler. On this tree that crawl exceeds the hardcoded
// 240s limit in metro-file-map's Watcher and the bundler starts with no working
// transformer -- it serves a frozen snapshot and never sees your edits. Set
// EALCH_USE_WATCHMAN=1 to hand the crawl to watchman instead. Opt-in so the
// device workflow keeps Expo's default until this is proven there too.
const config = getDefaultConfig(__dirname);
if (process.env.EALCH_USE_WATCHMAN === '1') config.resolver.useWatchman = true;
module.exports = config;
