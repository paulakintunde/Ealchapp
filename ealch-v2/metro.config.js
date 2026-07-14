// The app styles entirely with React Native inline styles + the theme in
// src/theme — there is not a single `className` in the codebase. NativeWind was
// therefore doing nothing except running its `jsxImportSource` Babel transform
// over every element, which corrupted inline style props on native (collapsed
// heights, overlapping layout). Removed; do not re-add without adopting
// className styling wholesale.
const { getDefaultConfig } = require('expo/metro-config');

module.exports = getDefaultConfig(__dirname);
