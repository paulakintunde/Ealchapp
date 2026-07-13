/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  // 'class' keeps css-interop's web runtime from throwing when anything
  // mutates the root element's class list (the app themes itself via tokens,
  // so tailwind dark-variant behavior is unaffected).
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['InstrumentSerif', 'Georgia', 'serif'],
        serifItalic: ['InstrumentSerifItalic', 'Georgia', 'serif'],
        sans: ['InstrumentSans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
